import type { Messages } from "../index"

/** App chrome: the sidebar, chat tabs, the chat navbar, menus and panels. */
export const navigation: Messages = {
  // Sidebar header: version pills and status
  "Dev": "开发版",
  "Development build": "开发版本",
  "Nightly": "每夜版",
  "New nightly available. Open Labs to build latest main.": "有新的每夜版可用。打开实验功能以构建最新 main。",
  "Update": "更新",
  "Update Kanna": "更新 Kanna",
  "Update to {version}": "更新到 {version}",
  "Connecting": "连接中",
  "Connected": "已连接",
  "Disconnected": "已断开",

  // Sidebar chrome: header, footer, resize handle
  "Back": "返回",
  "Forward": "前进",
  "Search": "搜索",
  "Settings": "设置",
  "Projects": "项目",
  "New project": "新建项目",
  "Add project": "添加项目",
  "Expand sidebar": "展开侧栏",
  "Collapse sidebar": "收起侧栏",
  "Keep sidebar open": "保持侧栏展开",
  "Resize sidebar": "调整侧栏宽度",
  "New Chat": "新建会话",
  "Terminal": "终端",
  "No conversations yet": "还没有会话",
  "Back from {project}": "返回 {project}",
  "This machine": "本机",

  // Sidebar views
  "Chats": "会话",
  "Channels": "频道",
  "Archived": "已归档",
  "Relevant": "相关",

  // Machine switcher / Kanna Cloud
  "Setup Kanna Cloud": "设置 Kanna Cloud",
  "Use this machine from anywhere": "随时随地使用这台机器",
  "Get a personal URL that works from any browser, 100% free.": "获取一个在任意浏览器都能打开的个人网址，完全免费。",
  "Switching to {machine}": "正在切换到 {machine}",
  "Manage Fleet": "管理设备",

  // Chat navbar
  "More actions": "更多操作",
  "Toggle Terminal": "切换终端",
  "Share Chat": "分享会话",
  "Share chat": "分享会话",
  "Setup Git": "初始化 Git",
  "Detached HEAD": "游离 HEAD",
  "Hide widgets": "隐藏小组件",
  "Show widgets": "显示小组件",

  // Chat title / tabs
  "Rename": "重命名",
  "Chat title": "会话标题",
  "Chat actions": "会话操作",
  "Show in Finder": "在访达中显示",
  "Open on {host}": "在 {host} 上打开",
  "Close tab": "关闭标签页",
  "Close {title}": "关闭 {title}",
  "Close": "关闭",
  "Close Others": "关闭其他标签页",
  "Close to the Right": "关闭右侧标签页",
  "Open chats": "打开的会话",
  "Open in Tab": "在标签页中打开",
  "Open Chat": "打开会话",
  "Open in Preview": "在预览中打开",

  // Context window meter
  "Context window {percentage} used": "上下文窗口已用 {percentage}",
  "Context window {tokens} tokens used": "上下文窗口已用 {tokens} token",
  "{tokens} context used": "{tokens} 上下文已用",
  "{tokens} tokens used so far": "目前已用 {tokens} token",

  // Delegation
  "Delegate": "委派",
  "Don't Delegate": "不委派",
  "New Delegator…": "新建委派者…",
  "Start a new chat in {project}": "在 {project} 中新建会话",
  "A chat that hands work to the chats under it": "把工作分派给下属会话的会话",
  "Stop Delegating": "停止委派",
  "Make Delegator": "设为委派者",
  "Takes effect on this chat's next turn": "将在本会话的下一轮次生效",
  "No chats yet": "还没有会话",
  "{count} chat": "{count} 个会话",
  "{count} chats": "{count} 个会话",
  "{chats} chat, {wanting} wants you": "{chats} 个会话，{wanting} 个在等你",
  "{chats} chat, {wanting} want you": "{chats} 个会话，{wanting} 个在等你",
  "{chats} chats, {wanting} wants you": "{chats} 个会话，{wanting} 个在等你",
  "{chats} chats, {wanting} want you": "{chats} 个会话，{wanting} 个在等你",

  // Hold to stop
  "Hold Escape to stop": "按住 Esc 停止",
  "Hold": "按住",
  "to stop": "停止",

  // Terminal panes
  "Terminal error: {error}": "终端错误：{error}",
  "Clear terminal": "清空终端",
  "Add terminal to the right": "在右侧添加终端",
  "Close terminal": "关闭终端",
  "Hide terminal": "隐藏终端",

  // Share dialog
  "Shared Link": "分享链接",
  "Shared links are snapshots in time and contain all attachments, tool calls and history. Be mindful of sensitive info.": "分享链接是某一时刻的快照，包含全部附件、工具调用和历史记录。请注意其中的敏感信息。",
  "Copy link": "复制链接",
  "Copied": "已复制",
  "Open": "打开",

  // Archived views
  "Archived Chats": "已归档会话",
  "No archived chats": "没有已归档的会话",
  "Restore chat": "恢复会话",
  "Restore {title}": "恢复 {title}",
  "Restore": "恢复",

  // Sidebar chat hover card
  "Jump to this prompt": "跳到这条提示词",
  "Jump to this reply": "跳到这条回复",
  "Open this chat": "打开此会话",
  "Open {path}": "打开 {path}",
  "{count} more file": "还有 {count} 个文件",
  "{count} more files": "还有 {count} 个文件",

  // Sidebar menus
  "Show Archived": "显示已归档",
  "Hide": "隐藏",
  "More": "更多",
  "Show less": "收起",
  "Show more": "显示更多",
  "Pin": "置顶",
  "Unpin": "取消置顶",
  "Copy Path": "复制路径",
  "Clear Draft": "清除草稿",
  "Share": "分享",
  "Fork": "分叉",
  "Fork chat": "分叉会话",
  "Archive chat": "归档会话",
  "Archive Chat": "归档会话",
  "Archive All": "全部归档",
  "Delete Chat": "删除会话",
  "Open in Finder": "在访达中显示",
  "Open in {editor}": "在 {editor} 中打开",
  "Start {app} to connect": "启动 {app} 以连接",
}
