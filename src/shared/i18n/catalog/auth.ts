import type { Messages } from "../index"

/** Sign-in, provider setup and the onboarding wizard. */
export const auth: Messages = {
  // AuthCard — provider row actions
  "Install": "安装",
  "Installing…": "安装中…",
  "Log In": "登录",
  "Authenticate": "授权登录",
  "Checking…": "检查中…",
  "Cancel": "取消",

  // AuthCard — sign-in flow
  "Starting sign-in…": "正在开始登录…",
  "Finishing sign-in…": "正在完成登录…",
  "Enter this code at": "在以下网址输入此代码：",
  "Copy code": "复制代码",
  "and approve the sign-in.": "并批准登录。",
  "Waiting for approval…": "等待批准…",
  "Open the sign-in page": "打开登录页",
  ", authorize, then paste the code you receive below.": "，完成授权，再把收到的代码粘贴到下面。",
  "Paste code": "粘贴代码",
  "Submit": "提交",
  "Try Again": "重试",

  // MacSetupStep — This Mac step
  "Checking this Mac…": "正在检查这台 Mac…",
  "Open at login": "登录时打开",
  "Approve Kanna in Login Items.": "在登录项中批准 Kanna。",
  "Back after a restart.": "重启后会自动回来。",
  "Stay awake": "保持唤醒",
  "Stay awake while plugged in": "插电时保持唤醒",
  "Closing the lid still sleeps it.": "合盖仍会进入睡眠。",
  "While plugged in.": "插电时生效。",
  "Also on battery": "使用电池时也保持",
  "Full Disk Access": "完全磁盘访问权限",
  "Agents reach every folder.": "Agent 可以访问所有文件夹。",
  "Click +, then choose Kanna.": "点按 +，然后选择 Kanna。",
  "Open Settings": "打开系统设置",

  // SetupCard — compact entry point
  "Set up Kanna": "设置 Kanna",
  "Setup": "设置",
  "Connect your coding agents to start building.": "连接编码 Agent 即可开始使用。",
  "Connect the rest of your accounts.": "连接其余的账号。",

  // SetupWizard — steps and footer
  "Continue": "继续",
  "Skip for now": "暂时跳过",
  "Set up later": "稍后设置",
  "Set up this Mac": "设置这台 Mac",
  "Keep your agents running while you're away.": "离开电脑时，Agent 也能持续运行。",
  "Connect GitHub": "连接 GitHub",
  "Clone repos and open pull requests.": "克隆仓库、发起 PR。",
  "Connect your agents": "连接 Agent",
  "At least one to start.": "至少连接一个即可开始。",
  "Connect OpenRouter": "连接 OpenRouter",
  "Powers Pi, chat names and commit messages.": "为 Pi、会话命名和提交信息提供支持。",
  "Use this machine anywhere": "随时随地使用这台机器",
  "A free URL for it, in any browser.": "在任意浏览器中，通过一个免费 URL 访问。",
  "Open link & sign in": "打开链接并登录",
  "You're all set": "全部准备就绪",
  "This Mac": "这台 Mac",
  "Partly": "部分完成",
  "Start Building": "开始构建",

  // SignInDialog
  "Sign in to {provider}": "登录 {provider}",
  "Install and sign in to {provider} to use it for this chat.": "安装并登录 {provider}，即可在这个会话中使用。",
  "Sign in to {provider} to use it for this chat. The switch applies automatically once you're signed in.":
    "登录 {provider}，即可在这个会话中使用。登录后会自动完成切换。",
  "this provider": "这个提供方",
}
