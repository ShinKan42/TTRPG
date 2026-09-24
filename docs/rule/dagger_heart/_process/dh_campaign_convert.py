# -*- coding: utf-8 -*-
"""DH 战役框架六页转换器 v2（呈现层完整版）：dh_wiki 源 → campaign/*.md
内容逐字；呈现层=页头大卡包小卡＋快速跳转＋节大卡包小卡＋emoji＋分隔符。
规则正本=_process/战役框架_轮次表.md（模板分流表＋呈现层立法）。"""
import io, re, os, urllib.parse, datetime

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
FRAME_EMOJI = {'秽野之息': '🌿', '五旗成焰': '🚩', '野兽饭': '🍖',
               '暗影纪元': '🌑', '主板': '🔧', '旱土巨像': '🗿'}
SECTIONS_EXPECTED = ['背景概述', '社群', '种族', '职业', '玩家守则', '游戏主持人守则',
                     '特色设定', '楔子', '战役机制', '第零场问题']
H2_EMOJI = {'背景概述': '📜', '社群': '🏘️', '种族': '🧝', '职业': '🗡️', '玩家守则': '🎯',
            '游戏主持人守则': '🎲', '特色设定': '✨', '楔子': '🪝', '战役机制': '⚙️', '第零场问题': '❓'}
H3_EMOJI = {
    '野兽饭的做法': '🍳', '食谱大全！': '📖', '野兽饭！': '🍖', '狩猎怪物获取食材！': '🏹',
    '采集灵植获取食材！': '🌿', '烹饪大餐！': '🍳', '食材生成器！': '🎲', '更高层次的大餐！': '⭐',
    '带特性的食材示例': '🧾', '巴里家餐厅': '🏠', '野兽饭初始装备': '🎒', '主要物理武器': '⚔️',
    '主要魔法武器': '🔮', '副武器': '🗡️', '护甲': '🛡️', '消耗品': '🧪',
    '移动城市': '🏙️', '克罗科洛夫特漫游城': '🚚', '其他移动城市': '🏙️', '堡垒城市': '🏰',
    '银堡': '🏰', '其他堡垒城市': '🏙️', '设计一座城市': '🏗️', '泛威克诸神': '🏛️',
    '范例巨像': '🗿', '巨像地图': '🗺️', '如何书写科德码': '💻', '天网挂钩': '🪝',
    '制作与交易': '💱', '量子币经济': '💰', '古遗零件类别表': '📋', '古遗零件奖励表': '🎁',
    '遗物': '🏺', '收集古遗零件': '⛏️', '用古遗零件打造物品': '🔨', '将古遗零件出售换取量子币': '💱',
    '科技伤害': '⚡', '伊柯尼斯武装与其他装置': '🔧', '伊柯尼斯武装': '🔫', '强化件': '🧩',
    '仇恨之力': '💢', '炽焰信标': '🔥', '伏行之暗': '🌑', '灵魂凋零': '🥀',
    '派系关系': '⚔️', '目标倒计时': '⏳', '舰帆联盟': '⛵', '冠峰圣座': '⛪',
    '捷胜共和国': '🏛️', '极星会': '📜', '沃丹王国': '🛡️', '秽野之息的腐化': '☣️',
    '昼夜以周循环': '🌗', '蛇疫': '🐍', '面纱花': '🌸', '奇迹洞穴': '🕳️',
    '怪物与灵植': '🐉', '魔诱核': '💠', '商路伴侣': '🐎', '狩猎与幕间': '🏕️',
    '巨像敌人': '👹', '巨像数据块': '📊', '特性范例': '📜', '部位效果vs.巨像效果': '🧩',
    '相邻部位': '🔗', '让巨像成为谜题': '🧠', '主持巨像级战斗': '🎲', '升级': '⬆️',
    '库达玛特现身': '👁️', '陨神之子': '🗿', '陨神之子范例': '🗿', '设计你自己的巨像': '🛠️',
    '异兽': '🐗', '源晶': '💎', '旱土前哨': '⛺',
    '第一步：介绍战役': '1️⃣', '第二步：构建基础': '2️⃣', '第三步：车卡引导': '3️⃣',
    '第四步：创造地图': '4️⃣', '第五步：运行第零场': '5️⃣', '第六步：开展冒险': '6️⃣',
}
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
    fields, cur = {}, None
    for ln in body.split('\n'):
        fm = re.match(r'\|(\w+)=(.*)$', ln)
        if fm:
            cur = fm.group(1); fields[cur] = fm.group(2)
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

# ---------- 正文（带卡片状态机的线性转换） ----------
def convert_body(body, title):
    out, i = [], 0
    para = []
    big = False      # 节大卡（5 冒）
    small = False    # 单元小卡（4 冒）
    section = ['']

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

    def close_cards():
        nonlocal big, small
        flush()
        if small:
            out.append('::::'); out.append(''); small = False
        if big:
            out.append(':::::'); out.append(''); big = False

    def open_unit(t):
        nonlocal big, small
        flush()
        if not big:
            out.append('::::: card'); out.append(''); big = True
        if small:
            out.append('::::'); out.append(''); small = False
        out.append(':::: card'); out.append('')
        out.append(f'**{H3_EMOJI.get(t, H2_EMOJI.get(section[0], "✨"))} {t}**'); out.append('')
        small = True

    def subhead(t):
        nonlocal big
        flush()
        if not big:
            out.append('::::: card'); out.append(''); big = True
        em = H3_EMOJI.get(t.strip(), '')
        out.append(f'**{em} {t}**' if em else f'**{t}**'); out.append('')

    tmpl_skip = re.compile(r'^\{\{(?:规则文本开始\|[^}]*|规则翻页\|[^}]*|核心规则书\|[^}]*|CR/[A-Z0-9]+)\}\}\s*[　\s]*$')
    lines = body.split('\n')
    while i < len(lines):
        raw = lines[i]; ln = raw.strip()
        if tmpl_skip.match(ln):
            i += 1; continue
        if not ln:
            flush(); i += 1; continue
        m = re.match(r'^(={2,4})(.+?)\1\s*$', ln)
        if m:
            t = inline(m.group(2).strip(), title + '/h')
            lvl = len(m.group(1))
            raw_t = m.group(2).strip()
            if lvl == 2 and raw_t in SECTIONS_EXPECTED:
                close_cards()
                section[0] = raw_t
                out.append(''); out.append('---'); out.append('')
                out.append(f'<a id="{raw_t}"></a>'); out.append('')
                out.append('::: center')
                out.append(f"## **{H2_EMOJI[raw_t]} {raw_t}**")
                out.append(':::'); out.append('')
            elif lvl == 2:
                close_cards()
                open_unit(t)
            elif lvl == 3:
                open_unit(t)
            else:
                subhead(t)
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
        if ln.startswith('<table'):
            flush()
            j = i
            while '</table>' not in lines[j]: j += 1
            out.append(table_to_md('\n'.join(lines[i:j+1]), title)); out.append('')
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
            subhead(m.group(1).strip())
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
        m = re.match(r"^''(.+)''\s*$", ln)
        if m and not ln.startswith("'''''"):
            # 整行斜体=该页的节引言（他页的段落描述同角色）→ tip 容器，板块统一
            flush()
            out.append('::: tip')
            for seg in sent_split(inline(m.group(1).strip(), title + '/lead'), title + '/lead'):
                out.append(seg); out.append('')
            out.append(':::'); out.append('')
            i += 1; continue
        if '{{' in ln or '}}' in ln:
            LOG.append(f'{title} 未消费模板行: {ln[:80]}')
        para.append(inline(ln, title))
        i += 1
    close_cards()
    return '\n'.join(out)

def insert_colossus(text):
    marker = '**🗿 范例巨像**'
    idx = text.find(marker)
    if idx < 0:
        LOG.append('旱土巨像：未找到范例巨像锚')
        return text
    end = idx + len(marker)
    lst = '\n'.join(f'* [{n}]({wikipath(n)})' for n in COLOSSUS_LIST)
    return text[:end] + '\n\n以下范例巨像收录于灰机维基「分类:巨像」，点击名称可查看其数据页：\n\n' + lst + text[end:]

def quickjump():
    cards = [
        ('认识框架', ['背景概述', '社群', '种族', '职业', '玩家守则']),
        ('带团案头', ['游戏主持人守则', '特色设定', '楔子', '战役机制', '第零场问题']),
    ]
    out = ['---', '', '<a id="快速跳转"></a>', '', '::: center',
           '## **⚡ 快速跳转**', '', ':::', '',
           ':::: card-grid', '']
    for head, items in cards:
        out += ['::: card', '', f'**{head}**', '']
        for it in items:
            out.append(f'[{it} {H2_EMOJI[it]}](#{it})'); out.append('')
        out.append(':::'); out.append('')
    out += ['::::', '']
    return '\n'.join(out)

def convert(title, slug):
    src = io.open(f'{LIB}/{title}.txt', encoding='utf-8').read()
    fields, body = parse_infobox(src)
    main = convert_body(body, title)
    main = re.sub(r'\n{3,}', '\n\n', main).strip()
    if title == '旱土巨像':
        main = insert_colossus(main)
    fe = FRAME_EMOJI[title]
    head = [
        '::::: card', '',
        f'**{fe} {title}**', '',
        f'**复杂度**：{fields["复杂度"].strip()}', '',
        f'**作者**：{fields["作者"].strip()}', '',
    ]
    for f in ('简介', '描述'):
        for seg in sent_split(fields[f].strip(), title + '/' + f):
            head.append(seg); head.append('')
    head += ['::: card', '', '**🏷️ 档案**', '']
    for f in ('氛围', '主题', '灵感'):
        head.append(f'**{f}**：{fields[f].strip()}'); head.append('')
    head += [':::', '', ':::::']
    now = datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S')
    page = (f'---\ntitle: {title}\ncreateTime: {now}\n---\n\n'
            + '\n'.join(head) + '\n\n' + quickjump() + '\n' + main + '\n')
    while '\n\n\n' in page: page = page.replace('\n\n\n', '\n\n')
    body_crlf = page.replace('\r\n', '\n').replace('\n', '\r\n')
    os.makedirs(OUT, exist_ok=True)
    with io.open(f'{OUT}/{slug}.md', 'w', encoding='utf-8', newline='') as f:
        f.write(body_crlf)
    h2s = [h for h in re.findall(r'^## (.+)$', page, re.M) if '快速跳转' not in h]
    h2s = [re.sub(r'^\*\*\S+\s', '', h).strip('*') for h in h2s]
    ok = h2s == SECTIONS_EXPECTED
    print(f'{slug}: h2={len(h2s)} 节序{"OK" if ok else "FAIL:" + "|".join(h2s)}')
    return ok

def build_index():
    """简介索引页：框架简介（容器化切割）＋开团六步＋六框架进入卡"""
    hub = io.open(f'{LIB}/战役框架.txt', encoding='utf-8').read()
    cha = io.open(f'{LIB}/战役框架拆解.txt', encoding='utf-8').read()
    strip = re.compile(r'^(?:\{\{(?:规则文本开始|规则翻页|核心规则书|CR/[A-Z0-9]+)[^}]*\}\}|=[^=\n]+?=)\s*[　\s]*$')
    hub_body = '\n'.join(l for l in hub.split('\n') if not strip.match(l.strip()))
    cha_body, cha_close = re.split(r'\n(?=后文展示的战役框架)', '\n'.join(
        l for l in cha.split('\n') if not strip.match(l.strip())), maxsplit=1)
    steps_md = convert_body(cha_body.strip(), '战役框架拆解')
    close_md = '\n\n'.join(f.strip() for f in sent_split(inline(cha_close.strip(), '拆解/尾注'), '拆解/尾注'))

    # 章首按信息块分类 → 各归容器
    lead, note_f, info_f, list_head, bullets, tip_f = [], [], [], '', [], []
    for b in re.split(r'\n\s*\n', hub_body):
        s = b.strip()
        if not s: continue
        if s.startswith('<big>'):
            lead.append('_' + inline(re.sub(r'</?big>', '', s)[2:-2].strip(), 'idx/lead') + '_')
        elif s.startswith('{{提示|'):
            inner = re.sub(r'^\{\{提示\|', '', s); inner = re.sub(r'\}\}\s*$', '', inner)
            parts = [p for p in inner.split('|') if not re.match(r'^\w+=', p)]
            tip_f.append(inline('|'.join(parts).strip(), 'idx/tip'))
        elif s.startswith('*'):
            for ln in s.split('\n'):
                ln = ln.strip().lstrip('*').strip()
                if ln:
                    bullets.append(inline(ln, 'idx/li'))
        elif s.startswith('这些框架提供了') or s.startswith('你可以从后续'):
            note_f.append(inline(s, 'idx/note'))
        elif s.startswith('每个战役框架都包含以下部分'):
            list_head = s.strip().rstrip('。')
        else:
            info_f.append(inline(s, 'idx/info'))

    def emit(lines):
        for f in lines:
            for seg in sent_split(f.strip(), '索引'):
                out_parts.append(seg.strip()); out_parts.append('')

    out_parts = ['::::: card', '', '**🎬 战役框架简介**', ''] + lead + ['']
    out_parts += [':::: note', '']
    emit(note_f)
    out_parts += ['::::', '', ':::: info **⭐ 复杂度评级**', '']
    emit(info_f)
    out_parts += ['::::', '', ':::::']

    out_parts += ['---', '', '<a id="框架构成"></a>', '', '::: center',
                  '## **🧩 框架构成**', ':::', '',
                  ':::: details ' + list_head + '（点击展开）', '']
    for b in bullets:
        out_parts.append('* ' + b); out_parts.append('')
    out_parts += ['::::', '',
                  '---', '', '<a id="框架地图"></a>', '', '::: center',
                  '## **🗺️ 框架地图**', ':::', '',
                  '::: tip']
    for f in tip_f:
        for seg in sent_split(f, '索引/地图'):
            out_parts.append(seg); out_parts.append('')
    out_parts += [':::', '',
                  '---', '', '<a id="开团六步"></a>', '', '::: center',
                  '## **🧭 开团六步**', ':::', '']
    page_head = '\n'.join(out_parts)

    grid = [':::: card-grid', '']
    for t, s in FRAMES:
        f, _ = parse_infobox(io.open(f'{LIB}/{t}.txt', encoding='utf-8').read())
        grid += ['::: card', '',
                 f'**{FRAME_EMOJI[t]} {t} {f["复杂度"].strip()}**', '']
        for seg in sent_split(f['简介'].strip(), t + '/简介'):
            grid.append(seg.strip()); grid.append('')
        grid += [f'[进入框架 →](/rule/dagger_heart/campaign/{s})', '',
                 ':::', '']
    grid += ['::::', '']

    now = datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S')
    page = (f'---\ntitle: 战役框架\ncreateTime: {now}\n---\n\n'
            + page_head + '\n' + steps_md.strip() + '\n\n' + close_md + '\n\n'
            + '---\n\n<a id="六大框架"></a>\n\n::: center\n## **🎬 六大框架**\n:::\n\n'
            + '\n'.join(grid))
    while '\n\n\n' in page: page = page.replace('\n\n\n', '\n\n')
    body_crlf = page.replace('\r\n', '\n').replace('\n', '\r\n')
    os.makedirs(OUT, exist_ok=True)
    with io.open(f'{OUT}/index.md', 'w', encoding='utf-8', newline='') as f:
        f.write(body_crlf)
    h2s = re.findall(r'^## (.+)$', page, re.M)
    print(f'index: h2={h2s} 行数={page.count(chr(10))}')

if __name__ == '__main__':
    allok = True
    for t, s in FRAMES:
        allok = convert(t, s) and allok
    build_index()
    print('残留扫描：')
    for t, s in FRAMES:
        page = io.open(f'{OUT}/{s}.md', encoding='utf-8').read()
        for pat, name in [(r'\{\{', '模板'), (r'\[\[', '双链'), (r'<table', '表格标签'),
                          (r'<ref', 'ref'), (r'&[a-z]+;', '实体'),
                          (r'<(?!br\b|/)(?!table\b)(?!a id=)(\w+)[ />]', '漏处理HTML')]:
            hits = re.findall(pat, page)
            if hits: print(f'  {s}: {name}×{len(hits)}'); allok = False
    print('LOG：')
    for l in LOG: print(' ', l)
    print('ALL_OK' if allok else 'HAS_FAIL')
