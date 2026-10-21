import type { Messages } from "./index"
import { auth } from "./catalog/auth"
import { chat } from "./catalog/chat"
import { home } from "./catalog/home"
import { git } from "./catalog/git"
import { messages } from "./catalog/messages"
import { misc } from "./catalog/misc"
import { navigation } from "./catalog/navigation"
import { palette } from "./catalog/palette"
import { settings } from "./catalog/settings"
import { widgets } from "./catalog/widgets"

/**
 * Simplified Chinese catalog.
 *
 * Keys are the English source text, verbatim, so this catalog has to stay in
 * step with the components that call `t()`. The coverage checker
 * (`scripts/check-coverage.ts`) reports keys no component uses any more.
 *
 * Split by area so different parts of the app can be translated without
 * editing one enormous object. A string belongs in the catalog of the area
 * that owns its component, and only there: `catalog.test.ts` fails on a key
 * that appears in more than one area, because which one won would otherwise
 * depend on merge order.
 *
 * Terminology lives in `docs/GLOSSARY.md` — check it before adding a term.
 */
export const zhCN: Messages = {
  ...settings,
  ...navigation,
  ...chat,
  ...messages,
  ...palette,
  ...home,
  ...git,
  ...widgets,
  ...auth,
  ...misc,
}
