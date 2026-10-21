import { translate, type Locale, type Messages } from "../../shared/i18n"
import { zhCN } from "../../shared/i18n/zh-CN"

/**
 * Catalogs by locale. `en` has none on purpose: the key is the English text,
 * so English is `translate()`'s fallback path and there is nothing to keep in
 * sync. React-free, so pure modules (command-palette builders, menu builders)
 * can translate without pulling in a hook.
 */
const CATALOGS: Record<Locale, Messages | undefined> = {
  en: undefined,
  "zh-CN": zhCN,
}

export type TFunction = (key: string, vars?: Record<string, string | number>) => string

/** A translator bound to one locale, for code that can't call a hook. */
export function translatorFor(locale: Locale): TFunction {
  const messages = CATALOGS[locale]
  return (key, vars) => translate(messages, key, vars)
}
