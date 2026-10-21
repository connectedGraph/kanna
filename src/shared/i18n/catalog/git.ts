import type { Messages } from "../index"

/** The git UI beside a chat: branch pickers, diffs, commits, publish and merge dialogs. */
export const git: Messages = {
  // Branch hover card
  "Even with {branch}": "与 {branch} 一致",
  "{ahead} ahead, {behind} behind {branch}": "领先 {ahead} 个提交，落后 {behind} 个提交（对比 {branch}）",
  "Upstream deleted": "上游已删除",
  "Checked out locally": "已在本地检出",
  "Not pushed": "尚未推送",
  "Open this pull request on GitHub": "在 GitHub 上打开此 PR",
  "Opened {time}": "创建于 {time}",
  "opened {age}": "创建于 {age}",
  "{count} files changed": "{count} 个文件变更",
  "{count} commits": "{count} 个提交",
  "{count} comments": "{count} 条评论",

  // Branch list and picker
  "Loading branches": "正在加载分支",
  "Find or create a branch…": "查找或创建分支…",
  "Branches": "分支",
  "No matching branches.": "没有匹配的分支。",
  "No other branches.": "没有其他分支。",
  "Pull requests": "PR",
  "Could not load pull requests.": "无法加载 PR。",
  "Local": "本地",
  "Remote": "远程",
  "Create branch": "创建分支",
  "Create": "创建",
  "from {branch}": "基于 {branch}",

  // Check runs
  "skipped": "已跳过",
  "running": "运行中",
  "pending": "等待中",
  "{count} failed": "{count} 个失败",
  "{count} running": "{count} 个运行中",
  "{count} skipped": "{count} 个跳过",
  "passed": "通过",
  "Since the first job started": "从第一个任务开始计时",
  "First job's start to last job's end": "从第一个任务开始到最后一个任务结束",
  "{count} more check": "还有 {count} 个检查",
  "{count} more checks": "还有 {count} 个检查",

  // Commit history row and hover card
  "Not pushed yet": "尚未推送",
  "Open commit {sha} on GitHub": "在 GitHub 上打开提交 {sha}",
  "Copy {sha}": "复制 {sha}",
  "committed by {name}": "提交者：{name}",
  "Open this commit on GitHub": "在 GitHub 上打开此提交",
  "{count} file changed": "{count} 个文件变更",

  // File diff status
  "Untracked": "未跟踪",
  "Added": "新增",
  "Deleted": "删除",
  "Renamed": "重命名",
  "Modified": "修改",

  // Diff file hover card
  "{count} more changed line": "还有 {count} 行变更",
  "{count} more changed lines": "还有 {count} 行变更",
  "No text changes to show": "没有可显示的文本变更",
  "Click to review": "点击查看",

  // Diff file row
  "Actions for {path}": "{path} 的操作",
  "Review": "查看",
  "Discard Changes": "丢弃更改",
  "Ignore File": "忽略文件",
  "Ignore folder...": "忽略文件夹…",
  "Copy File Path": "复制文件路径",
  "Copy Relative Path": "复制相对路径",

  // Diff patch view
  "Loading diff": "正在加载差异",
  "No textual changes.": "没有文本变更。",

  // Diff viewer
  "Review changes": "查看变更",
  "Changes": "变更",
  "{count} file": "{count} 个文件",
  "{count} files": "{count} 个文件",
  "Unified diff": "统一差异视图",
  "Side-by-side diff": "并排差异视图",
  "Disable word wrap": "关闭自动换行",
  "Enable word wrap": "开启自动换行",
  "Load {count} more": "再加载 {count} 个",
  "{count} left": "剩余 {count} 个",
  "Expand {path}": "展开 {path}",
  "Collapse {path}": "折叠 {path}",
  "Diff": "差异",
  "Preview": "预览",
  "Hide full file": "隐藏完整文件",
  "Show full file": "显示完整文件",
  "Load diff": "加载差异",

  // Publish to GitHub
  "Push to GitHub": "推送到 GitHub",
  "Create a GitHub repository from this local project using GitHub CLI.": "用 GitHub CLI 从这个本地项目创建 GitHub 仓库。",
  "Checking GitHub CLI…": "正在检查 GitHub CLI…",
  "GitHub CLI is not installed.": "未安装 GitHub CLI。",
  "Then run:": "然后运行：",
  "GitHub CLI is installed but not signed in.": "已安装 GitHub CLI，但尚未登录。",
  "Select owner": "选择所有者",
  "Optional description": "可选描述",
  "Select visibility": "选择可见性",
  "Private": "私有",
  "Public": "公开",
  "Publishing…": "正在发布…",

  // Merge branch dialog
  "Merge into {branch}": "合并到 {branch}",
  "current branch": "当前分支",
  "Choose a branch to continue.": "选择一个分支以继续。",
  "Search branches": "搜索分支",
  "Default Branch": "默认分支",
  "No default branch available.": "没有可用的默认分支。",
  "Recent Branches": "最近分支",
  "No recent branches.": "没有最近的分支。",
  "Other Branches": "其他分支",
  "No other branches match this search.": "没有匹配此搜索的其他分支。",
  "Select a branch to preview the merge.": "选择分支以预览合并结果。",
  "Checking merge preview": "正在检查合并预览",
  "Preview unavailable.": "无法预览。",
  "Merging…": "正在合并…",
  "Merge": "合并",
  "{selected} of {total} file changed": "{total} 个文件中有 {selected} 个改动",
}
