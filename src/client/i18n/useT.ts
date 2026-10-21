import { useCallback } from "react"
import { normalizeLocale, type Locale } from "../../shared/i18n"
import { useAppSettingsStore } from "../stores/appSettingsStore"
import { translatorFor, type TFunction } from "./catalogs"

export { translatorFor, type TFunction }

/** The locale in effect. `useT()` is the usual way to read it. */
export function useLocale(): Locale {
  return useAppSettingsStore((store) => normalizeLocale(store.settings?.locale))
}

/**
 * The translator for the current locale.
 *
 * Reads the locale out of the app-settings store rather than a React context:
 * settings already arrive over the one WebSocket and already re-render their
 * subscribers, so a context would only add a provider to every test that
 * mounts a component.
 */
export function useT(): TFunction {
  const locale = useLocale()
  return useCallback((key, vars) => translatorFor(locale)(key, vars), [locale])
}
