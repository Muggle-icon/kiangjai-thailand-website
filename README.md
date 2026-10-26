# เคียงใจ / Kiangjai 泰国官网

- [公开预览](https://muggle-icon.github.io/kiangjai-thailand-website/)
- [GitHub仓库](https://github.com/Muggle-icon/kiangjai-thailand-website)

保留已审原型的完整内容与入口，参考 [ATS PICO](https://www.atspico.co.th/home) 的清楚分区与统一轴线，并与自有App视觉搭配。本轮重设计全部下方模块、安全中心、政策页与页脚：开放式优势、流程/完整App界面分工、公司与FAQ双栏、独立品牌青下载带。完整Logo、居中导航与左对齐完整照片Hero沿用上一轮。

## 编辑

现有静态 HTML/CSS/JS，无框架或运行时依赖。

| 文件 | 作用 |
| --- | --- |
| src/pages/home.html | 首页 |
| src/pages/security.html | 完整安全中心 |
| src/pages/privacy.html / terms.html | 原型原有政策说明 |
| src/components/ | 页头、页尾、FAQ、弹窗 |
| src/content/reviewed-th.json | 原型181条已保存泰语文案，禁止擅改 |
| assets/redesign.css | 共享 tokens、字体、Header、Hero、控件与弹窗 |
| assets/homepage.css | 首页下方模块、布局和响应式 |
| assets/secondary.css | 安全/政策页与共享页脚 |
| assets/base.css | 基础及支持页样式 |
| assets/app.js | 菜单、FAQ、弹窗、画廊、下载演示、举报、复制 |
| scripts/build.py | 用Python标准库组装四个静态页面 |

```sh
python3 scripts/build.py
node --check assets/app.js
python3 -m http.server 8765
```

编辑后检查1440、390、360视口，正常提交推送 main，Pages自动更新同一链接。无需新仓库或强制推送。

## 内容基线

原型 `211026 version kiangjai-thai-reviewed-20261021T134712.html` 的已保存 state.edits 优先于 catalog。181条文案库 SHA256 为 `d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc`。保留四页所有原文和原操作入口，不用“待确认”替代原文。截图、竞品和审查意见都不能自行改变原型条款。

原型默认双平台下载与完整官方渠道示例。原型本身未设置真实商店链接、示例QR不可扫描，点击按原型反馈；示例域名、开发者、举报邮箱及隐私/条款编制中原句继续照录。这是原型已有状态，不是要求重新填正文。

## 设计与验证

- [实测 ATS PICO 结构](design/url-dna.md)
- [项目设计规则](design-system/kiangjai/MASTER.md)
- [配色和字体规则](design/brand-colors.md)
- [Skill选择与安装历史](docs/design-skill.md)
- [当前设计方向](design/redesign-direction.md)
- [新需求文档差异审查](docs/product-requirements-review.md)
- [最终验证](docs/redesign-verification.md)
- [内容恢复核对](docs/content-restoration.md)
- [素材来源与完整图片处理提示词](docs/assets.md)

全站共用1120px主轴，桌面至少40px、手机24px外边距。首页主模块标题48px/32px、分区80px/56px，内部按40/32/24px组织；旧64/160规则和同形大白面板已退出当前下方模块。优势三项开放式排列、原安全提醒横条；流程左侧四步、右侧三张完整App图，手机依原顺序纵排并保留原画廊和三枚44px控件。公司与FAQ使用同样标题栏/正文栏，下载独立整宽品牌青带，H08在下载后、页脚前。

安全中心、隐私/条款与页脚按同轴线、App色板、阅读式左对齐和分隔线统一。Header仍为88px居中导航，手机64px relative；Hero44%信息/56%完整3:2照片且文字左对齐。最新规则见MASTER；内容审计与设计说明不代替真实浏览器视觉及交互QA。

`market-life.jpg` 是依据用户人物图编辑的1536×1024完整场景，当前自然比例用于Hero；历史透明人物仅存档。泰文与结构均为真实HTML/CSS。Noto Sans Thai依SIL OFL、Phosphor依MIT、Lucide依ISC授权，各目录附license。公开设计页面使用noindex；该设置不是访问控制。
