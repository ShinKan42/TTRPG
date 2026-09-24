# -*- coding: utf-8 -*-
"""DH 战役框架逐字对源独立校验：源文(wikitext) vs 产出页(markdown) 文本流比对。
独立解析路径：不复用转换器代码。判定=两路文本块流逐块全等（空白归一）。"""
import io, re, os, sys

LIB = 'TTRPG/资源库/Daggerheart/dh_wiki'
OUT = 'Site/docs/rule/dagger_heart/campaign'
FRAMES = [
    ('秽野之息', 'witherwilds'),
    ('五旗成焰', 'five-banners-burning'),
    ('野兽饭', 'beast-feast'),
    ('暗影纪元', 'age-of-umbra'),
    ('主板', 'motherboard'),
    ('旱土巨像', 'colossus-of-the-drylands'),
]
FIELDS = ['复杂度', '作者', '简介', '描述', '氛围', '主题', '灵感']
SECTIONS_SET = {'背景概述', '社群', '种族', '职业', '玩家守则', '游戏主持人守则',
                '特色设定', '楔子', '战役机制', '第零场问题'}
COLOSSUS = ['“尘海掠空”，波伊', '“巨戕”，埃克力', '“怨煞与她的万千子嗣”，基里尔', '“铡刀”，达克塔戴']
SCAFFOLD = re.compile(r'^\{\{(?:规则文本开始|规则翻页|核心规则书|CR/[A-Z0-9]+)\b[^}]*\}\}\s*[　\s]*$')

def norm(s):
    s = re.sub(r'\s*<br>\s*', '<br>', s)
    s = re.sub(r'\s+', '', s)
    return s

def strip_fmt(s):
    s = re.sub(r'<br\s*/?>', ' <br> ', s)
    s = re.sub(r'\[\[文件:([^|\]]+)(?:\|[^\]]*)?\]\]', r'图：\1（灰机）', s)
    s = re.sub(r'\[\[([^]|]+)(?:\|[^]]+)?\]\]', r'\1', s)
    s = re.sub(r'<ref[^>]*>(.*?)</ref>', lambda m: '（注：' + m.group(1).strip().rstrip('。') + '）', s, flags=re.S)
    s = re.sub(r'\[(https?://[^\s\]]+)\s+([^\]]+)\]', r'\2', s)
    s = re.sub(r'<references\s*/>', '', s)
    s = re.sub(r'<span[^>]*>\s*</span>', '', s)
    s = re.sub(r'</?(?:b|strong|i|em|big|span)(?![a-z])[^>]*>', '', s)
    s = s.replace('&nbsp;', ' ')
    s = s.replace("'''''", '').replace("'''", '').replace("''", '')
    return s

def strip_md(s):
    s = re.sub(r'\[([^\]]+)\]\([^)]*\)', r'\1', s)          # 链接→文字
    s = re.sub(r'\*\*\*(.+?)\*\*\*', r'\1', s)
    s = re.sub(r'\*\*(.+?)\*\*', r'\1', s)
    s = re.sub(r'(?<!\*)\*([^*\n]+?)\*(?!\*)', r'\1', s)
    s = re.sub(r'\\(-)', r'\1', s)                            # \--- 转义还原
    return s

def source_chunks(src):
    """源文 → 有序文本块流 [('h',lvl,txt) | ('t',txt) | ('tip',txt) | ('table',[cells]) | ('img',name) | ('field',k,v)]"""
    chunks = []
    m = re.match(r'\{\{战役框架\n(.*?)\n\}\}', src, re.S)
    body_start = m.end()
    body = m.group(1)
    cur, kv = None, {}
    for ln in body.split('\n'):
        fm = re.match(r'\|(\w+)=(.*)$', ln)
        if fm:
            cur = fm.group(1); kv[cur] = fm.group(2)
        elif cur:
            kv[cur] += '\n' + ln
    chunks.append(('head', norm(kv['标题'].strip())))
    for f in FIELDS:
        chunks.append(('field', f, norm(strip_fmt(kv[f]))))
    lines = src[body_start:].split('\n')
    i = 0
    while i < len(lines):
        ln = lines[i].strip()
        if not ln or SCAFFOLD.match(ln):
            i += 1; continue
        m = re.match(r'^(={2,4})(.+?)\1\s*$', ln)
        if m:
            if len(m.group(1)) == 2 and m.group(2).strip() in SECTIONS_SET:
                chunks.append(('h', 2, norm(strip_fmt(m.group(2)))))
            else:
                chunks.append(('head', norm(strip_fmt(m.group(2)))))
            i += 1; continue
        m = re.match(r'^<b>(.+)</b>$', ln)
        if m:
            chunks.append(('head', norm(strip_fmt(m.group(1))))); i += 1; continue
        m = re.match(r"^(?:<big>)?'''(.+)'''(?:</big>)$", ln)
        if m:
            chunks.append(('head', norm(strip_fmt(m.group(1))))); i += 1; continue
        m = re.match(r"^''(.+)''\s*$", ln)
        if m and not ln.startswith("'''''"):
            # 整行斜体=节引言（转换器按板块统一转 tip）
            chunks.append(('tip', norm(strip_fmt(m.group(1))))); i += 1; continue
        m = re.match(r'^\*(?!\*)(.*)$', ln)
        if m:
            chunks.append(('t', norm(strip_fmt(m.group(1))))); i += 1; continue
        if ln.startswith('<table'):
            j = i
            while '</table>' not in lines[j]: j += 1
            tbl = '\n'.join(lines[i:j+1])
            cells = []
            for r in re.findall(r'<tr[^>]*>(.*?)</tr>', tbl, re.S):
                for kind, c in re.findall(r'<(th|td)[^>]*>(.*?)</\1>', r, re.S):
                    cells.append(norm(strip_fmt(c)))
            chunks.append(('table', cells)); i = j + 1; continue
        m = re.match(r'^\{\{(段落描述|提示|勘误|五级标题)\|(.*)\}\}\s*$', ln, re.S)
        if m:
            inner = m.group(2)
        elif ln.startswith('{{提示|'):
            j = i; buf = [ln]
            while not buf[-1].rstrip().endswith('}}') or buf[-1].rstrip() == '{{提示|':
                j += 1
                if j >= len(lines): break
                buf.append(lines[j].strip())
            inner = '\n'.join(buf)
            inner = re.sub(r'^\{\{提示\|', '', inner)
            inner = re.sub(r'\}\}\s*$', '', inner)
            m = ('x', '提示', inner)
            i = j + 1
            parts = inner.split('|')
            inner = '|'.join(p for p in parts if not re.match(r'^\w+=', p))
            chunks.append(('tip', norm(strip_fmt(inner))))
            continue
        else:
            inner = None
        if m and inner is not None:
            parts = inner.split('|')
            inner = '|'.join(p for p in parts if not re.match(r'^\w+=', p))
            if m[1] == '五级标题':
                chunks.append(('head', norm(strip_fmt(inner))))
            else:
                chunks.append(('tip', norm(strip_fmt(inner))))
            i += 1; continue
        if ln.startswith('{{引用|'):
            j = i; buf = [ln]
            while not buf[-1].rstrip().endswith('}}'):
                j += 1; buf.append(lines[j].strip())
            inner = '\n'.join(buf)
            inner = re.sub(r'^\{\{引用\|', '', inner)
            inner = re.sub(r'\}\}\s*$', '', inner)
            m4 = re.match(r'^标题=([^|]*)\|(.*)$', inner, re.S)
            if m4:
                inner = m4.group(2)
            inner = re.sub(r'^<i><b>示例[:：]?</b></i>', '', inner.strip()).strip()
            chunks.append(('tip', norm(strip_fmt(inner)))); i = j + 1; continue
        m = re.match(r'^\{\{#ask:\[\[分类:巨像\]\]\|sep=<br>\}\}\s*$', ln)
        if m:
            chunks.append(('ask',)); i += 1; continue
        if '{{' in ln:
            print(f'  [源文未消费] {ln[:60]}')
        txt = norm(strip_fmt(ln))
        if txt:
            chunks.append(('t', txt))
        i += 1
    return chunks

def output_chunks(md, title=''):
    """产出页 → 同构文本块流（frontmatter/容器壳/分隔线/导航块剔除；tip 内容成块）"""
    md = re.sub(r'\A---\n.*?\n---\n', '', md, flags=re.S)
    lines = md.split('\n')
    chunks = []
    fieldset = {'复杂度', '作者', '氛围', '主题', '灵感'}
    in_tip = False
    tip_buf = []
    in_qj = False

    def close_tip():
        nonlocal in_tip, tip_buf
        chunks.append(('tip', norm(strip_md(''.join(tip_buf)))))
        in_tip, tip_buf = False, []

    def no_emoji(s):
        return re.sub(r'[\U0001F000-\U0001FAFF\u2300-\u27BF\u2B00-\u2BFF\uFE0F\u200D]', '', s).strip()

    for ln in lines:
        s = ln.strip()
        if re.match(r'^::: tip', s):
            in_tip, tip_buf = True, []
            continue
        if s == ':::' and in_tip:
            close_tip()
            continue
        if re.match(r'^:{3,}', s):
            continue
        if in_tip:
            tip_buf.append(s)
            continue
        if not s:
            continue
        if re.fullmatch(r'-{3,}', s):
            continue
        if s.startswith('<a '):
            continue
        m = re.match(r'^\*\*(.+?)\*\*：(.+)$', s)
        if m and m.group(1) in fieldset:
            chunks.append(('field', m.group(1), norm(strip_md(m.group(2))))); continue
        m = re.match(r'^(#{2,6}) (.+)$', s)
        if m:
            txt = no_emoji(strip_md(m.group(2)))
            if '快速跳转' in txt:
                in_qj = True
                continue
            in_qj = False
            chunks.append(('h', len(m.group(1)), txt)); continue
        if in_qj:
            continue
        if s.startswith('|'):
            cells = [strip_md(c.strip().replace('\\', '')) for c in s.strip('|').split('|')]
            if all(re.match(r'^-+$', c) for c in cells if c):
                continue
            chunks.append(('table', [norm(c) for c in cells])); continue
        if s.startswith('* '):
            chunks.append(('t', norm(strip_md(s[2:])))); continue
        m = re.fullmatch(r'\*\*([^*]+)\*\*', s)
        if m:
            txt = no_emoji(strip_md(m.group(1)))
            if txt == '档案':
                continue
            chunks.append(('head', norm(txt))); continue
        if s.startswith('以下范例巨像收录于'):
            continue
        if s.startswith('（注：') and s.endswith('）'):
            s = s[3:-1]
        chunks.append(('t', norm(strip_md(s)))); continue
    return chunks

def group_runs(stream):
    """连续 t 块合并为一段（吸收断句拆分）"""
    out = []
    for c in stream:
        if c[0] == 't' and out and out[-1][0] == 't':
            out[-1] = ('t', out[-1][1] + c[1])
        else:
            out.append(c)
    return out

def main():
    total_bad = 0
    for title, slug in FRAMES:
        src = io.open(f'{LIB}/{title}.txt', encoding='utf-8').read()
        md = io.open(f'{OUT}/{slug}.md', encoding='utf-8').read().replace('\r\n', '\n')
        A = source_chunks(src)
        B = output_chunks(md)
        # 源侧：('ask') 展开为名单；简介/描述字段=产出页的无标签正文段
        A2 = []
        for c in A:
            if c == ('ask',):
                for n in COLOSSUS: A2.append(('t', norm(n)))
            elif c[0] == 'field' and c[1] in ('简介', '描述'):
                A2.append(('t', c[2]))
            else:
                A2.append(c)
        A2 = group_runs(A2)
        B2 = group_runs(B)
        # 输出侧 markdown 表格逐行成块——相邻表块合并为一张表
        merged = []
        for c in B2:
            if c[0] == 'table' and merged and merged[-1][0] == 'table':
                merged[-1] = ('table', merged[-1][1] + c[1])
            else:
                merged.append(c)
        B2 = merged
        bad = 0
        i = j = 0
        while i < len(A2) and j < len(B2):
            a, b = A2[i], B2[j]
            if a[0] == 'table' and b[0] == 'table':
                ac, bc = a[1], b[1]
                for x, y in zip(ac, bc):
                    if x != y:
                        print(f'  [{slug}] 表格单元格差异:\n    源: {x!r}\n    页: {y!r}'); bad += 1
                if len(ac) != len(bc):
                    print(f'  [{slug}] 表格单元数: 源{len(ac)} vs 页{len(bc)}'); bad += 1
                i += 1; j += 1; continue
            if a != b:
                print(f'  [{slug}] 块#{i}: 源型{a[0]}/页型{b[0]}')
                if a[0] == 't' and b[0] == 't':
                    x, y = a[1], b[1]
                    k = next((k for k in range(min(len(x), len(y))) if x[k] != y[k]), min(len(x), len(y)))
                    print(f'    首异位 {k}: 源[{x[max(0,k-20):k+20]!r}] 页[{y[max(0,k-20):k+20]!r}]')
                else:
                    print(f'    源: {str(a)[:150]}\n    页: {str(b)[:150]}')
                bad += 1
            i += 1; j += 1
        if i < len(A2):
            print(f'  [{slug}] 源侧剩余 {len(A2)-i} 块: ' + ' | '.join(str(x)[:60] for x in A2[i:i+3])); bad += 1
        if j < len(B2):
            print(f'  [{slug}] 页侧剩余 {len(B2)-j} 块: ' + ' | '.join(str(x)[:60] for x in B2[j:j+3])); bad += 1
        status = 'PASS' if bad == 0 else f'FAIL×{bad}'
        print(f'{slug}: 块数 源{len(A2)}/页{len(B2)} -> {status}')
        total_bad += bad
    print('VERIFY_ALL_OK' if total_bad == 0 else f'TOTAL_FAIL={total_bad}')

if __name__ == '__main__':
    main()
