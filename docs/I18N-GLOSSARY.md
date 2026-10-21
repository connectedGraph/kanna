# 术语表（zh-CN）

翻译的**唯一**依据。subagent 改任何文案前先读这份，遇到表里没有的词，
按「与已有译文一致的风格」处理，并把它补进本表。

## 核心词

| 英文 | 中文 | 说明 |
|---|---|---|
| Chat | 会话 | 不用「聊天」：这里指一段带上下文的对话单元，不是闲谈 |
| New Chat | 新建会话 | |
| Chats | 会话 | 侧栏视图名 |
| Project | 项目 | |
| Projects | 项目 | |
| Workspace | 工作区 | |
| Agent | Agent | 不译。业界通用，译成「代理」会和 proxy 混淆 |
| Subagent | 子 Agent | |
| Provider | 提供方 | 指模型服务商（Claude / Codex / Cursor…） |
| Harness | 接入方式 | 指 kanna 驱动各 CLI 的适配层 |
| Model | 模型 | |
| Token | Token | 不译。译成「词元」反而不易懂 |
| Turn | 轮次 | 一次用户输入到 Agent 停下 |
| Transcript | 对话记录 | |
| Message | 消息 | |
| Prompt | 提示词 | |
| Session | 会话 | 与 Chat 同义时统一用「会话」，按上下文取 |
| Workspace / Repo | 仓库 | repo 一律「仓库」 |
| Diff | 差异 | |
| Commit | 提交 | |
| Branch | 分支 | |
| Merge | 合并 | |
| Pull request / PR | PR | 不译 |
| Skill / Skills | 技能 | |
| Workflow | 工作流 | |
| Widget | 小组件 | |
| Terminal | 终端 | |
| Archive / Archived | 归档 / 已归档 | |
| Fork | 分叉 | 指复制一段会话继续，不用「复刻」 |
| Share | 分享 | |
| Restore | 恢复 | |
| Rename | 重命名 | |
| Delete | 删除 | |
| Clone | 克隆 | |
| Settings | 设置 | |
| Appearance | 外观 | |
| Usage | 用量 | |
| Labs | 实验功能 | 设置里的 Labs 分区 |
| Keybindings | 快捷键 | |
| Changelog | 更新日志 | |
| Sign in / Sign out | 登录 / 退出登录 | |
| Approve | 批准 | 计划审批按钮 |
| Plan mode | 计划模式 | |
| Effort | 思考强度 | Claude 的 reasoning effort |
| Queue message | 排队发送 | Enter 行为选项 |
| Steer now | 立即打断 | Enter 行为选项 |
| Draft | 草稿 | |
| Thread | 会话线索 | 与 Chat 同义时不加字，直接「会话」 |
| Ticket | 工单 | |
| Channel | 频道 | |
| Quick action | 快捷操作 | |
| Attachment | 附件 | |
| Attention / Unread | 待处理 / 未读 | |

## 不翻译

- 品牌与产品名：Kanna、Claude、Claude Code、Codex、Cursor、Grok、Pi、GitHub、GitLab、OpenRouter、macOS、Finder
- 协议名与专有名词：API Key、MCP、SDK、CLI、URL、JSON、WebSocket、SSH、GPU、R2、OAuth
- 命令与代码：`bun run dev`、`gh auth login`、`brew install gh`、`bunx kanna pair <code>`
- 文件路径、模型 ID、环境变量名
- Agent 的输出内容（本来也不翻）

## 标点

- 全角标点：，。：；！？（）「」——…
- **省略号用 `…`（U+2026），不是 `...`** —— 英文原文多用 `…`，译文保持一致
- 中英混排时，中英文之间**不加空格**（与用户既有文档风格一致）
- 按钮文案不加句号；整句提示语加句号
- 句子中间的括号用全角（）；纯英文内容外的括号保持半角

## 大小写与语气

- 界面按钮／菜单项：短、动词开头，不加「请」
- 说明性副标题：完整句子，句末加句号
- 标题式文案（Settings 行标题）：名词或名词短语，不加句号
