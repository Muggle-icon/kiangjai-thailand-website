# 素材来源与处理

- `assets/brand/app-icon.png`：用户提供的 240×240 透明 PNG。
- `assets/brand/logo-horizontal.png`：用户提供的 632×240 透明 PNG，保持原图比例和像素内容。
- 用户提供的 App 页面保留在工作目录作产品视觉参考；当前发布版本未把其利率或促销文案放入官网。
- `assets/images/market-life.jpg`：依据用户提供人物图，使用内置 imagegen 编辑后生成的横幅摄影素材；PNG 源保存在本次工作目录，网页版本转 JPEG 压缩。非客户证言或真实借款案例。
- `assets/fonts/NotoSansThai-Variable.ttf`：Google Fonts 官方仓库 `google/fonts/ofl/notosansthai`，授权见同目录 `OFL-NotoSansThai.txt`。
- `assets/icons/*.svg`：统一 Lucide 线性图标，经 better-icons 所列 Iconify API 获取，授权见 `LICENSE-Lucide.txt`。

## 人物图最终提示词

使用内置工具，输入为用户人物图，未使用 API Key 或 CLI fallback。

> Edit the supplied photograph into a website editorial lifestyle photograph. Preserve the same adult Thai woman, her face, turquoise patterned apron, small ordinary Thai food stall and warm evening market setting. Remove ALL overlaid Thai advertising copy, UI/status-bar symbols and icons. Extend/reframe as a wide 3:2 landscape photograph with the woman on the right half and softly blurred genuine stall context on the left. Change the posed thumbs-up to a relaxed hand resting naturally by the counter, while she naturally holds a generic unbranded phone at waist/chest level and has a gentle candid smile rather than a hard-sell ad pose. Preserve realistic skin texture and everyday affordable surroundings. Warm, credible, modern editorial photography, natural lights, no luxury setting. No text, logos, loan claims, money/coins, product UI, watermark or extra people. This is only the photographic asset; do NOT generate a web page or any typography. High quality landscape photograph.
