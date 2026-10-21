// i18n 覆盖率检查：组件里用了哪些 key，词表里有没对应译文，词表里哪些 key 已经没人用。
//
//   bun run i18n:coverage        (or: bun scripts/check-coverage.ts .)
//
// 退出码：有「用了但没译文」的 key → 1。
import { createRequire } from "node:module"
import { readFileSync, readdirSync, statSync } from "node:fs"
import { join, resolve } from "node:path"

const ROOT = resolve(process.argv[2] ?? join(import.meta.dir, ".."))
// `typescript` is a devDependency, resolved at runtime: the compiler API has no
// static types worth importing here, and a plain `import ts from "typescript"`
// would put the whole compiler in the type-check path.
const ts = createRequire(join(ROOT, "package.json"))("typescript") as typeof import("typescript")

/** The compiler API is a value here, not a namespace: name its types through it. */
type SyntaxNode = import("typescript").Node

const CATALOG_DIR = join(ROOT, "src/shared/i18n/catalog")

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) walk(path, out)
    else if (/\.tsx?$/.test(path) && !/\.test\.tsx?$/.test(path)) out.push(path)
  }
  return out
}

/**
 * Keys passed to the translator: `t("…")`, `tNow("…")`, `translate(catalog, "…")`,
 * plus whole-object translations whose first arg is an identifier that's not
 * a message catalog (settings registry labels etc.).
 */
function usedKeys(file: string): string[] {
  const source = readFileSync(file, "utf8")
  const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  const keys: string[] = []
  const visit = (node: SyntaxNode) => {
    if (ts.isCallExpression(node)) {
      const callee = node.expression
      let name: string | null = null
      if (ts.isIdentifier(callee)) name = callee.text
      else if (ts.isPropertyAccessExpression(callee)) name = callee.name.text
      const argIndex = name === "translate" ? 1 : 0
      if (name && ["t", "tNow", "translate"].includes(name)) {
        const arg = node.arguments[argIndex]
        if (arg && ts.isStringLiteral(arg)) keys.push(arg.text)
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  // String literals in settings registry files are keys too: `SETTINGS_ROWS`
  // and `SETTINGS_SECTIONS` hold English source text that the renderers pass
  // through `t()` dynamically, which the AST sweep above can't see.
  if (file.endsWith("app/settings/registry.ts")) {
    keys.push(...registryStringLiterals(source, file))
  }
  return keys
}

/** English `label:`/`title:`/`description:` literals in the settings registry. */
function registryStringLiterals(source: string, file: string): string[] {
  const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const keys: string[] = []
  const visit = (node: SyntaxNode) => {
    if (ts.isPropertyAssignment(node) && ts.isStringLiteral(node.initializer)) {
      const name = node.name.getText()
      if (["label", "title", "description", "subtitle"].includes(name)) keys.push(node.initializer.text)
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return keys
}

const catalogKeys = new Map<string, string>()
for (const file of walk(CATALOG_DIR)) {
  const sf = ts.createSourceFile(file, readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const area = file.slice(file.lastIndexOf("/") + 1, -3)
  const visit = (node: SyntaxNode) => {
    if (ts.isPropertyAssignment(node) && ts.isStringLiteral(node.name)) {
      catalogKeys.set(node.name.text, area)
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
}

const used = new Map<string, string[]>()
// Files that translate dynamically (`t(option.label)`, `t(section.label)`) and
// so may use any key: their area's unused report would be noise.
const dynamicFiles = new Set<string>()
for (const file of walk(join(ROOT, "src/client"))) {
  for (const key of usedKeys(file)) {
    const list = used.get(key) ?? []
    list.push(file.slice(ROOT.length + 1))
    used.set(key, list)
  }
  if (hasDynamicTranslate(file)) dynamicFiles.add(file.slice(ROOT.length + 1))
}

/**
 * True when the file calls the translator with anything but a string literal
 * (`t(option.label)`): its keys can't be enumerated statically.
 */
function hasDynamicTranslate(file: string): boolean {
  const source = readFileSync(file, "utf8")
  const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  let dynamic = false
  const visit = (node: SyntaxNode) => {
    if (ts.isCallExpression(node)) {
      const callee = node.expression
      let name: string | null = null
      if (ts.isIdentifier(callee)) name = callee.text
      else if (ts.isPropertyAccessExpression(callee)) name = callee.name.text
      if (name && ["t", "tNow", "translate"].includes(name)) {
        const argIndex = name === "translate" ? 1 : 0
        const arg = node.arguments[argIndex]
        if (arg && !ts.isStringLiteral(arg)) dynamic = true
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return dynamic
}

// Keys deliberately left untranslated: a key with no catalog entry renders the
// key itself, which is exactly the English these want (brands, model names,
// identifiers). Listed here so the gap report stays a to-do list.
const INTENTIONALLY_UNTRANSLATED = new Set([
  "Git",              // the tool's own name, in a widget title
  "Agent {number}",   // "Agent 3": a numbered label read as an identifier
  "Ultra → Max",      // a model's own effort naming
])

const missing = [...used.entries()].filter(([key]) => !catalogKeys.has(key) && !INTENTIONALLY_UNTRANSLATED.has(key))
// Which catalog area each dynamic file plausibly feeds, by directory.
function areaForFile(file: string): string | null {
  const path = file.replace(/^src\/client\//, "")
  if (path.startsWith("components/chat-ui/git/")) return "git"
  if (path.startsWith("components/chat-ui/widgets/")) return "widgets"
  if (/^components\/chat-ui\/(ChatInput|ChatPreferenceControls|RecordingWaveform)\.tsx$/.test(path)) return "chat"
  if (path.startsWith("components/chat-ui/")) return "navigation"
  if (path.startsWith("components/messages/")) return "messages"
  if (path.startsWith("components/command-palette/")) return "palette"
  if (path.startsWith("components/auth/")) return "auth"
  if (path.startsWith("components/home/")) return "home"
  if (path.startsWith("app/settings/") || path === "app/SettingsPage.tsx") return "settings"
  // Everything else — the app shell, tickets, viewers, cloud, dialogs — is
  // the misc catalog.
  if (path.startsWith("app/") || path.startsWith("components/") || path.startsWith("lib/")) return "misc"
  return null
}
const dynamicAreaSet = new Set([...dynamicFiles].map(areaForFile).filter(Boolean) as string[])
const unused = [...catalogKeys.keys()].filter((key) => {
  if (used.has(key)) return false
  // A key whose area contains dynamic-translation files may well be one of
  // theirs; reporting it as dead would invite deleting a live entry.
  return !dynamicAreaSet.has(catalogKeys.get(key)!)
})

const percent = used.size === 0 ? 100 : Math.round((1 - missing.length / used.size) * 1000) / 10
console.log(`组件里用到的 key   ${used.size}`)
console.log(`词表里的译文       ${catalogKeys.size}`)
console.log(`覆盖率             ${percent}%`)
console.log(`缺少译文           ${missing.length}`)

if (missing.length > 0) {
  console.log("\n缺少译文：")
  for (const [key, files] of missing) console.log(`  ${JSON.stringify(key)}\n      ${files.slice(0, 3).join(", ")}${files.length > 3 ? ` …(+${files.length - 3})` : ""}`)
}

if (unused.length > 0) {
  console.log(`\n词表里已无人使用的 key（${unused.length}）：`)
  for (const key of unused) console.log(`  ${JSON.stringify(key)}  ← ${catalogKeys.get(key)}`)
}

process.exit(missing.length > 0 ? 1 : 0)
