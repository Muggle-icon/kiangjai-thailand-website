# 网页设计与配色 Skill 使用记录

核实日期：2026-10-23。本轮采用 **Anthropic 官方 frontend-design** 负责官网的视觉组织，采用 **Impeccable 4.7.0 的 colorize 配色规则**约束颜色角色、品牌一致性与可读性。用户提供的完整 App 截图、`#44E0F8` 品牌色、Noto Sans Thai 字体和已确认原型内容始终优先。

## 当前采用的技能

| 用途 | 来源与固定版本 | 完整安装目录 |
| --- | --- | --- |
| 网页视觉设计 | [Anthropic frontend-design](https://github.com/anthropics/skills/blob/dbd4588f9e1033efb41dad4bef2f7947c8993d44/skills/frontend-design/SKILL.md)，commit `dbd4588f9e1033efb41dad4bef2f7947c8993d44` | 上游 `skills/frontend-design/`；本机 `/Users/yang.guo04/.codex/skills/frontend-design/` |
| 配色、排版与视觉验收 | [Impeccable 4.7.0](https://github.com/pbakaus/impeccable/blob/5cb95eea9c96479f57afe0732a45470d30183326/.agents/skills/impeccable/SKILL.md)，commit `5cb95eea9c96479f57afe0732a45470d30183326` | 上游 `.agents/skills/impeccable/`；本机 `/Users/yang.guo04/.codex/skills/impeccable/` |

`colorize` 是 Impeccable 完整技能中的专项配色流程，具体规则见 [reference/colorize.md](https://github.com/pbakaus/impeccable/blob/5cb95eea9c96479f57afe0732a45470d30183326/.agents/skills/impeccable/reference/colorize.md)，不是另一个独立的 `colorize/SKILL.md`。此次安装保留完整参考文件和脚本目录。

原有同名安装分别备份至 `work/web-color-skills/frontend-design-before/` 和 `work/web-color-skills/impeccable-before/`。两个完整技能已经安装，下一轮可自动发现；本轮已直接读取上游规则并用于实现。技能属于开发工具，官网运行仍使用现有静态 HTML/CSS/JS，无新增框架依赖。

Impeccable 的 context 启动器已经尝试运行，但下载 `engine 0.1.16` 时遇到网络失败。按照其 SKILL.md 明确提供的回退方式，本轮直接读取现有项目上下文，并应用配色与 craft-floor 规则继续完成设计；该失败不阻塞网页修改，也不要求用户另行运行安装器。

## 网页设计规则如何落地

依据官方 frontend-design：

- 首屏优先展示产品最有特征的真实素材，本项目使用用户提供的完整 App 首页，保持原图比例，不再将人物抠出或裁掉界面下半部。
- 使用紧凑、明确的颜色、字体、布局变量；整站按同一内容宽度、左右边距和左对齐轴组织。
- 全站使用 Noto Sans Thai；以字号、字重和留白建立层级，不额外引入第二种展示字体。
- 图标保持同一绘制家族与视觉重量，依据内容使用不同语义图形；不以重复图形或散落箭头充当装饰。
- 克制重复的等尺寸卡片、渐变装饰和模板化动效；通过内容分组及留白建立节奏。
- 以实际浏览器截图检查桌面与手机效果，不能以技能安装或代码检查代替视觉验收。

以上是本项目结合用户要求采用的设计决策，不声称是技能唯一允许的布局。

## 配色规则如何落地

依据 Impeccable colorize 与 [craft-floor](https://github.com/pbakaus/impeccable/blob/5cb95eea9c96479f57afe0732a45470d30183326/.agents/skills/impeccable/reference/craft-floor.md)：

- 先读取品牌、App 素材和现有颜色变量，保留已确定的品牌与状态语义。
- 按页面背景、内容表面、主次文字、按钮、焦点、边线和状态分配颜色角色，而不是额外拼接无关色板。
- `#44E0F8` 承担品牌识别与明确的背景区域；App 的 `#113F4A` 承担主按钮和深色前景；白色与 App 浅灰用于内容及背景分区。
- 最强颜色服务于明确区域或功能，不将小面积青色装饰散布至全部组件。
- 彩色背景上的辅助文字根据前景与背景计算，不直接套用浅灰文字。
- 普通正文对比度至少 4.5:1；大字、控件、功能图标与焦点提示至少 3:1；信息不只依靠颜色表达。

实测 sRGB 对比度：

| 前景 / 背景 | 对比度 | 设计含义 |
| --- | ---: | --- |
| `#44E0F8` / `#FFFFFF` | 1.58:1 | 不能作为白底上的小字或唯一功能图标颜色 |
| `#113F4A` / `#FFFFFF` | 11.45:1 | 可用于白底文字和按钮配色 |
| `#113F4A` / `#44E0F8` | 7.23:1 | 可用于品牌色区域的正文与图标 |
| `#62666A` / `#F3F5F6` | 5.29:1 | 可用于浅灰背景上的辅助正文 |
| `#62666A` / `#44E0F8` | 3.66:1 | 不用于品牌色背景上的普通字号正文 |

具体颜色仍需结合实际组件的透明度、悬停态、焦点态与背景检查。对比度合格只证明可读性，整体是否与 App 协调仍以真实页面截图判断。

## 历史背景：上一轮 UI UX Pro Max

上一轮选择并完整安装了 [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)，固定版本为 [28327f2f214d31bbd7555ed0c012a5df6484ed96](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/commit/28327f2f214d31bbd7555ed0c012a5df6484ed96)，上游目录为 `.claude/skills/ui-ux-pro-max/`。本机目录为 `/Users/yang.guo04/.codex/skills/ui-ux-pro-max/`，旧版备份位于 `work/app-aligned/ui-ux-pro-max-before/`。

该次安装修复了原有 `data`、`scripts` 指向缺失目录的相对符号链接，补齐实际数据、参考文件和搜索脚本。其间距、响应式、可访问性与组件状态规则保留作为通用检查背景；本轮的网页视觉与配色主规则改为上文两项。

上一轮调研快照记录为：UI UX Pro Max 139,181 Stars、skills.sh 410.4K 安装记录；Anthropic skills 合集 183,141 Stars、frontend-design 1.0M 安装记录；Taste Skill 101,331 Stars、662.8K 安装记录；Impeccable 85,174 Stars、354.4K 安装记录。这些数字是当时的历史快照，不代表当前排名，也不作为本轮选择的主要理由。

Stars 属于仓库，安装记录不等于独立用户或活跃用户；尤其不能把 Anthropic 整个 skills 合集的 Stars 归为 frontend-design 单技能的使用人数。本项目不据此宣称任何技能“全网使用最多”。
