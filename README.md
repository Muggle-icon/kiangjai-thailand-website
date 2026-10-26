# เคียงใจ / Kiangjai 泰国官网

- [公开预览](https://muggle-icon.github.io/kiangjai-thailand-website/)
- [GitHub仓库](https://github.com/Muggle-icon/kiangjai-thailand-website)

保留用户已审校原型的完整业务内容，按指定的 [ATS PICO](https://www.atspico.co.th/home) 对照比例与模块组织。Hero完整展示3:2夜市场景：桌面左25%信息/右75%照片，手机先信息后照片；不加渐变、蒙版、叠字或裁切。品牌青三入口、居中模块标题、大白优势与申请面板形成整组布局。保留 `#44E0F8`、深青按钮及自托管Noto Sans Thai；只替换导航左上的用户纯图形Logo，页尾Logo和App图标不变。

## 编辑

现有静态 HTML/CSS/JS，无框架或运行时依赖。

| 文件 | 作用 |
| --- | --- |
| src/pages/home.html | 首页 |
| src/pages/security.html | 完整安全中心 |
| src/pages/privacy.html / terms.html | 原型原有政策说明 |
| src/components/ | 页头、页尾、FAQ、弹窗 |
| src/content/reviewed-th.json | 原型181条已保存泰语文案，禁止擅改 |
| assets/redesign.css | 全站视觉、颜色 tokens 和响应式 |
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

全站共用1120px主轴，手机24px外边距；页头80px/64px。桌面sticky配104px锚点偏移，手机relative配24px偏移。模块标题64px/40px，标题到面板64px/40px；优势上留白160px/80px，面板正文左对齐。四项优势包含原安全提醒，分别用手机、银行、二维码、警示盾牌图标。申请面板桌面展示四步和三张完整原图，手机为纵向步骤与单屏横向画廊，可滑动或使用三枚44px切换点。

H08官方渠道与防骗卡片已放在下载后、页脚前，原文与入口不变。

`market-life.jpg` 是依据用户人物图编辑的1536×1024完整场景，当前自然比例用于Hero；历史透明人物仅存档。泰文与结构均为真实HTML/CSS。Noto Sans Thai依SIL OFL、Phosphor依MIT、Lucide依ISC授权，各目录附license。公开设计页面使用noindex；该设置不是访问控制。
