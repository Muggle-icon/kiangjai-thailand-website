# Kiangjai官网设计背景

2026-10-26。泰国小额信贷官网，目标是理解产品、建立基础信任并进入下载与安全帮助。按用户指定ATS PICO的模块比例、分组、标题和间距对照，记录见 [url-dna](url-dna.md)。

最新要求是导航真正居中、改用完整带名称Logo、反馈更自然，Hero撤掉窄居中文字栏。当前桌面Header88px，等宽176px两侧槽夹中间导航；hover变teal，selected加粗且无下划线，首页scrollspy用aria-current=location。用户原始logo-wordmark.png为368×128，桌面164px、手机约128px；页尾及App图标不变。

Hero改为44%信息/56%完整3:2照片，文字全部左对齐，h1及额度800字重，用cqw边距对齐1120px正文主轴。手机及761–900px先信息后照片，信息分列但各列左对齐。完整1536×1024照片无叠字、蒙版、渐变、滤镜或裁切。

主内容1120px轴、手机24px边距；主模块标题64px/40px、标题到面板64px/40px，优势上留白160px/80px。品牌青三入口、2×2优势面板、四步与三张完整App图的申请面板形成整体，手机App为单屏横向画廊。H08移至下载后、页脚前，原文和两入口保留。

字体自托管Noto Sans Thai，品牌#44E0F8、深青按钮、白/浅青表面。桌面sticky及112px锚点偏移，手机64px relative及24px偏移；本轮尚需最新截图与交互QA，不沿用旧Hero图片或高度作为验证证据。

用户已确认原型内容，只做视觉与前端交互，不自行翻译、改写或新增待填模块。181条文案SHA256为 `d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc`。四页原文和动作完整，下载both及渠道complete是已审演示。新DOCX与状态、公司信息和政策措辞等差异见 [内部审查](../docs/product-requirements-review.md)，不能直接覆盖泰语。

示例渠道和政策编制中原文不代表已接入生产后台或完整法律文件。固定仓库与Pages持续更新，未开展用户实验，不声称转化提升。具体规则见 [MASTER](../design-system/kiangjai/MASTER.md)，技能历史见 [design-skill](../docs/design-skill.md)。
