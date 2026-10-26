# 素材来源与处理

- `assets/brand/logo-wordmark.png`：用户最新提供的368×128完整带名称PNG，逐字节复制，SHA256为 `e9180ae5c0c445ad301743d17f909fd70621d863793d4f28ff1cf8c0caf905bb`；只替换四页导航左上Logo，桌面164px、手机128px、≤380px为120px，名称不可裁切。页尾横版Logo与App图标不变。
- `assets/brand/logo-symbol.png`：上一轮136×136纯图形PNG，已由完整wordmark替代；只保留历史，不是当前导航规范。
- `assets/brand/app-icon.png`：用户提供的 240×240 透明 PNG。
- `assets/brand/logo-horizontal.png`：用户提供的 632×240 透明 PNG，保持原图比例和像素内容；当前继续用于页尾。
- `assets/app/home.png`、`assets/app/loan-plan.png`、`assets/app/repayment.png`：用户提供的750×1624原始PNG，逐字节复制，分别对应首页、选期、扫码还款；未改写图中文字和金额。三张图都位于申请面板，按自然比例完整显示，所有图可点击打开完整原图；桌面三图并列，手机单屏横向画廊配三枚44px切换点，不裁掉纵向内容。截图是产品界面展示，不据此增改官网原型条款。
- `assets/images/market-life.jpg`：依据用户人物图用内置imagegen编辑的1536×1024完整摄影素材，PNG源在工作目录，网页转JPEG压缩。当前桌面Hero为44%左对齐信息/56%完整3:2照片，手机及761–900px先信息后照片。不裁切、不加蒙版或渐变、不叠字；不是透明人物，也不是客户证言或真实借款案例。
- `assets/fonts/NotoSansThai-Variable.ttf`：Google Fonts 官方仓库 `google/fonts/ofl/notosansthai`，授权见同目录 `OFL-NotoSansThai.txt`。
- `assets/icons/application-duotone.svg`、`bank-transfer-duotone.svg`、`qr-payment-duotone.svg`、`safety-duotone.svg`：Phosphor Duotone 的手机、银行、二维码及警示盾牌图标，对应三项优势与原安全提醒。通过 better-icons 获取，MIT许可见 `LICENSE-Phosphor.txt`；其他导航/系统控件继续使用 Lucide 线性图标，ISC许可见 `LICENSE-Lucide.txt`。

## 人物图最终提示词

使用内置工具，输入为用户人物图，未使用 API Key 或 CLI fallback。

> Edit the supplied photograph into a website editorial lifestyle photograph. Preserve the same adult Thai woman, her face, turquoise patterned apron, small ordinary Thai food stall and warm evening market setting. Remove ALL overlaid Thai advertising copy, UI/status-bar symbols and icons. Extend/reframe as a wide 3:2 landscape photograph with the woman on the right half and softly blurred genuine stall context on the left. Change the posed thumbs-up to a relaxed hand resting naturally by the counter, while she naturally holds a generic unbranded phone at waist/chest level and has a gentle candid smile rather than a hard-sell ad pose. Preserve realistic skin texture and everyday affordable surroundings. Warm, credible, modern editorial photography, natural lights, no luxury setting. No text, logos, loan claims, money/coins, product UI, watermark or extra people. This is only the photographic asset; do NOT generate a web page or any typography. High quality landscape photograph.


## 历史透明人物素材（当前页面不加载）

`assets/images/merchant-cutout.png`，1024×1536，带alpha，约2MB。使用内置imagegen在上一版用户人物素材编辑结果基础上去除背景，旧版曾用于首屏；用户最新要求撤除单独抠出的人物，因此当前所有页面均不加载此透明素材；完整夜市场景 `market-life.jpg` 已按最新ATS PICO参考方向重新用于Hero，两者不能混为一类。

提示词：

> Use case: background-extraction. Edit target: the supplied photograph of an adult Thai food stall owner. Produce a clean transparent-background photographic cutout of ONLY this same woman holding her phone. Preserve her identity, face, hair bun, smile, white shirt, turquoise patterned apron, phone and realistic anatomy. Keep her relaxed pose and include her complete head, hair, both shoulders, both arms, hands and body down to upper thighs; complete any part previously occluded by the counter naturally. Remove the entire market background, counter, utensils, vegetables and all other objects, leaving actual alpha transparency. Natural soft daylight color; no harsh orange rim light. Tall portrait composition fitted closely around the woman with small transparent margins, no extra empty landscape. No text, no UI, no logos, no added people or money. This asset will sit unframed on the right side of a warm ivory website hero.

设置 `transparent_background: true`。另一轮去边缘尝试未用于网页；以上为历史版本实际采用透明素材的提示词，当前不加载该透明素材。
