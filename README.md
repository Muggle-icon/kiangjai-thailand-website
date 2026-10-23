# เคียงใจ / Kiangjai 泰国官网设计预览

独立新项目。首版根据用户提供的已审校泰文 HTML 整理，产品正文未回退旧译；审稿占位、模拟下载和示例域名已替换。原型原文件和内部编辑工具未上传。

- 公开预览：https://muggle-icon.github.io/kiangjai-thailand-website/
- 仓库：https://github.com/Muggle-icon/kiangjai-thailand-website
- 页面：首页 `index.html`、安全中心 `security.html`、隐私 `privacy.html`、条款 `terms.html`。
- 样式：`assets/styles.css`；交互：`assets/app.js`。
- [需要补充的素材与信息](docs/materials.md)
- [设计背景](design/context.md)、[原型源码审查](design/audit.md)、[竞品研究](docs/competitor-research.md)

## 当前版本

这是可公开查看的设计预览，不是正式营业站。品牌色已按用户确认为 `#44E0F8`，搭配深青按钮、浅灰底和白色卡片；Logo 使用品牌文字占位，产品截图位置已编号。原型中的最高 50,000 泰铢、曼谷服务区域和企业资料均保留为原型输入，尚未独立核验。

尚缺真实商店链接、正式域名、开发者、利率费用、期限、申请资格、牌照核验和法律正文。页面明确显示待确认状态，没有贷款申请表、数据收集、外部统计脚本、伪造 QR 或模拟申请成功。下载点击显示“即将上线”。不显示原型中未经本次核验的已许可断言。

## 后续更新

固定更新这个仓库的 `main` 分支。GitHub Pages 以 `main` 根目录为源；每次正常提交推送后自动更新同一预览地址，保留 Git 历史，无需创建新仓库或强制推送。

1. 替换 `assets/` 中的正式素材，并更新页面中的图片引用。
2. 修改页面、样式或交互，保留已审校泰文，必要时另标新文案待审校。
3. 检查桌面与手机布局、页面直链、FAQ、菜单、弹窗和控制台。
4. 提交并正常推送 `main`，等待 Pages 构建成功后交付同一链接。

本地预览：在本目录运行 `python3 -m http.server 8765`，访问 `http://127.0.0.1:8765/`。这是无依赖的静态网站，无需安装构建工具。

## 证据边界

原型审查基于源码；新预览另做浏览器验证。竞品 ATS PICO 首屏已视觉查看，FINNIX、MoneyThunder 和 Rabbit Cash 为官网文本核查；竞品自述不代表用户产品的条款或合规要求。正式产品信息须由业务负责人确认。`noindex` 用于降低预览被搜索收录的机会，不构成访问控制。
