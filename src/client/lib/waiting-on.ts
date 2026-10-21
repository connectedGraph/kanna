import type { WaitingOn } from "../../shared/types"
import type { TFunction } from "../i18n/catalogs"

/** The English words for a count of chats or agents, as the key to translate. */
function counted(t: TFunction, count: number, noun: "chat" | "agent") {
  return noun === "chat"
    ? t(count === 1 ? "{count} chat" : "{count} chats", { count })
    : t(count === 1 ? "{count} agent" : "{count} agents", { count })
}

/**
 * What a chat that is waiting on a subagent says it is waiting on: "Waiting
 * on 2 chats", "Waiting on 1 agent", "Waiting on 2 chats and 1 agent".
 *
 * Two nouns, because they are two things to a reader. A chat is a Kanna
 * sub-chat, which can be opened. An agent is the provider's own (a subagent,
 * a workflow), which is not a chat and has nowhere to open.
 *
 * With no count to go on it names no number: a wrong one would be read as
 * true. The server sends the count with the status (`WaitingOn`), so this is
 * for a server that does not yet.
 */
export function waitingOnLabel(waitingOn?: WaitingOn | null, t: TFunction = (key, vars) => {
  // Untranslated, for a caller that has no locale: the key, filled in.
  if (!vars) return key
  return key.replace(/\{(\w+)\}/g, (match, name: string) => (name in vars ? String(vars[name]) : match))
}): string {
  const parts: string[] = []
  if (waitingOn && waitingOn.chats > 0) parts.push(counted(t, waitingOn.chats, "chat"))
  if (waitingOn && waitingOn.agents > 0) parts.push(counted(t, waitingOn.agents, "agent"))
  return parts.length > 0 ? t("Waiting on {what}", { what: parts.join(t(" and ")) }) : t("Waiting on chats")
}
