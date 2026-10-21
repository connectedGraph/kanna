import { Minimize } from "lucide-react"
import type { ProcessedStatusMessage } from "./types"
import { MetaRow, MetaLabel } from "./shared"
import { useT } from "../../i18n/useT"

interface Props {
  message: ProcessedStatusMessage
}

/** Status words as the transcript says them. The key is the English text, so a status that is not here reads as itself. */
const STATUS_LABELS: Record<string, string> = {
  compacting: "Compacting...",
}

export function StatusMessage({ message }: Props) {
  const t = useT()
  const label = STATUS_LABELS[message.status] ? t(STATUS_LABELS[message.status]) : message.status

  return (
    <MetaRow className={`grid grid-cols-[auto_1fr] items-center gap-1.5 text-sm animate-pulse`}>

      <div className={`w-5 h-5 relative flex items-center justify-center`}>


        <Minimize className={`h-4.5 w-4.5 text-muted-foreground`} />
      </div>
      <MetaLabel className={`text-left transition-opacity duration-200 truncate`}>{label}</MetaLabel>


    </MetaRow>
  )
}
