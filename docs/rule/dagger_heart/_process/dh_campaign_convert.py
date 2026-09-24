# -*- coding: utf-8 -*-
"""DH 战役框架六页转换器：dh_wiki 源 → Site/docs/rule/dagger_heart/campaign/*.md
规则见 _process/战役框架_轮次表.md 模板分流表。正文逐字，转换只动载体。"""
import io, re, os, sys, urllib.parse, datetime

LIB = 'TTRPG/资源库/Daggerheart/dh_wiki'
OUT = 'Site/docs/rule/dagger_heart/campaign'
WIKI = 'https://daggerheart.huijiwiki.com/wiki/'

FRAMES = [
    ('秽野之息', 'witherwilds'),
    ('五旗成焰', 'five-banners-burning'),
    ('野兽饭', 'beast-feast'),
    ('暗影纪元', 'age-of-umbra'),
    ('主板', 'motherboard'),
    ('旱土巨像', 'colossus-of-the-drylands'),
]
SECTIONS_EXPECTED = ['背景概述', '社群', '种族', '职业', '玩家守则', '游戏主持人守则',
                     '特色设定', '楔子', '战役机制', '第零场问题']
COLOSSUS_LIST = ['“尘海掠空”，波伊', '“巨戕”，埃克力', '“怨煞与她的万千子嗣”，基里尔', '“铡刀”，达克塔戴']

ANCESTRY = {'仙灵', '械灵', '蛙裔', '龙人', '魔裔', '孢菌人', '龟人', '羊蹄人', '费尔博格', '人类', '种族'}
COMMUNITY = {'社群', '博识之民', '高城之民', '山岭之民', '地下之民', '荒野之民',
             '结社之民', '法外之民', '滨海之民', '漂泊之民'}
SITE_LINK = {}
for x in ANCESTRY: SITE_LINK[x] = '/rule/dagger_heart/brief_ref/ancestry'
for x in COMMUNITY: SITE_LINK[x] = '/rule/dagger_heart/brief_ref/community'
SITE_LINK['辉耀领域'] = '/rule/dagger_heart/brief_ref/domain/splendor'
SITE_LINK['伤痕'] = '/rule/dagger_heart/guide/general_rule'
SITE_LINK['恐惧点'] = '/rule/dagger_heart/guide/combat'
WIKI_LINK = {'“巨戕”埃克力', '勘误20250909'}
PLAIN_OK = {'严重伤害', '恐惧骰', '轻度伤害', '重伤'}

LOG = []

def wikipath(t):
    return WIKI + urllib.parse.quote(t, safe='')

# ---------- 信息框 ----------
def parse_infobox(text):
    m = re.match(r'\{\{战役框架\n(.*?)\n\}\}', text, re.S)
    assert m, '信息框未匹配'
    body = m.group(1)
    fields = {}
    cur = None
    for ln in body.split('\n'):
        fm = re.match(r'\|(\w+)=(.*)$', ln)
        if fm:
            cur = fm.group(1)
            fields[cur] = fm.group(2)
        elif cur:
            fields[cur] += '\n' + ln
    return fields, text[m.end():]

# ---------- 行内转换 ----------
def inline(s, ctx=''):
    s = re.sub(r'<ref[^>]*>(.*?)</ref>',
               lambda m: '（注：' + m.group(1).strip().rstrip('。') + '）', s, flags=re.S)
    s = re.sub(r'<references\s*/>', '', s)
    s = re.sub(r'\{\{#ask:\[\[分类:巨像\]\]\|sep=<br>\}\}', '', s)
    s = re.sub(r'\[\[文件:([^|\]]+)(?:\|[^\]]*)?\]\]',
               lambda m: f'[图：{m.group(1).strip()}（灰机）]({wikipath("文件:" + m.group(1).strip())})', s)
    s = re.sub(r'\[(https?://[^\s\]]+)\s+([^\]]+)\]', r'[\2](\1)', s)
    def wik(m):
        t = m.group(1).strip()
        if t in SITE_LINK: return f'[{t}]({SITE_LINK[t]})'
        if t in WIKI_LINK: return f'[{t}]({wikipath(t)})'
        if t not in PLAIN_OK:
            LOG.append(f'{ctx} 未映射链接 [[{t}]] → 纯文本')
        return t
    s = re.sub(r'\[\[([^]|]+)(?:\|[^]]+)?\]\]', wik, s)
    s = s.replace('&nbsp;', ' ')
    s = re.sub(r'<(b|strong)>(.*?)</\1>', r'**\2**', s, flags=re.S)
    s = re.sub(r'<(i|em)>(.*?)</\1>', r'*\2*', s, flags=re.S)
    s = re.sub(r'</?(?:big|span)[^>]*>', '', s)
    s = s.replace("'''''", '***').replace("'''", '**').replace("''", '*')
    # 强调符号内侧空格外移（markdown 闭标记前禁空格；空格是源文可见内容，只能挪走不能删）
    s = re.sub(r'\*\*([^*\n]+?)\s+\*\*', r'**\1** ', s)
    s = re.sub(r'(?<!\*)\*([^*\n]+?)\s+\*(?!\*)', r'*\1* ', s)
    return s

def sent_split(s, ctx=''):
    """断句律：。；后换行分段，闭引号后不切。"""
    if '。' not in s and '；' not in s:
        return [s]
    parts, buf, i = [], '', 0
    while i < len(s):
        ch = s[i]
        buf += ch
        if ch in '。；':
            nxt = s[i+1] if i + 1 < len(s) else ''
            if nxt not in '」”』、，）':
                parts.append(buf); buf = ''
        i += 1
    if buf.strip(): parts.append(buf)
    return parts

def md_escape_cell(c):
    c = c.strip()
    if c.startswith('-'): c = '\\' + c
    return c

def table_to_md(tbl, ctx):
    rows = re.findall(r'<tr[^>]*>(.*?)</tr>', tbl, re.S)
    assert rows, f'{ctx} 空表格'
    assert 'colspan' not in tbl and 'rowspan' not in tbl, f'{ctx} 出现跨行列'
    grid = []
    for r in rows:
        cells = re.findall(r'<(th|td)[^>]*>(.*?)</\1>', r, re.S)
        line = []
        for kind, c in cells:
            c = inline(c, ctx + '/cell')
            c = c.replace('\n', '<br>')
            c = re.sub(r'\s*<br>\s*', '<br>', c).strip()
            c = re.sub(r'\s{2,}', ' ', c)
            line.append(md_escape_cell(c))
        grid.append(line)
    width = max(len(r) for r in grid)
    for r in grid:
        r += [''] * (width - len(r))
    out = ['| ' + ' | '.join(grid[0]) + ' |', '|' + '---|' * width]
    for r in grid[1:]:
        out.append('| ' + ' | '.join(r) + ' |')
    return '\n'.join(out)

# ---------- 正文逐行 ----------
def convert_body(body, title):
    lines = body.split('\n')
    out, i = [], 0
    para = []
    def flush():
        if para:
            text = ' '.join(para).strip()
            para.clear()
            if text:
                m = re.match(r'^(\*{1,3})(.+)\1$', text, re.S)
                if m and not re.search('[。；]', m.group(2)):
                    out.append(text); out.append('')
                elif m:
                    op, inner = m.group(1), m.group(2)
                    for f in sent_split(inner, title):
                        out.append(op + f + op); out.append('')
                else:
                    for seg in sent_split(text, title):
                        out.append(seg); out.append('')
    tmpl_skip = re.compile(r'^\{\{(?:规则文本开始\|[^}]*|规则翻页\|[^}]*|核心规则书\|[^}]*|CR/[A-Z0-9]+)\}\}\s*[　\s]*$')
    while i < len(lines):
        raw = lines[i]; ln = raw.strip()
        if tmpl_skip.match(ln):
            i += 1; continue
        if not ln:
            flush(); i += 1; continue
        m = re.match(r'^(={2,4})(.+?)\1\s*$', ln)
        if m:
            flush()
            level = len(m.group(1))
            out.append('#' * level + ' ' + inline(m.group(2).strip(), title + '/h'))
            out.append('')
            i += 1; continue
        m = re.match(r'^\*(?!\*)(.*)$', ln)
        if m:
            flush()
            for f in sent_split(inline(m.group(1).strip(), title + '/li'), title + '/li'):
                out.append('* ' + f); out.append('')
            i += 1; continue
        m = re.match(r'^:(.*)$', ln)
        if m:
            flush()
            for f in sent_split(inline(':' + m.group(1).strip(), title + '/def'), title + '/def'):
                out.append(f); out.append('')
            i += 1; continue
        m = re.match(r"^''(.+)''\s*$", ln)
        if m and not ln.startswith("'''''"):
            # 整行斜体=该页的节引言（他页的段落描述同角色）→ tip 容器，板块统一
            flush()
            out.append('::: tip')
            for seg in sent_split(inline(m.group(1).strip(), title + '/lead'), title + '/lead'):
                out.append(seg); out.append('')
            out.append(':::'); out.append('')
            i += 1; continue
        if ln.startswith('<table'):
            flush()
            j = i
            while '</table>' not in lines[j]: j += 1
            tbl = '\n'.join(lines[i:j+1])
            out.append(table_to_md(tbl, title)); out.append('')
            i = j + 1; continue
        m = re.match(r'^\{\{段落描述\|(.*?)\}\}\s*$', ln, re.S)
        if m:
            flush()
            out.append('::: tip')
            for seg in sent_split(inline(m.group(1).strip(), title + '/tip'), title + '/tip'):
                out.append(seg); out.append('')
            out.append(':::'); out.append('')
            i += 1; continue
        m = re.match(r'^\{\{五级标题\|(.*?)\}\}\s*$', ln)
        if m:
            flush()
            out.append('#### ' + inline(m.group(1).strip(), title + '/h5')); out.append('')
            i += 1; continue
        m = re.match(r'^\{\{勘误\|(.*?)\}\}\s*$', ln, re.S)
        if m:
            flush()
            out.append('::: tip 勘误')
            for seg in sent_split(inline(m.group(1).strip(), title + '/errata'), title + '/errata'):
                out.append(seg); out.append('')
            out.append(':::'); out.append('')
            i += 1; continue
        if ln.startswith('{{提示|'):
            flush()
            j = i; buf = [ln]
            while not buf[-1].rstrip().endswith('}}') or buf[-1].rstrip() == '{{提示|':
                j += 1
                if j >= len(lines): break
                buf.append(lines[j].strip())
            inner = '\n'.join(buf)
            inner = re.sub(r'^\{\{提示\|', '', inner)
            inner = re.sub(r'\}\}\s*$', '', inner)
            parts = inner.split('|')
            content = '|'.join(p for p in parts if not re.match(r'^\w+=', p))
            out.append('::: tip')
            for seg in sent_split(inline(content.strip(), title + '/hint'), title + '/hint'):
                out.append(seg); out.append('')
            out.append(':::'); out.append('')
            i = j + 1; continue
        if ln.startswith('{{引用|'):
            flush()
            j = i; buf = [ln]
            while not buf[-1].rstrip().endswith('}}'):
                j += 1; buf.append(lines[j].strip())
            inner = '\n'.join(buf)
            inner = re.sub(r'^\{\{引用\|', '', inner)
            inner = re.sub(r'\}\}\s*$', '', inner)
            tip_title = '示例'
            m3 = re.match(r'^标题=([^|]*)\|(.*)$', inner, re.S)
            if m3:
                tip_title = m3.group(1).strip()
                inner = m3.group(2)
            content = inline(inner, title + '/quote').strip()
            content = re.sub(r'^\*\*示例[:：]?\*\*\s*', '', content).strip()
            out.append('::: tip ' + tip_title)
            for seg in content.split('\n'):
                seg = seg.strip()
                if not seg: continue
                out.append('')
                for f in sent_split(seg, title + '/quote'):
                    out.append(f); out.append('')
            out.append(':::'); out.append('')
            i = j + 1; continue
        if '{{' in ln or '}}' in ln:
            LOG.append(f'{title} 未消费模板行: {ln[:80]}')
        para.append(inline(ln, title))
        i += 1
    flush()
    return '\n'.join(out)

def insert_colossus(text):
    marker = '#### 范例巨像'
    idx = text.find(marker)
    if idx < 0:
        LOG.append('旱土巨像：未找到范例巨像锚')
        return text
    end = idx + len(marker)
    lst = '\n'.join(f'* [{n}]({wikipath(n)})' for n in COLOSSUS_LIST)
    return text[:end] + '\n\n以下范例巨像收录于灰机维基「分类:巨像」，点击名称可查看其数据页：\n\n' + lst + text[end:]

def demote_stray_h2(text, ctx):
    """板块统一（DM 令）：十个基准 h2 之外的游离 h2 降为 h3，其子树整体降一级。"""
    out = []
    cascade = False
    for ln in text.split('\n'):
        m = re.match(r'^(#{2,6}) (.+)$', ln)
        if m and len(m.group(1)) == 2:
            if m.group(2).strip() in SECTIONS_EXPECTED:
                cascade = False
                out.append(ln)
            else:
                cascade = True
                out.append('### ' + m.group(2))
            continue
        if m and cascade:
            out.append('#' + ln)
            continue
        out.append(ln)
    return '\n'.join(out)

def convert(title, slug):
    src = io.open(f'{LIB}/{title}.txt', encoding='utf-8').read()
    fields, body = parse_infobox(src)
    main = convert_body(body, title)
    main = re.sub(r'\n{3,}', '\n\n', main).strip()
    main = demote_stray_h2(main, title)
    if title == '旱土巨像':
        main = insert_colossus(main)
    now = datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S')
    head = [
        f'**复杂度**：{fields["复杂度"].strip()}',
        '',
        f'**作者**：{fields["作者"].strip()}',
        '',
    ]
    for f in ('简介', '描述'):
        for seg in sent_split(fields[f].strip(), title + '/' + f):
            head.append(seg); head.append('')
    for f in ('氛围', '主题', '灵感'):
        head.append(f'**{f}**：{fields[f].strip()}')
        head.append('')
    if head and head[-1] == '':
        head.pop()
    page = f'---\ntitle: {title}\ncreateTime: {now}\n---\n\n' + '\n'.join(head) + '\n\n' + main + '\n'
    while '\n\n\n' in page: page = page.replace('\n\n\n', '\n\n')
    body_crlf = page.replace('\r\n', '\n').replace('\n', '\r\n')
    os.makedirs(OUT, exist_ok=True)
    with io.open(f'{OUT}/{slug}.md', 'w', encoding='utf-8', newline='') as f:
        f.write(body_crlf)
    h2s = re.findall(r'^## (.+)$', page, re.M)
    ok = h2s == SECTIONS_EXPECTED
    print(f'{slug}: h2={len(h2s)} 节序{"OK" if ok else "FAIL:" + "|".join(h2s)}')
    return ok

if __name__ == '__main__':
    allok = True
    for t, s in FRAMES:
        allok = convert(t, s) and allok
    print('残留扫描：')
    for t, s in FRAMES:
        page = io.open(f'{OUT}/{s}.md', encoding='utf-8').read()
        for pat, name in [(r'\{\{', '模板'), (r'\[\[', '双链'), (r'<table', '表格标签'),
                          (r'<ref', 'ref'), (r'&[a-z]+;', '实体'),
                          (r'<(?!br\b|/)(?!table\b)(\w+)[ />]', '漏处理HTML')]:
            hits = re.findall(pat, page)
            if hits: print(f'  {s}: {name}×{len(hits)}'); allok = False
    print('LOG：')
    for l in LOG: print(' ', l)
    print('ALL_OK' if allok else 'HAS_FAIL')
