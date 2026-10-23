# 设计 Skill 选择与安装记录

核实日期：2026-10-23。选择 **UI UX Pro Max** 作为本项目的设计规则库，重点约束内容宽度、间距、文字层级、组件状态和响应式一致性。用户提供的 App 界面、品牌色和已确认原型始终优先于技能建议。

## 选择依据

| 候选 | GitHub Stars | skills.sh 单技能安装记录 | 对本项目的判断 |
| --- | ---: | ---: | --- |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 139,181 | [410.4K](https://www.skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max) | 选用。具有明确优先级、可查询规则库和可保存的设计系统，适合将边距、排版及品牌一致性落实成代码约束。 |
| [Anthropic frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | 183,141，整个 skills 合集 | [1.0M](https://www.skills.sh/anthropics/skills/frontend-design) | 本次候选中单技能安装记录最高；侧重设计方向和自我审查，量化布局规则较少。 |
| [Taste Skill](https://github.com/Leonxlnx/taste-skill) | 101,331 | [662.8K](https://www.skills.sh/leonxlnx/taste-skill/design-taste-frontend) | 有浏览器检查和三视口复查；本轮已有明确 App 视觉，不采用其生成新艺术方向的流程。 |
| [Impeccable](https://github.com/pbakaus/impeccable) | 85,174 | [354.4K](https://www.skills.sh/pbakaus/impeccable/impeccable) | 排版、布局、审查流程完整；当前版本带独立启动器，本轮不额外叠加第二套执行流程。 |

Stars 来自 GitHub 仓库 API 的当日读取；安装记录来自表内 skills.sh 页面，均为当时快照。Stars 表示关注数量，安装记录不等于独立用户或活跃用户。Anthropic 数值属于多技能合集，不能视为 frontend-design 单技能的 Stars。**没有据此宣称任何候选“全网使用最多”。** UI UX Pro Max 是本次三个独立设计工具仓库中 Stars 最高、且最适合本轮具体问题的选择。

## 安装版本与完整性

- 来源：[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)。
- 固定版本：[28327f2f214d31bbd7555ed0c012a5df6484ed96](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commit/28327f2f214d31bbd7555ed0c012a5df6484ed96)。该提交日期为 2026-10-23，属于文档更新；技能规则文件最近一次实质更新为 2026-08-13，不能将仓库最新提交日期等同于所有规则的更新日期。
- 上游完整技能目录：`.claude/skills/ui-ux-pro-max/`。
- 本机全局安装位置：`/Users/yang.guo04/.codex/skills/ui-ux-pro-max/`。
- 旧安装备份：`/Users/yang.guo04/Documents/Codex/2026-10-23/wo-xi/work/app-aligned/ui-ux-pro-max-before/`。
- 原安装的 `data`、`scripts` 为指向缺失上游目录的相对符号链接。此次安装补齐实际目录，保留 `SKILL.md`、`data/`、`references/`、`scripts/`；安装后检查未发现失效符号链接，`scripts/search.py` 存在。
- 技能安装在开发环境中，不作为官网运行依赖；官网仍使用现有静态 HTML/CSS/JS。

## 本项目采用的规则

依据上游 [SKILL.md](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/28327f2f214d31bbd7555ed0c012a5df6484ed96/.claude/skills/ui-ux-pro-max/SKILL.md) 和 [完整规则索引](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/28327f2f214d31bbd7555ed0c012a5df6484ed96/.claude/skills/ui-ux-pro-max/references/quick-reference.md)：

- 全站共享内容最大宽度、断点和 4/8 增量间距，避免各区块自行设定边距。
- 使用统一的文字层级、语义颜色变量、图标家族及组件状态。
- 正文以 16px 为基础，行高保证阅读；正常文字对比度目标不低于 4.5:1。
- 主要交互区域至少 44×44px，并提供可见键盘焦点和操作反馈。
- 手机不出现横向溢出；泰文采用自然断行，不对普通正文应用 `word-break: break-all`。
- 保留真实业务内容和入口；布局建议不能改写贷款条件或原型文案。
- 在实际浏览器中检查桌面与手机效果、交互和内容完整性。

统一左对齐、具体容器宽度、实际字号和截图组合方式属于本项目根据用户要求制定的设计决策，不声称是技能唯一规定的答案。最终效果必须对照用户 App 截图检查，不能以“安装了技能”替代视觉验收。
