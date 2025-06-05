---
title: 常用骰法
createTime: 2024/12/19 23:58:22
icon: 'fa-solid:dice-d20'
---

::: center

## **快速跳转**

### **上一步**

[车卡指南](./character_creation)

### **本页**

[投骰方法](#投骰方法)

[角色数据](#角色数据)

[扮演骰点](#扮演骰点)

[战斗骰点](#战斗骰点)

### **下一步**

[常用扮演](./roleplay)

:::

---

::: center

## **投骰方法**

DND 默认使用 D20 进行投骰

### **优势 / 劣势**

`优势`：Advantage， 投 2 次取最高值；

`劣势`：Disadvantage，投 2 次取最低值

`优势` 与 `劣势` 可互相抵消，但不会与自身叠加累计

### **力竭**

`力竭`：Exhaustion，`属性检定`、`攻击检定`、`豁免检定` 都会减去 <Badge type="warning" text="力竭层数 * 2" />

### **大成功 / 大失败**

D20 = 20 为 大成功，视为自动成功 / 暴击

D20 = 1 为 大失败，视为自动失败

## **角色数据**

`熟练加值` Proficiency Bonus = <Badge type="warning" text="角色等级 / 4 + 1" />

### **生命**

`生命` Health Point = <Badge type="warning" text="角色等级 * 体质调整值" /> + <Badge type="danger" text="职业生命骰 * 职业等级" />

`生命骰` Health Dice = <Badge type="danger" text="(职业生命骰 + 体质调整值) * 消耗个数" />

`死亡豁免` Death Saving Throw = <Badge type="danger" text="D20" />

::: flex center

| **D20**   | ****    | ****           |
|:---------:|:-------:|:--------------:|
| **= 20**  | 恢复 1 HP | 触发回血计数归 0      |
| **>= 10** | 记 1 次成功 | 3 次时进入 `昏迷` 状态 |
| **< 10**  | 记 1 次失败 | 3 次时死亡         |
| **= 1**   | 记 1 次失败 | 3 次时死亡         |

:::

::: center

`稳定伤势` Stabilize = <Badge type="danger" text="感知检定（医药）" /> > 10

`治疗药水` Potion of Healing Tier 1-4 = <Badge type="danger" text="2d4 + 2" /> / <Badge type="danger" text="4d4 +4" /> / <Badge type="danger" text="8d4 + 8" /> / <Badge type="danger" text="10d4 + 20" />


### **属性**

`属性检定` Ability Check = <Badge type="danger" text="D20 + （熟练加值） + 属性调整值" />

`豁免检定` Saving Throw = <Badge type="danger" text="D20 + （熟练加值） + 属性调整值" />

---

## **扮演骰点**

### **技能**

`技能检定` Skill = <Badge type="danger" text="D20 + （熟练加值） + 属性调整值" />（实际上，`技能检定` 属于 `属性检定`）

### **负重**

::: flex center

| **生物体型**  | **承载**  | **拖拽/抬起/推动** |
|:---------:|:-------:|:-------------:|
| **微型**    | `力量` x 7.5 lb | `力量` x 15 lb        |
| **小型/中型** | `力量` x 15 lb  | `力量` x 30 lb        |
| **大型**    | `力量` x 30 lb  | `力量` x 60 lb        |
| **巨型**    | `力量` x 60 lb  | `力量` x 120 lb       |
| **超巨型**   | `力量` x 120 lb | `力量` x 240 lb       |

:::

::: center

---

## **战斗骰点**

### **先攻**

`先攻加值` Initiative Modifier = <Badge type="warning" text="敏捷调整值" />

`先攻判定` Roll Initiative = <Badge type="danger" text="D20 + 先攻加值" />

### **物理攻击**

`近战攻击` Melee Attack = <Badge type="danger" text="D20 + （熟练加值) + （力量）调整值" /> VS `护甲等级`

`远程攻击` Ranged Attack = <Badge type="danger" text="D20 + （熟练加值) + （敏捷）调整值" />（投掷则为 `力量`） VS `护甲等级`

`擒抱` / `推撞` Grapple / Shove = <Badge type="warning" text="8 + 熟练加值 + 力量调整值" /> VS `力量` / `敏捷` `豁免检定`

### **法术攻击**

`法术攻击` Spell Attack = <Badge type="danger" text="D20 + 熟练加值 + 施法属性调整值" /> VS `护甲等级`

`豁免难度` Difficulty Class（DC） = <Badge type="warning" text="8 + 熟练加值 + 施法属性调整值" /> VS `豁免检定`

### **防御**

`护甲等级` Armor Class（AC） = <Badge type="warning" text="10 + 防具加值 + 敏捷调整值" />

`半身掩护`：Half Cover，`护甲等级`、`豁免检定` +2

`四分之三掩护`：Three-Quarters Cover，`护甲等级`、`豁免检定` +5

`维持专注` Concentration = <Badge type="warning" text="10" /> / <Badge type="warning" text="伤害 / 2" /> (Max = <Badge type="warning" text="30" />)

### **伤害**

`非法术伤害` Damage = <Badge type="danger" text="伤害骰 + （属性调整值）" />（情况复杂，请当下判断）

`坠落` Fall = <Badge type="danger" text="1d6" /> / 10 ft （Max = <Badge type="danger" text="20d6" /> ）

`燃烧` Burn = <Badge type="danger" text="1d4" /> / 回合

### **跳高 / 跳远**

`跳高` High Jump = 10 ft 助跑 <Badge type="warning" text="3 + 力量属性值" /> ft；无助跑减半；伸手触及 + (1.5 x 身高)

`跳远`Long Jump = 10 ft 助跑 <Badge type="warning" text="力量属性值" /> ft；无助跑减半

:::