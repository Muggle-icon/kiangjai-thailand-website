# 居中导航与左对齐Hero方向 · 2026-10-26

用户最新要求导航真正居中、使用完整带名称Logo、自然hover/selected、Hero文字左对齐并加强字重。完整照片无渐变要求及下方ATS模块组织保留。产品原型内容不变，新DOCX中文不直接发布为泰语。

## 当前实现

- Hero改为44%信息/56%照片，文字全部左对齐，h1与额度800字重；cqw左边距对齐1120px正文轴。手机及761–900px先信息后完整3:2照片，信息各列左对齐。market-life.jpg无叠字、裁切、渐变、蒙版、遮罩或滤镜。
- 撤销25%窄居中文字栏和旧712.5px Hero高度结论；当前行高由完整照片及信息自然决定。本轮截图和交互验证完成前不宣称QA通过。
- 导航采用用户原始完整logo-wordmark.png（368×128），桌面164px、手机约128px；footer横版Logo及App图标保留。桌面页头88px、176/minmax/176网格确保中间导航居中，sticky+112px偏移；手机64px relative+24px偏移。
- 导航hover为teal变色、选中700字重及teal，无下划线；首页滚动跟随aria-current=location，安全页为page，需实测滚动与hash定位。
- 品牌青三入口紧接Hero；1120px主轴、手机24px边距，主模块标题64px/40px、标题到面板64px/40px、优势上留白160px/80px。
- 三项优势加原安全提醒收为2×2大白面板：桌面40px内边距、120px图标槽、行列gap40px/32px；手机单列。四图标同为Phosphor Duotone且语义不同。
- 四步与三张完整App原图在同一白面板；手机纵向步骤、单屏横向画廊、三枚44px切换点及原图入口。
- 公司区保留原安全介绍；H08官方渠道和防骗卡片位于下载后、页脚前，原标题、正文与两个原入口不变。
- 模块标题居中、面板正文左对齐，Hero与步骤按固定响应式规则重排；全站Noto Sans Thai和原品牌tokens。
- 内容审计确认181条文案SHA未变，四页原文和动作0增删；唯一图片元素变更是页头Logo，下载both及渠道complete演示不变。

## 历史方向

此前大号App占首屏、透明人物、照片白渐变融合、25%居中文字栏与纯符号导航Logo均已退出当前实现，只保留历史追溯；不能把旧提示词、截图和验收当成本轮证据。

参考测量见 [url-dna](url-dna.md)，规则见 [MASTER](../design-system/kiangjai/MASTER.md)，颜色见 [brand-colors](brand-colors.md)，新DOCX差异见 [内部审查](../docs/product-requirements-review.md)。技能不能代替参考实看、验收或用户认可，不构成转化效果证据。
