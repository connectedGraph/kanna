import { describe, expect, test } from "bun:test"
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

const areas = { settings, navigation, chat, messages, palette, home, auth, git, widgets, misc }

describe("zh-CN catalog", () => {
  test("no key is defined by two areas", () => {
    // Merge order in zh-CN.ts would silently decide which translation wins.
    const seen = new Map<string, string>()
    const duplicates: string[] = []
    for (const [area, messages] of Object.entries(areas)) {
      for (const key of Object.keys(messages)) {
        const previous = seen.get(key)
        if (previous) duplicates.push(`${key} (${previous}, ${area})`)
        else seen.set(key, area)
      }
    }
    expect(duplicates).toEqual([])
  })

  test("every value is translated, not left as the English source", () => {
    // A value identical to its key is a no-op entry: the English would render
    // anyway, so it only hides the gap.
    const unchanged = Object.entries(areas).flatMap(([area, messages]) =>
      Object.entries(messages)
        .filter(([key, value]) => key === value)
        .map(([key]) => `${area}: ${key}`)
    )
    expect(unchanged).toEqual([])
  })

  test("every value uses full-width Chinese punctuation", () => {
    // Half-width , ; : ? ! inside a Chinese sentence reads like a typo. The
    // colon is exempt: "Key: value" inside a label is common in English UI
    // text and some of those strings are kept as-is.
    const offenders = Object.entries(areas).flatMap(([area, messages]) =>
      Object.entries(messages)
        .filter(([, value]) => /[\u4e00-\u9fff][,;?!]/.test(value))
        .map(([key]) => `${area}: ${key}`)
    )
    expect(offenders).toEqual([])
  })
})
