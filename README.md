# เคียงใจ / Kiangjai 泰国官网

- [公开预览](https://muggle-icon.github.io/kiangjai-thailand-website/)
- [GitHub仓库](https://github.com/Muggle-icon/kiangjai-thailand-website)

保留用户已审校原型的完整业务内容，重构官网视觉与响应式交互。品牌色 #44E0F8，以用户确认的ATS PICO为视觉主参考，采用真实Logo、Noto Sans Thai、整幅人物首屏、快捷导航和完整内容分区。

## 编辑

现有静态HTML/CSS/JS，无框架或运行时依赖。

| 文件 | 作用 |
| --- | --- |
| src/pages/home.html | 首页 |
| src/pages/security.html | 完整安全中心 |
| src/pages/privacy.html / terms.html | 原型原有政策说明 |
| src/components/ | 页头、页尾、FAQ、弹窗 |
| src/content/reviewed-th.json | 原型181条已保存泰语文案，禁止擅改 |
| assets/redesign.css | 全站视觉和响应式 |
| assets/base.css | 基础及支持页样式 |
| assets/app.js | 菜单、FAQ、弹窗、下载演示、举报、复制 |
| scripts/build.py | 用Python标准库组装四个静态页面 |

```sh
python3 scripts/build.py
node --check assets/app.js
python3 -m http.server 8765
```

编辑后检查1440、390、360视口，正常提交推送main，Pages自动更新同一链接。无需新仓库或强制推送。

## 内容基线

原型 `211026 version kiangjai-thai-reviewed-20261021T134712.html` 的已保存state.edits优先于catalog。保留所有原业务信息，不用“待确认”替代原文。截图、竞品和审查意见都不能自行改变原型条款。

原型默认双平台下载与完整官方渠道示例已恢复。原型本身未设置真实商店链接、示例QR不可扫描，点击按原型反馈；示例域名/开发者/举报邮箱与隐私/条款编制中原句继续照录。这是原型已有状态，不是要求重新填正文。

## 设计与验证

- [设计方向](design/redesign-direction.md)
- [最终验证](docs/redesign-verification.md)
- [内容恢复核对](docs/content-restoration.md)
- [素材来源与完整图片处理提示词](docs/assets.md)

人物图片经imagegen依据用户素材去字、调整姿态并去背景，仅为品牌形象，不是客户评价。泰文与页面结构均为真实HTML/CSS。Noto Sans Thai依SIL OFL、Lucide依ISC授权，各目录附license。公开设计页面使用noindex；该设置不是访问控制。
