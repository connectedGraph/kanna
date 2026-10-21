import { UserRound } from "lucide-react"
import type { ProcessedAccountInfoMessage } from "./types"
import { MetaRow, MetaLabel, ExpandableRow, VerticalLineContainer } from "./shared"
import { useT } from "../../i18n/useT"

interface Props {
  message: ProcessedAccountInfoMessage
}

export function AccountInfoMessage({ message }: Props) {
  const t = useT()
  return (
    <MetaRow className="hidden">
      <ExpandableRow
        expandedContent={
          <VerticalLineContainer className="my-4 text-xs">
            <pre className="font-mono whitespace-pre-wrap break-all bg-muted border border-border rounded-lg p-2 max-h-64 overflow-auto">
              {JSON.stringify(message.accountInfo, null, 2)}
            </pre>
          </VerticalLineContainer>
        }
      >
        <div className="size-5 flex justify-center items-center ">
          <UserRound className="h-4 w-4 text-muted-foreground" />
        </div>
        <MetaLabel>{t("Account")}</MetaLabel>
      </ExpandableRow>
    </MetaRow>
  )
}
