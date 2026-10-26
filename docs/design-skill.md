# 网页设计与配色 Skill 使用记录

核实日期：2026-10-23。当前按用户指定的ATS PICO实测页面结构重排，证据见 [url-dna](../design/url-dna.md)。采用 **Anthropic 官方 frontend-design** 负责官网的视觉组织，采用 **Impeccable 4.7.0 的 colorize 配色规则**约束颜色角色、品牌一致性与可读性。用户提供的完整 App 截图、`#44E0F8` 品牌色、Noto Sans Thai 字体和已确认原型内容始终优先。

## 当前采用的技能

| 用途 | 来源与固定版本 | 完整安装目录 |
| --- | --- | --- |
| 网页视觉设计 | [Anthropic frontend-design](https://github.com/anthropics/skills/blob/dbd4588f9e1033efb41dad4bef2f7947c8993d44/skills/frontend-design/SKILL.md)，commit `dbd4588f9e1033efb41dad4bef2f7947c8993d44` | 上游 `skills/frontend-design/`；本机 `/Users/yang.guo04/.codex/skills/frontend-design/` |
| 配色、排版与视觉验收 | [Impeccable 4.7.0](https://github.com/pbakaus/impeccable/blob/5cb95eea9c96479f57afe0732a45470d30183326/.agents/skills/impeccable/SKILL.md)，commit `5cb95eea9c96479f57afe0732a45470d30183326` | 上游 `.agents/skills/impeccable/`；本机 `/Users/yang.guo04/.codex/skills/impeccable/` |

`colorize` 是 Impeccable 完整技能中的专项配色流程，具体规则见 [reference/colorize.md](https://github.com/pbakaus/impeccable/blob/5cb95eea9c96479f57afe0732a45470d30183326/.agents/skills/impeccable/reference/colorize.md)，不是另一个独立的 `colorize/SKILL.md`。此次安装保留完整参考文件和脚本目录。

原有同名安装分别备份至 `work/web-color-skills/frontend-design-before/` 和 `work/web-color-skills/impeccable-before/`。两个完整技能已经安装并可在后续会话发现；安装轮次已直接读取上游规则用于实现，当前仍沿用其规则。技能属于开发工具，官网运行仍使用现有静态 HTML/CSS/JS，无新增框架依赖。

安装轮次曾尝试运行 Impeccable 的 context 启动器，但下载 `engine 0.1.16` 时遇到网络失败。当时按照其 SKILL.md 明确提供的回退方式，直接读取现有项目上下文，并应用配色与 craft-floor 规则继续完成设计；该失败不阻塞网页修改，也不要求用户另行运行安装器。

## 网页设计规则如何落地

依据官方 frontend-design：

- 首屏使用含人物与环境的完整夜市场景 `market-life.jpg`，品牌、额度、操作及原说明归在同一通栏构图；不使用透明人物抠图。完整App首页、选期及还款原图集中在申请面板，保持自然比例。
- 使用明确的颜色、字体和布局变量；共用1120px内容轴、手机24px外边距。主模块标题居中、面板正文左对齐；2026-10-26手机Hero为紧凑双列信息与完整照片上下关系，公司说明左对齐。
- 全站使用 Noto Sans Thai；以字号、字重和留白建立层级，不额外引入第二种展示字体。
- 优势图标使用同一Phosphor Duotone家族的手机、银行、二维码、警示盾牌，以不同语义图形区分内容；系统控件用Lucide，不以散落箭头充当装饰。
- 按实测ATS结构组织浅青分区、居中标题与大白面板：三项优势加原安全提醒构成2×2面板，四步和三张完整App图构成申请面板。手机画廊可横滑或点三枚44px控件；2026-10-26起Hero信息与完整照片分区，所有照片渐变、蒙版与裁切均取消，旧融合方向只属历史。
- 以实际浏览器截图检查桌面与手机效果，不能以技能安装或代码检查代替视觉验收。

以上是本项目结合用户要求采用的设计决策，不声称是技能唯一允许的布局。

## 配色规则如何落地

依据 Impeccable colorize 与 [craft-floor](https://github.com/pbakaus/impeccable/blob/5cb95eea9c96479f57afe0732a45470d30183326/.agents/skills/impeccable/reference/craft-floor.md)：

- 先读取品牌、App 素材和现有颜色变量，保留已确定的品牌与状态语义。
- 按页面背景、内容表面、主次文字、按钮、焦点、边线和状态分配颜色角色，而不是额外拼接无关色板。
- `#44E0F8` 承担三入口、下载区、步骤和图标填充；App的 `#113F4A` 承担标题、主按钮及深色前景；`#E8FAFD` 承载连续分区，白色大面板收拢内容。
- 最强颜色服务于明确区域或功能，不将小面积青色装饰散布至全部组件。
- 彩色背景上的辅助文字根据前景与背景计算，不直接套用浅灰文字。
- 普通正文对比度至少 4.5:1；大字、控件、功能图标与焦点提示至少 3:1；信息不只依靠颜色表达。

实测 sRGB 对比度：

| 前景 / 背景 | 对比度 | 设计含义 |
| --- | ---: | --- |
| `#44E0F8` / `#FFFFFF` | 1.58:1 | 不能作为白底上的小字或唯一功能图标颜色 |
| `#113F4A` / `#FFFFFF` | 11.45:1 | 可用于白底文字和按钮配色 |
| `#113F4A` / `#44E0F8` | 7.23:1 | 可用于品牌色区域的正文与图标 |
| `#59646A` / `#F4F7F7` | 5.64:1 | 可用于浅灰背景上的辅助正文 |
| `#59646A` / `#E8FAFD` | 5.65:1 | 可用于浅青背景上的辅助正文 |

当前完整token色值及实算配对见 [brand-colors](../design/brand-colors.md)。具体颜色仍需结合实际组件的透明度、悬停态、焦点态与背景检查。对比度合格只证明可读性，整体是否与 App 协调仍以真实页面截图判断。

## 历史背景：上一轮 UI UX Pro Max

上一轮选择并完整安装了 [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)，固定版本为 [28327f2f214d31bbd7555ed0c012a5df6484ed96](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commit/28327f2f214d31bbd7555ed0c012a5df6484ed96)，上游目录为 `.claude/skills/ui-ux-pro-max/`。本机目录为 `/Users/yang.guo04/.codex/skills/ui-ux-pro-max/`，旧版备份位于 `work/app-aligned/ui-ux-pro-max-before/`。

该次安装修复了原有 `data`、`scripts` 指向缺失目录的相对符号链接，补齐实际数据、参考文件和搜索脚本。其间距、响应式、可访问性与组件状态规则保留作为通用检查背景；本轮的网页视觉与配色主规则改为上文两项。

上一轮调研快照记录为：UI UX Pro Max 139,181 Stars、skills.sh 410.4K 安装记录；Anthropic skills 合集 183,141 Stars、frontend-design 1.0M 安装记录；Taste Skill 101,331 Stars、662.8K 安装记录；Impeccable 85,174 Stars、354.4K 安装记录。这些数字是当时的历史快照，不代表当前排名，也不作为本轮选择的主要理由。

Stars 属于仓库，安装记录不等于独立用户或活跃用户；尤其不能把 Anthropic 整个 skills 合集的 Stars 归为 frontend-design 单技能的使用人数。本项目不据此宣称任何技能“全网使用最多”。
