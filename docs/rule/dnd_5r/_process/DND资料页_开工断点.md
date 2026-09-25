# DND 资料页开工断点（新会话开工包·经验移植任务）

> 2026-09-25 DM 令：开新会话，「学习本会话经验（DH 匕首之心资料页）同样编辑 DND 的资料页」。本件=开工包。

## 任务定位

给 **dnd_5r** 建资料页族（brief_ref 族形态，骨架律适用域），方法与质量门槛全部照 DH 装备页/领域页这一轮的成熟打法。

## dnd_5r 现状（2026-09-25 盘点）

- 目录：class／community／guide／home_brew／official／player_option——**无 brief_ref 目录**
- 现有样板：`dnd_5r/class/guide.md`（DND 职业选择页＝骨架律钦定活范本，开工先整段实读）
- 源库：`TTRPG/资源库/DND5e`（内容量未盘点，开工第一步先盘点）

## 开工序列（轮1 前）

1. 读法条链：资料选择页骨架律（§二五段骨架/§三查询层腔调/§四对照锚工序）→ 资料页范式 → 样板页 class/guide.md 实读
2. QA 对齐：首个做哪个域（种族？职业已有 guide，是否升格 brief_ref？）、源文版本（DND5e 源库 vs SRD）、页面量级
3. 轮次表（≥5 轮，wheel_table_check.py 机检）→ 设计草案交 DM

## DH 会话经验移植清单（照此执行，勿重新踩坑）

**工具链（一条命令全门）**：
- `python .zcode/skills/vuepress-site-workflow/scripts/gate_battery.py <改动md> --site`——八门（断句/居中/冒数/容器/快速跳转/表格单元格/标题emoji位次/密度），交付部署前必跑

**格式硬法（全部已入骨架律与机检门，违者门拦）**：
- 快速跳转：card-grid 双数卡＋行数对齐；平卡默认、grid 例外（jump_nav_audit 五查）
- 速查表单元格：`**名：**<br>效果` 两段拆行；禁 `****` 四星号（table_cell_scan 两查）
- 标题 emoji 位次：h2 前置／h3 尾置（缺=违例）／h4 无（heading_emoji_check 三查，域=brief_ref）
- 断句律：正文「；」「。」后空行分段；——拼接禁自撰文案（逐字回源区不动）

**工序法**：
- 轮制 ≥5 轮（草案/执行×2/加强/验收），轮次表写 `_process/` 并过 wheel_table_check
- 取源先行：源未到不落盘；逐字对账用**独立解析路径**复核（勿信转换器同源）；数字对勘误文件
- 表格转换走脚本机械生成（HTML 表→markdown，骰式整枚 Badge，格内 <br> 两段）＋全字段独立对源
- 导航三处联动：侧栏叶/navbar 叶/枢纽页「详细资料」链
- 部署：dist 内先 `npx vercel link --yes --project ttrpg` 再 deploy，`Aliased https://ttrpg.shinkan42.art` 行才算数；给 DM 的链接一律主站带 .html
- 批量 replace 后全文复查命中位置；真浏览器 DOM 计数作渲染层证据

## 待 DM 圈的开工 Q（新会话先抛）

1. 首个资料域选哪个（建议：种族——源全、卡量适中、可复用问卷/速查形态）
2. DND 源文以哪版为准（源库 DND5e 目录内容 vs SRD 在线取源）
3. 既有 class/guide.md 与新 brief_ref 族的关系（并存互链 or 迁移）

## 源库盘点结果（2026-09-25 新会话实盘，回写断点）

- `TTRPG/资源库/DND5e/` 实际只有 **pointy_hat 一家**：92 篇英文全文（`source_text/PH*.txt`）＋分类清单（`classification_full.json`，93 条）。
- 玩家选项四类存货：**种族 14／子职 18／物品 2／特化规则 5**（其中 PH031 角色减益已上站）。
- 其余存量：怪物与 NPC 35、主持参考 9、冒险与地图 4、工具箱 3、主题/混合/通用规则 3——均为 DM 向，不在本任务玩家选项域。
- **无官方 SRD 缓存**：官方种族/子职如要建页需在线取源，且与 player_option 收录边界（官方内容 kiwee/不全书已覆盖，不重复收录）相抵——Q2 的「源库 vs SRD」至此有了事实面。
- 上站先例形态：中文**机制重述**＋原文/视频链接＋出处声明（「非官方译本，收到权利人要求即下架」，见 `player_option/tehua/character_maluses.md`）。
- 结构对照：`class/guide.md` 仍是旧序（问卷在简介后）；DH 新律=问卷在简介前，新页按新律走，范本页不动。

## 会话状态

- 2026-09-25 新会话已开工：法条链已读（骨架律/资料页范式/dh-briefref 配方/DH 活范本 blade·community·character_maluses 实读），源库盘点完成，三个开工 Q 已呈 DM。
- **DM 圈定（2026-09-25，原话要义）**：顺序捋顺做——首件=**职业**；与 DH 不同，**专长/法术/物品要多页制（下拉小类分类多个页面），职业/种族一律单页**；页面性质=**抽取常用和推荐的给新手迷茫时保底＋介绍常见流派 BD 和玩法＋让玩家自己选择＋引导看左侧跳转不全书**（全量数据出口=不全书，非全量录入）。
- 轮次表已立并过机检（`资料页族_轮次表.md`，PASS）；轮1 设计草案已呈 DM。
- **DM 二轮圈定（2026-09-25，性质纠正）**：本页不是介绍推荐页，是**基础信息录入页**——5 级以内特性都录入；不用骨架律五段；结构=快速跳转＋每职业 h2＋分区 h3（基础面板〔生命骰、熟练〕/资源表〔5 级为止〕/特性/子职）；子职=每子职第一条特性＋画风描述，**用 tab 录入**；不需要下拉菜单，单页、足够多的 h2。
- **tab 先例已找到**：git 历史 `docs/rule/dnd_5r/data/class/barbarian.md`（commit 2156e0f1，273 行空壳弃件）——语法=`:::: tabs`＋`@tab **子职名**`，注记用 warning/danger 容器（仅供矮人/合作内容两例）；当时因纯手工太累弃坑，本次走脚本机械抽取。
- **源优先级 DM 圈定（2026-09-25 第三轮）**：不全书（5echm.kagangtuya.top，PHB24 中文全量在库可 curl）＞ kiwee ＞ 5etools 自译。已按不全书落库 70 页清单（`TTRPG/资源库/DND5e/bsq_phb24/`，含 _manifest.txt）。
- **轮2 已完成（样板呈审中）**：野蛮人全卡样板落 `Site/docs/rule/dnd_5r/brief_ref/class.md`（快速跳转双卡＋野蛮人 h2 四区 h3＋四道途 @tab）——八门电池 ALL GREEN、逐字对账 PASS（90 源单元零差异）。生成器=`F:/Cache/_llm_tmp/dnd_class_gen.py`，对账器=`dnd_class_verify.py`（会话内临时件，轮3 复用）。
- **工序经验（轮3 批量必读）**：①源站 EdgeOne 盾——批量抓取须 5s+ 间隔、遇盾（响应 2544B 挑战页）冷却 30s 重试，禁连发；②生成器已修的坑：特性标题双形态（FONT/STRONG 嵌套两式）、标题内 `<BR>`、切片须全级收集防吞尾、句后空行分段、卡片闭合冒数=开冒数、跳转链接 emoji 后置、mark 避开粗体/代码邻接；③密度门按卡计（每卡每 100 字 1 mark），mark 走 ==包裹== 零改字。
- **待 DM 圈（样板定型时一并裁）**：①Warlock 译名跟不全书=「魔契师」（站内旧页用「邪术师」，是否统一）；②术士「超魔法选项」/魔契师「魔能祈唤选项」附加页是否录入（选项清单大）；③兼职行已并入基础面板末行、职业画风段未录（只录了 sum 一句话）——形态如需调整样板轮定。
- **操作面两事件（2026-09-25）**：①并行窗在本仓活跃（备团页轮3/轮4 提交中），我的未跟踪 brief_ref/ 曾被其 git 操作清掉一次——已重建并备份仓外（`F:/Cache/_llm_tmp/dnd_page_backup/`，含页面/断点/轮次表三 md），轮3 批量后同样先备份；②commit 被 Mimosa L3 全仓扫描拦截（131 high 全在 TTRPG 旧脚本/归档件，与本页无关，不越权代修）——样板 commit 未落，处置待 DM 裁（如：内容型 md 提交走 --no-verify，或把涉事旧脚本移交专项清置）。
- **术语包裹轮插队（2026-09-25，另一会话执行，交接单）**：DM 点名「DND 和玩家选项页面术语没做好包裹，严肃检查，立法避免」→ 已毕三件：①`player_option/tehua/character_maluses.md` 30 对补裹＋L182 断句随改随修，九门电池 PASS；②`community/index.md` 10 对补裹（并行窗同日新增「为犯罪干杯」卡完好保留），PASS；③立法=术语通道法 v2（硬/软两族＋用法判据五条，正本=排版基底 §三；族表正本=`TTRPG/scripts/term_wrap_dnd5r.py` v2）＋**术语门挂 gate_battery 第九门**（`term_wrap_gate.py`，dnd_5r 域，硬族裸写即拦）。修过三件电池 8 OK/1 FAIL——FAIL=`partner_system.md:119` 容器栈不平衡，系并行窗在建件，非本轮。
- **brief_ref/class.md 让路未动**：06:57 起并行窗批量生成中（本轮实测已 3290 行、十二职业进场），属对方热区。术语工作移交轮3：批量产出须过 v2 术语门，硬族裸写会被拦。生成器两 bug 待修（06:57 版实证）：①特性名断行粗体（「**活力之涌Vitality Surge 。␊␊**」式）；②双特性并进单 h4 头且正文卡在头内（狂战士道途 3级狂怒＋6级无我狂暴合体、无我狂暴正文缺失）。
- **域内硬族存量债（术语门 DRY 2026-09-25，各页交付门会拦，随改随修）**：battlefield_actions 15／heres_to_crime 22／partner_system 31／guide 域 41／class 旧 guide.md 29／official 域 4，共 142 行。前两件属并行窗在建流程；guide/official/旧 guide.md 不属本任务域，是否专项清扫列 P 待 DM 圈。
- **DM 批复 A+B 后的执行与事故（2026-09-25 07:4x，术语会话）**：A（专项清扫）开跑——9 件冷文件 89 行补裹完成、逐行过目裁出 7 处误包并已把守卫修进脚本 v2（SUFFIX_DENY 多字化[感应/员/雇]＋心灵前缀[动摇/与]、回合降软族、`| `表格首列守卫）。**事故：清扫成果未及提交，被并行窗 git 操作整体冲掉**（九件全回裸写态，maluses 首修同难）——并行活跃期的修复必须**当场原子提交**，不能留在工作区。已恢复：maluses 重建 31 对＋原子提交 `f34a87c0`（术语门/断句 PASS）；community/index 修复此前的修复已被并行窗卷入其提交（HEAD 内含，无损）。guide 域/about/combat/roleplay/旧 class guide：**并行窗已接管在跑**（其提交 2dfc13ae 明写「术语门22行反引号(新挂第九门)」，M 列表正是这批文件）——本窗让路不插手；heres_to_crime/partner_system 两件热区债归其交付门拦。B（随改随修）=现行法已立，无需动作。
- **加强轮回执（2026-09-25 08:1x，DM 令「继续，加强」）**：①教训已立法＝**修复即提交律**入根 AGENTS.md §七多窗并行协作款（并行期修复当场原子提交＋show --stat 核对）。②守卫回归 11 例全过（5 误包点放行＋真术语照裹＋软族/表格首列不拦）。③全域债 142→114：heres_to_crime/about/combat 已被并行窗清讫；余下 faq 22／旧 class guide 27／battlefield 15／partner_system 31／character_creation 4／house_rules 6／roleplay 5／official 4——guide 域仍在并行窗活动区（08:08 同秒批量改动实证），本窗继续让路，债由术语门随交付拦。④**提交哈希更正**：上轮汇报的 f34a87c0 被 `reset HEAD~1` 波及撤销，修复内容由并行窗以原信息重提交为 **b7960dd4**（已验 merge-base 祖先在链，单文件 34+/32- 全等）——查本页修复历史认 b7960dd4，不认 f34a87c0。


## 上线态（2026-09-25 08:12 终，职业页首件收官）

- **职业数据页已上线**：https://ttrpg.shinkan42.art/rule/dnd_5r/brief_ref/class.html——12 职业全量：基础面板／资源表（5 级）／特性全录（粗体小节包小卡）／子职 tab（画风+3 级首条特性）／职业资料 details（八职业法术列表+术士超魔法+魔契师魔能祈唤）。侧栏「📚 资料索引→职业 🗡️」组已接线并线上 chunk 验证在位。
- **质量账**：不全书 PHB24 逐字独立对账 12/12 PASS；严格档审计 0 FAIL；密度真补标 553 mark（未用逃生）；构建 dist 验证 Tabs/details/锚点全通（181 锚 0 断）。
- **工具链固化**（后续批次复用）：生成器/组装/对账三件在 `F:/Cache/_llm_tmp/`（dnd_class_gen.py／assemble_page.py／dnd_class_verify.py）；源库=`TTRPG/资源库/DND5e/bsq_phb24/`（70 页全+manifest）。
- **遗留三件**：①邪术师→魔契师全量改：character_maluses 在术语窗热改中挂起（其反引号修复已在 HEAD，译名另换）；团记 Log 直引按照录法不动；②并行 stash `wip-parallel-0805-h3fix-redo` 卷有我的侧栏块——对方 pop 时与在盘重打块撞车，剔除即可；③奇械（Artificer）不在 PHB24 十二职业未录，不全书有页再议。
- **并行教训（全程 3 次目录被清+3 次部署隔离舞+侧栏被 stash 卷走一次）**：未跟踪新页每个关键步骤前先仓外备份（`F:/Cache/_llm_tmp/dnd_page_backup/`＋concurrent_wip_0800/0806）；部署一律走正本一键脚本+隔离舞（备份→检出→部署→恢复→md5 对账，本页 8/8 全 OK）。
