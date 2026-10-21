/**
 * Tiny i18n core. Zero dependencies, no React, no Bun/node APIs, so both the
 * client and the server can import it (see CLAUDE.md: `src/shared/` is shared).
 *
 * The message key is the English source text itself, not a semantic id like
 * `nav.chats`. Three things fall out of that choice:
 *
 * - English mode needs no catalog at all: a missing key renders the key, which
 *   is exactly the English string the component used to hardcode.
 * - A string the catalogs forgot degrades to readable English instead of a
 *   raw key in the UI.
 * - Editing an English string moves its key, so its translation goes stale
 *   visibly (the English shows) rather than silently.
 *
 * Placeholders are `{name}` and are filled from `vars`.
 */

export type Locale = "en" | "zh-CN"

export const DEFAULT_LOCALE: Locale = "en"

/** Locale picker entries, in the order the settings page offers them. */
export const LOCALES: { id: Locale; label: string }[] = [
  { id: "en", label: "English" },
  { id: "zh-CN", label: "简体中文" },
]

/** A flat catalog: English source text → translated text. */
export type Messages = Record<string, string>

export function isLocale(value: unknown): value is Locale {
  return LOCALES.some((entry) => entry.id === value)
}

/** Coerce an unknown value (a settings file, a wire payload) into a Locale. */
export function normalizeLocale(value: unknown): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE
}

const PLACEHOLDER = /\{(\w+)\}/g

/**
 * Look `key` up in `messages`, falling back to the key itself, then fill in
 * `{placeholders}`. A placeholder with no matching var is left as written so
 * the gap shows up in the UI instead of disappearing.
 */
export function translate(
  messages: Messages | undefined,
  key: string,
  vars?: Record<string, string | number>
): string {
  const template = messages?.[key] ?? key
  if (!vars) return template
  return template.replace(PLACEHOLDER, (match, name: string) =>
    Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match
  )
}
