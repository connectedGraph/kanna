import type { Messages } from "../index"

/** Settings pages: sections, rows, controls, labs. */
export const settings: Messages = {
  // ── The page shell (SettingsPage.tsx) ──────────────────────────────
  "Loading machine settings…": "正在加载机器设置…",
  "Machine": "机器",
  "Connection": "连接",
  "Projects Indexed": "已索引项目",
  "App Version": "应用版本",
  "Sign out": "退出登录",
  "Signing out...": "正在退出…",
  "Unavailable": "不可用",
  "unknown": "未知",

  // ── Section names and subtitles (registry.ts) ──────────────────────
  "General": "通用",
  "Appearance, notifications, chats, layout, editor, and terminal.":
    "外观、通知、会话、布局、编辑器与终端。",
  "What keeps your agents running on this Mac while you're away.":
    "离开时让 Agent 继续在这台 Mac 上运行的相关设置。",
  "Providers": "提供方",
  "Sign-ins, the default provider, and model defaults for each harness.":
    "各接入方式的登录状态、默认提供方与默认模型。",
  "Skills": "技能",
  "Global agent skills from the active skill lock file.":
    "来自当前技能锁定文件的全局 Agent 技能。",
  "Keybindings": "快捷键",
  "Edit global app shortcuts stored in the active keybindings file.":
    "编辑存在当前快捷键文件里的全局应用快捷键。",
  "Usage": "用量",
  "Subscription rate limits for each harness, with reset times.":
    "各接入方式的订阅限额，以及重置时间。",
  "Labs": "实验功能",
  "Experimental features that are still in progress.": "仍在开发中的实验性功能。",
  "Changelog": "更新日志",
  "Release notes from the public GitHub releases feed.":
    "来自 GitHub 公开发布列表的版本说明。",
  "Edit global app shortcuts stored in {path}.":
    "编辑存在 {path} 里的全局应用快捷键。",

  // ── Registry rows ─────────────────────────────────────────────────
  "Application Update": "应用更新",
  "Current version and update status.": "当前版本与更新状态。",
  "Theme": "主题",
  "Light, dark, or match the system appearance.": "浅色、深色，或跟随系统外观。",
  "Language": "界面语言",
  "The language kanna's interface is written in. Messages from agents and your repositories stay as they are.":
    "Kanna 界面所用的语言。Agent 的消息和仓库内容保持原样。",
  "Project Icons in Chats": "会话里的项目图标",
  "Lead each chat in the sidebar's Chats view with its project's icon, in place of the agent's.":
    "侧栏「会话」视图中，每个会话前面的图标改用其所属项目的图标，而不是 Agent 的图标。",
  "Chat Tabs": "会话标签页",
  "Keep the chats you open as tabs in the title bar, to switch between, rearrange and close.":
    "把打开的会话保留为标题栏上的标签页，方便切换、调整顺序和关闭。",
  "Peek at Widgets": "预览小组件栏",
  "Show the closed widget column over the chat while the mouse is at the window's right edge.":
    "鼠标停在窗口右边缘时，把收起的小组件栏浮在会话上方预览。",
  "Chat Sounds": "会话提示音",
  "Play a sound when a chat starts waiting on you or the unread count goes up.":
    "会话开始等待你回复或未读数增加时播放提示音。",
  "Sound Effect": "音效",
  "The sound chat notifications play. Picking one plays a preview.":
    "会话通知播放的音效。选中即试听。",
  "System Notifications": "系统通知",
  "Show a system notification when a chat starts waiting on you or turns unread.":
    "会话开始等待你回复或变为未读时，弹出系统通知。",
  "Enter While Running": "运行时的回车行为",
  "What Enter does while an agent is working. ⌘Enter always does the other one.":
    "Agent 工作时按回车会做什么。⌘Enter 始终执行另一种。",
  "Widgets Visibility": "小组件栏的显隐范围",
  "Show and hide the widget column for each chat on its own, or once for every chat in the project.":
    "小组件栏的显示与隐藏可以按会话单独记住，也可以对整个项目统一设置。",
  "Terminal Visibility": "终端栏的显隐范围",
  "Show and hide the terminal for each chat on its own, or once for every chat in the project. The terminals themselves belong to the project either way.":
    "终端栏的显示与隐藏可以按会话单独记住，也可以对整个项目统一设置。无论哪种，终端本身都归属于项目。",
  "Default Editor": "默认编辑器",
  "Opens transcript links and files from the git diff menu.":
    "用于打开对话记录里的链接，以及 git 差异菜单中的文件。",
  "New Projects Directory": "新项目目录",
  "Where cloned and newly created projects go.": "克隆和新建的项目存放的位置。",
  "Terminal Scrollback": "终端回滚行数",
  "Lines of history each embedded terminal keeps.": "每个内嵌终端保留的历史行数。",
  "Terminal Min Column Width": "终端最小列宽",
  "Minimum width of each terminal pane.": "每个终端面板的最小宽度。",
  "Transcript Window": "对话记录窗口",
  "Assistant messages a chat opens with, and how many each \"load earlier\" adds.":
    "会话打开时加载的助手消息条数，以及每次「加载更早」再增加多少条。",
  "Anonymous Analytics": "匿名分析",
  "Help improve Kanna with anonymous product analytics.":
    "通过匿名的产品分析帮助改进 Kanna。",

  // ── Providers rows ────────────────────────────────────────────────
  "Default Provider": "默认提供方",
  "The harness new chats start with. A chat keeps its provider once a session exists.":
    "新建会话默认使用的接入方式。会话一旦建立，就会一直沿用该提供方。",
  "Claude Code Defaults": "Claude Code 默认值",
  "Defaults for new Claude Code chats.": "新建 Claude Code 会话的默认设置。",
  "Codex Defaults": "Codex 默认值",
  "Defaults for new Codex chats.": "新建 Codex 会话的默认设置。",
  "Cursor Defaults": "Cursor 默认值",
  "Defaults for new Cursor chats.": "新建 Cursor 会话的默认设置。",
  "Grok Build Defaults": "Grok Build 默认值",
  "Defaults for new Grok Build chats.": "新建 Grok Build 会话的默认设置。",
  "Pi Defaults": "Pi 默认值",
  "Defaults for new Pi chats. Pi connects through the Model Registry.":
    "新建 Pi 会话的默认设置。Pi 通过模型注册表连接。",
  "Model Registry": "模型注册表",
  "Model Registry endpoint and API key used by Pi and quick responses.":
    "Pi 和快速响应所用的模型注册表地址与 API Key。",
  "Default Models": "默认模型",
  "Models shown in Pi's model picker, with a display label and the model id sent to the Model Registry endpoint.":
    "Pi 模型选择器里列出的模型，以及在调用模型注册表时发送的模型 id 和显示名称。",

  // ── This Mac rows ─────────────────────────────────────────────────
  "Open at Login": "登录时启动",
  "Start Kanna when you log in, so your agents and this Mac's Kanna Cloud address come back after a restart.":
    "登录时启动 Kanna，重启后 Agent 和这台 Mac 的 Kanna Cloud 地址都会自动恢复。",
  "Keep This Mac Awake": "保持 Mac 不睡眠",
  "Stay awake while plugged in, so agents keep running and this Mac stays reachable. The display still sleeps and locks.":
    "接通电源时保持唤醒，让 Agent 持续运行、这台 Mac 也始终可访问。屏幕仍会休眠并锁定。",
  "Also on Battery": "使用电池时同样保持",
  "Stay awake on battery too, not just when plugged in.":
    "使用电池时也保持唤醒，而不只是接通电源时。",
  "When You Quit": "退出应用时",
  "Kanna can keep running after the app quits, so this Mac stays online and running chats keep going.":
    "应用退出后 Kanna 可以继续运行，让这台 Mac 保持在线、正在进行的会话不中断。",
  "Lets agents work on projects anywhere in your home folder without macOS asking about each protected folder.":
    "允许 Agent 处理主目录下任意位置的项目，而不用为每个受保护的文件夹单独授权。",

  // ── Labs rows ─────────────────────────────────────────────────────
  "New Sidebar": "新版侧栏",
  "Replace the sidebar with a tabbed Chats / Projects view — In Progress, Review, and Recents up top, full projects one tap away.":
    "用带标签页的「会话/项目」视图取代侧栏：顶部是进行中、待审核和最近，完整项目一键可达。",
  "Terminal GPU Rendering": "终端 GPU 渲染",
  "Draw the embedded terminal with xterm's WebGL renderer instead of the DOM one. Faster with heavy output; falls back to the DOM renderer if the GPU context is unavailable or lost. Reopens open terminals.":
    "改用 xterm 的 WebGL 渲染器绘制内嵌终端，而不是 DOM 渲染器。输出量大时更快；GPU 上下文不可用或丢失时会回退到 DOM 渲染器。会重新打开已开启的终端。",
  "Nightly Builds": "每夜构建",
  "Run the newest changes from main — downloaded from GitHub and built from source on this machine.":
    "运行 main 分支上的最新改动——从 GitHub 下载并在本机从源码构建。",

  // ── Control values (GeneralSection / MacSection) ──────────────────
  "Light": "浅色",
  "Dark": "深色",
  "System": "跟随系统",
  "Never": "从不",
  "When Unfocused": "窗口未聚焦时",
  "Always": "始终",
  "Per Chat": "按会话",
  "Per Project": "按项目",
  "Custom": "自定义",
  "Queue message": "排队发送",
  "Steer now": "立即打断",
  "Ask": "每次询问",
  "Keep Running": "保持运行",
  "Stop Kanna": "停止 Kanna",

  // ── General section text ──────────────────────────────────────────
  "Kanna {version}. {status}.": "Kanna {version}。{status}。",
  "Checking for updates…": "正在检查更新…",
  "Installing update…": "正在安装更新…",
  "Restarting Kanna…": "正在重启 Kanna…",
  "Update available: {version}": "有可用更新：{version}",
  "Update available": "有可用更新",
  "No newer stable release": "没有更新的稳定版",
  "Up to date": "已是最新版本",
  "Update check failed": "检查更新失败",
  "Not checked yet": "尚未检查",
  "Last checked {date}.": "上次检查：{date}。",
  "latest": "最新版",
  "Check for updates": "检查更新",
  "Updating…": "正在更新…",
  "Notifications": "通知",
  "Layout": "布局",
  "Editor & Projects": "编辑器与项目",
  "Privacy": "隐私",
  "{min}–{max} messages": "{min}–{max} 条消息",
  "{min}–{max} lines": "{min}–{max} 行",
  "{min}–{max} px": "{min}–{max} 像素",
  " (default)": "（默认）",
  "Created on first use": "首次使用时创建",
  "Not installed": "未安装",
  "Command Template": "命令模板",
  "Include {path} and optionally {line} and {column} in your command.":
    "在命令中包含 {path}，还可以选择包含 {line} 和 {column}。",
  "Preview: ": "预览：",
  "Help improve Kanna with anonymous product analytics. Kanna sends tracked event names plus a small set of event properties like current version, environment, update version info, and launch flags. No message content, prompts, file paths, or provider credentials are sent.":
    "通过匿名的产品分析帮助改进 Kanna。Kanna 会上报被跟踪的事件名称，以及少量事件属性，例如当前版本、运行环境、更新版本信息和启动参数。不会发送消息内容、提示词、文件路径或提供方凭据。",
  "Stored in {path}.": "保存在 {path}。",
  "View tracked events": "查看跟踪的事件",
  "Tracked Events": "跟踪的事件",
  "Kanna sends these event names plus the limited property keys below, depending on the event type.":
    "根据事件类型，Kanna 会上报下列事件名称，以及下面这些有限的属性键。",
  "Event Names": "事件名称",
  "Property Keys": "属性键",

  "Appearance": "外观",

  // ── Labs ──────────────────────────────────────────────────────────
  "Update in progress…": "正在更新…",
  "Latest nightly installed": "已是最新每夜构建",
  "New nightly available": "有新的每夜构建",
  "Checking latest nightly…": "正在检查最新的每夜构建…",
  "Could not check latest nightly": "无法检查最新的每夜构建",
  "Latest nightly not checked yet": "尚未检查最新的每夜构建",
  "Nightly Build {version}": "每夜构建 {version}",
  "Latest:": "最新：",
  "as of {time}": "截至 {time}",
  "Last checked": "上次检查",
  "Check again": "重新检查",
  "Back to stable": "回到稳定版",
  "Build latest": "构建最新版",

  "Unpublished": "未发布",
  "Unknown date": "日期未知",
  "Connecting…": "正在连接…",

  // ── Changelog ─────────────────────────────────────────────────────
  "Loading release notes…": "正在加载版本说明…",
  "Could not load changelog": "无法加载更新日志",
  "Unable to load changelog.": "加载更新日志失败。",
  "Retry": "重试",
  "GitHub did not return any published releases for this repository.":
    "GitHub 没有返回这个仓库的任何已发布版本。",
  "Current": "当前版本",
  "Prerelease": "预发布",
  "View release on GitHub": "在 GitHub 上查看该版本",
  "No release notes were provided.": "这个版本没有提供说明。",

  // ── Keybindings ───────────────────────────────────────────────────
  "Unable to save keybindings.": "保存快捷键失败。",
  "Comma-separated shortcuts.": "多个快捷键之间用逗号分隔。",
  "Reset to {shortcut}": "重置为 {shortcut}",
  "Toggle Embedded Terminal": "开关内嵌终端",
  "Toggle Widgets": "开关小组件栏",
  "Open In Finder": "在访达中打开",
  "Open In Editor": "在编辑器中打开",
  "Add Split Terminal": "新建分屏终端",
  "Jump To Sidebar Chat": "跳转到侧栏会话",
  "New Chat In Current Project": "在当前项目新建会话",
  "Open Add Project": "打开「添加项目」",
  "Open Command Palette": "打开命令面板",
  "Toggle Focus Mode": "开关专注模式",

  // ── This Mac ──────────────────────────────────────────────────────
  "Staying Online": "保持在线",
  "macOS wants this approved: turn Kanna on under Login Items to finish.":
    "需要 macOS 批准：请在「登录项」里打开 Kanna 以完成设置。",
  "Open Login Items": "打开登录项",
  "Closing the lid sleeps this Mac. Keep it open, or connect a display to run it closed.":
    "合上上盖会让这台 Mac 睡眠。请保持打开，或外接显示器后合盖使用。",
  "On battery now: this Mac sleeps when idle until it's plugged in.":
    "当前在使用电池：接通电源前，这台 Mac 空闲时会睡眠。",
  "Permissions": "权限",
  "Granted": "已授权",
  "Open Privacy Settings": "打开隐私设置",

  // ── Providers ─────────────────────────────────────────────────────
  "Unable to save provider settings.": "保存提供方设置失败。",
  "Unable to save Model Registry settings.": "保存模型注册表设置失败。",
  "Credentials valid & saved": "凭据有效并已保存",
  "Credentials invalid.": "凭据无效。",
  "See error": "查看错误",
  "Accounts": "账号",
  "Checking provider sign-in status…": "正在检查提供方的登录状态…",
  "Defaults": "默认值",
  "Last Used": "最近使用",
  "Base URL": "基础地址",
  "Required": "必填",
  "Quick Response Model": "快速响应用模型",
  "Model id": "模型 id",
  "Edit models": "编辑模型",
  "Validation Error": "校验错误",

  // ── Skills ────────────────────────────────────────────────────────
  "0 installs": "0 次安装",
  "{count} install": "{count} 次安装",
  "{count} installs": "{count} 次安装",
  "{count}M installs": "{count}M 次安装",
  "{count}K installs": "{count}K 次安装",
  "{skill} is available in {provider}": "{skill} 可在 {provider} 中使用",
  "Open actions for {skill}": "打开 {skill} 的操作菜单",
  "Added via npx skills": "通过 npx skills 添加",
  "Added by you": "由你添加",
  "View on skills.sh": "在 skills.sh 上查看",
  "Uninstall": "卸载",
  "View {skill} on skills.sh": "在 skills.sh 上查看 {skill}",
  "Installed": "已安装",
  "Installing": "安装中",
  "Get": "获取",
  "Unable to read installed skills.": "读取已安装技能失败。",
  "Backend connection required.": "需要连接后端。",
  "Unable to search skills.": "搜索技能失败。",
  "Install failed.": "安装失败。",
  "Installed globally": "已全局安装",
  "Unable to open in Finder.": "无法在访达中打开。",
  "Uninstall failed.": "卸载失败。",
  "Filter installed skills or search skills.sh": "筛选已安装技能，或在 skills.sh 中搜索",
  "Filter {count} installed, or add from skills.sh": "筛选 {count} 个已安装技能，或从 skills.sh 添加",
  "Add skills from skills.sh": "从 skills.sh 添加技能",
  "Clear skills search": "清空技能搜索",
  "From skills.sh": "来自 skills.sh",
  "No global skills installed yet. Search above to add one.":
    "还没有安装全局技能。在上方搜索即可添加。",
  "No installed skills match “{query}”.": "没有匹配「{query}」的已安装技能。",
  "No skills found on skills.sh.": "skills.sh 上没有找到相关技能。",

  // ── Usage ─────────────────────────────────────────────────────────
  "Refresh": "刷新",
  "No usage recorded yet.": "还没有用量记录。",
  "Usage limits are not available.": "暂无用量限额信息。",
  "Loading usage…": "正在加载用量…",
  "{used} of {limit} used": "已用 {used} / {limit}",
  "{used} used": "已用 {used}",
  "{percent} used": "已用 {percent}",
  "{count} credits remaining": "剩余 {count} 额度",
  "Personal": "个人",
  "Enterprise": "企业",

  // ── Errors (client-side fallbacks; server messages stay English) ──
  "Unable to save transcript settings.": "保存对话记录设置失败。",
  "Unable to save terminal settings.": "保存终端设置失败。",
  "Unable to save editor settings.": "保存编辑器设置失败。",
  "Unable to save the new projects directory.": "保存新项目目录失败。",
  "Unable to save the language.": "保存界面语言失败。",
  "Unable to save theme settings.": "保存主题设置失败。",
  "Unable to save chat sound settings.": "保存提示音设置失败。",
  "Browser notifications are blocked or unsupported in this browser.":
    "此浏览器已阻止系统通知，或该浏览器不支持系统通知。",
  "Unable to save chat notification settings.": "保存通知设置失败。",
  "Unable to save layout settings.": "保存布局设置失败。",
  "Unable to save appearance settings.": "保存外观设置失败。",
  "Unable to save analytics settings.": "保存分析设置失败。",
  "Unable to save composer settings.": "保存输入框设置失败。",
  "Unable to save Labs settings.": "保存实验功能设置失败。",
  // Usage: reset distance and compact form (UsageSection).
  "in {value} {unit}": "{value}{unit}",
  "minutes": "分钟",
  "hours": "小时",
  "days": "天",
  "any moment": "即将",
  // Server-sent usage details (src/server/usage-limits.ts). The server keeps
  // writing English; these keys are its sentences, translated at render time.
  "Could not read Claude usage.": "无法读取 Claude 用量。",
  "Could not read Codex usage.": "无法读取 Codex 用量。",
  "Could not read Grok usage. Sign in with grok login.": "无法读取 Grok 用量。请先运行 grok login 登录。",
  "No Grok usage windows reported.": "Grok 没有报告用量窗口。",
  "No plan limit windows reported.": "没有报告套餐限额窗口。",
  "No rate-limit windows reported.": "没有报告速率限制窗口。",
  "No rate-limit windows reported (sign in to Codex with a ChatGPT plan).": "没有报告速率限制窗口（请用 ChatGPT 套餐登录 Codex）。",
  "Pi runs through the Model Registry (pay-per-token). No subscription limits to show.": "Pi 通过 Model Registry 按 token 计费，没有订阅限额可显示。",
  "Plan limits are not available for this session (API key or non-subscription auth).": "本次会话无法获取套餐限额（使用的是 API key 或非订阅方式登录）。",
  "Usage limits for Cursor are not available yet.": "暂不支持查看 Cursor 的用量限额。",
  "Unlimited": "无限制",
}
