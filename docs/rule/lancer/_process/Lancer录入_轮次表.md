# Lancer（枪骑兵）全套收录 · 轮次表

> 任务：Lancer 跑团规则全套录入网站。DM 裁定（2026-09-25）：全套铺开、全套收录，编排学 DH/DND/赛博朋克红。
> 依据：Lancer 资料庞大且无现成资料站 → 按 COC 定案走本地全收录（无「资料站跳转」段）。
> 素材源：`F:/BaiduSyncdisk/TRPG/规则/Lancer/`（外部库只读）——《枪骑兵》核心规则书 v3.5（408 页中文版）为首选底本；开工用素材抽取进本任务 `_process/素材抽取/`。
> Nav 落点：`📚更多规则` 顶层组 → 新增子类「更多规则」（排「IP 主题」后）→ 叶子条目「枪骑兵 Lancer ⚙️」→ `/rule/lancer/`。

## 栏目设计（轮1 草案，DM 已圈定 2026-09-25「继续」）

```
docs/rule/lancer/
├── index.md                    系统首页：定位＋叙事/机战双层玩法＋总目录卡
├── guide/                      新手指南（学 DND/DH guide 系）
│   ├── about.md                Lancer 怎么玩（书 SECTION 0）
│   ├── character_creation.md   车卡：驾驶员＋机甲构筑（SECTION 1）
│   ├── mission_downtime.md     任务·运作期·休整期（SECTION 2）
│   ├── combat.md               机甲战斗（SECTION 3）
│   └── faq.md                  常见问题（官方规则FAQ.docx）
├── brief_ref/                  资料速查（学 DH brief_ref ＋ COC 本地速查定案）
│   ├── rules.md                规则速查：判定/动作/状态汇总
│   ├── talents.md              天赋全表（SECTION 4）
│   ├── pilot_gear.md           驾驶员装备（SECTION 4）
│   └── license/                牌照库（四大厂商，SECTION 4 汇编主体）
│       ├── ips_n.md            极星船运
│       ├── ssc.md              史密斯-岛野财团
│       ├── horus.md            荷鲁斯
│       └── ha.md               哈里逊兵工厂
├── npcs/                       GM 侧：NPC 图鉴（SECTION 5：构筑/特殊职业/模板）
│   └── index.md（分页随轮长出）
├── setting/                    设定卷（SECTION 6 联盟黄金时代精编）
│   └── index.md（分页随轮长出）
└── _process/                   工序件（本表所在）
```

配套接线：`docs/.vuepress/index/rule/lancer.ts`（defineCollection，显式 sidebar 分组，大类 collapsed:false、小类 true）＋ `index/index.ts` 注册一行 ＋ navbar.ts 加子类（结构树见上）。

范围分期：**首期＝核心规则书 v3.5 全套**；扩展书（长环世界/域指南×4/战斗群/官方模组×6/第三方）列二期批次，核心书落完后另立轮次表。

## 轮次表

| 轮 | 轮型 | 交付物 | 验收标准 | 状态 |
|---|---|---|---|---|
| 轮1 | 设计草案 | 本文件（栏目树＋轮次表＋范围分期） | DM 圈定后才进轮2 | ✅ 已圈定（DM「继续」2026-09-25） |
| 轮2 | 执行·骨架 | lancer.ts＋index.md 首页＋guide/about.md＋轮次表＋素材 | 八门电池全绿＋构建绿＋入库；nav/侧栏镜像对齐在接线轮补验 | ✅ 骨架件入库 ad0ee488（两页门检全绿，build success 28s）；挂起件：navbar 子类＋index/index.ts 注册＋dist 渲染层五步验证＋部署（并行清空后接线轮一并补） |
| 轮3 | 执行·新手指南 | guide/character_creation.md＋mission_downtime.md＋combat.md＋faq.md | 同上＋DM 样板对读（page-authoring 三条款） | - 未开始 |
| 轮4 | 执行·速查·驾驶员侧 | brief_ref/rules.md＋talents.md＋pilot_gear.md | 同上 | - 未开始 |
| 轮5 | 执行·牌照库 I | license/ips_n.md＋ssc.md（机体/武器/系统全量） | 同上＋数据卡形态过 bare_table_scan | - 未开始 |
| 轮6 | 执行·牌照库 II | license/horus.md＋ha.md | 同上 | - 未开始 |
| 轮7 | 执行·GM 侧 | npcs/ 图鉴（构筑/特殊职业/模板） | 同上 | - 未开始 |
| 轮8 | 执行·设定卷 | setting/ 精编页 | 同上 | - 未开始 |
| 轮9 | 加强轮 | writing-humanizer 全量过＋八门电池重跑＋终审自查清单 | 查出问题当场修，修正清单随稿交 | - 未开始 |
| 轮10 | 验收轮 | 终审纪律六步报告（会话内输出） | 等 DM 答复才算结束 | - 未开始 |

执行轮通用纪律：素材抽取进 `_process/素材抽取/` 再动笔；每页带来源注记；sidebar 只挂已存在页面（写完一页挂一页）；叶子 emoji 后置、分组 emoji 前置；Site 文件 CRLF。

## 断点

- **挂起件清单（轮2 尾巴，等 DH 窗清空后一并补）**：①navbar.ts 加子类「更多规则」（排 IP 主题后，叶子「枪骑兵 Lancer ⚙️」→ /rule/lancer/）②index/index.ts 注册 lancer collection ③重新构建＋dist 渲染层五步验证（锚点/vp-card/SSR 正文）④部署链。四件有依赖顺序，一次跑完。
- 2026-09-25 07:57 事故：并行 DH 窗在共享仓做 git 清理，扫走全部未跟踪文件——本任务首轮写就的 index.md/guide/about.md/lancer.ts/轮次表/素材全灭（仅 gitignore 挡住的 .bak 幸存）。处置：全部从会话重写＋当场原子提交入库（ad0ee488），入库后不再怕未跟踪清扫。
- 2026-09-25 08:05：本窗构建（28s success）与并行窗 dev/构建进程争用 dist，dist 被清空且并行窗仍活跃——按部署互斥让路，dist 验证并入挂起件清单，不再单独重试构建。
- 轮3 开工前置：轮2 汇报获 DM 验收答复。
