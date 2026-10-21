import { describe, expect, test } from "bun:test"
import { isLocale, normalizeLocale, translate } from "./index"

describe("translate", () => {
  test("falls back to the key, which is the English source text", () => {
    expect(translate(undefined, "New Chat")).toBe("New Chat")
    expect(translate({}, "New Chat")).toBe("New Chat")
  })

  test("prefers the catalog", () => {
    expect(translate({ "New Chat": "新建会话" }, "New Chat")).toBe("新建会话")
  })

  test("fills placeholders", () => {
    const messages = { "Update to {version}": "更新到 {version}" }
    expect(translate(messages, "Update to {version}", { version: "0.83.0" })).toBe("更新到 0.83.0")
  })

  test("leaves an unfilled placeholder in place", () => {
    // A missing var should be visible in the UI, not silently blank.
    expect(translate({ "Update to {version}": "更新到 {version}" }, "Update to {version}", {})).toBe("更新到 {version}")
  })

  test("does not treat a missing var as inherited from the prototype", () => {
    expect(translate({ "a {toString} b": "a {toString} b" }, "a {toString} b", {})).toBe("a {toString} b")
  })

  test("substitutes every occurrence", () => {
    expect(translate({ "{a}-{a}": "{a}·{a}" }, "{a}-{a}", { a: "x" })).toBe("x·x")
  })
})

describe("locale guards", () => {
  test("accepts known locales only", () => {
    expect(isLocale("zh-CN")).toBe(true)
    expect(isLocale("en")).toBe(true)
    expect(isLocale("zh-TW")).toBe(false)
    expect(isLocale(undefined)).toBe(false)
  })

  test("normalizes junk to the default", () => {
    expect(normalizeLocale("zh-CN")).toBe("zh-CN")
    expect(normalizeLocale("klingon")).toBe("en")
    expect(normalizeLocale(7)).toBe("en")
  })
})
