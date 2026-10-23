"""Assemble the static site from editable HTML components. No third-party dependencies."""
from pathlib import Path
import hashlib
import re
import json
from html import escape

ROOT=Path(__file__).resolve().parents[1]
VERSION=hashlib.sha256(b''.join((ROOT/name).read_bytes() for name in ('assets/base.css','assets/redesign.css','assets/app.js'))).hexdigest()[:12]
COPY=json.loads((ROOT/'src/content/reviewed-th.json').read_text())['copy']
def render(text):
    text=re.sub(r'\{\{copy:([\w-]+)\}\}',lambda m:escape(COPY[m[1]]),text)
    def component(match):return render((ROOT/'src/components'/(match[1]+'.html')).read_text())
    def icon(match):
        svg=(ROOT/'assets/icons'/(match[1]+'.svg')).read_text()
        return svg.replace('<svg ', '<svg class="icon" aria-hidden="true" focusable="false" ',1)
    return re.sub(r'\{\{icon:([\w-]+)\}\}',icon,re.sub(r'\{\{component:([\w-]+)\}\}',component,text))

for source,filename,title in [('home','index','หน้าแรก'),('security','security','ศูนย์ความปลอดภัย'),('privacy','privacy','นโยบายความเป็นส่วนตัว'),('terms','terms','ข้อกำหนดการใช้บริการ')]:
    main=render((ROOT/'src/pages'/(source+'.html')).read_text())
    header=render('{{component:header}}')
    footer=render('{{component:footer}}')
    dialogs=render('{{component:dialogs}}')
    html=f'''<!doctype html>
<html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><meta name="description" content="เคียงใจ สินเชื่อผ่านแอปพลิเคชัน สมัครออนไลน์ทุกขั้นตอน ดูข้อมูลผลิตภัณฑ์และช่องทางทางการ">
<meta name="theme-color" content="#44E0F8"><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none'">
<title>{title} — เคียงใจ</title><link rel="icon" href="assets/brand/app-icon.png" type="image/png">
<link rel="preload" href="assets/fonts/NotoSansThai-Variable.ttf" as="font" type="font/ttf" crossorigin>
<link rel="stylesheet" href="assets/base.css?v={VERSION}"><link rel="stylesheet" href="assets/redesign.css?v={VERSION}"><script src="assets/app.js?v={VERSION}" defer></script></head>
<body><a class="skip-link" href="#main">ข้ามไปยังเนื้อหา</a><div id="kiangjai-v1">
{header}
{main}
{footer}
{dialogs}
</div></body></html>'''
    (ROOT/(filename+'.html')).write_text(html)
print('Built 4 pages from shared HTML components.')
