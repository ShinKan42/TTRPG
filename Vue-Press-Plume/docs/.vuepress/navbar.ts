import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
      {
        text: 'DND', items: [
          {text: '新手指南', items: [
               {text: '车卡指南', link:'/guides/dnd/guide/character_creation', activeMatch: '^/guides/dnd/guide/character_creation'},
               {text: '常用骰法', link:'/guides/dnd/guide/quick_rolls', activeMatch: '^/guides/dnd/guide/quick_rolls'},
               {text: '扮演规则', link:'/guides/dnd/guide/roleplay', activeMatch: '^/guides/dnd/guide/roleplay'},
               {text: '战斗规则', link:'/guides/dnd/guide/combat/turn', activeMatch: '^/guides/dnd/guide/combat/'}],},
          {text: '资料信息', items: [
               {text: '职业', link:'/guides/dnd/data/classes/', activeMatch: '^/guides/dnd/data/classes/'},
               {text: '法术', link:'/guides/dnd/data/spells/', activeMatch: '^/guides/dnd/data/spells/'},
               {text: '种族', link:'/guides/dnd/data/races/', activeMatch: '^/guides/dnd/data/races/'},
               {text: '背景', link:'/guides/dnd/data/origins/', activeMatch: '^/guides/dnd/data/origins/'},
               {text: '装备', link:'/guides/dnd/data/feats/', activeMatch: '^/guides/dnd/data/equipments/'}],},
          {text: '其他资料', items: [
               {text: 'ACG角色', link:'/guides/dnd/ref/acg_characters/', activeMatch: '^/guides/dnd/ref/acg_characters/'},
               {text: '参考链接', link:'/guides/dnd/ref/links', activeMatch: '^/guides/dnd/ref/links'},
               {text: '神官村规', link:'/guides/dnd/ref/shinkan42/', activeMatch: '^/guides/dnd/ref/shinkan42/'}],},
        ],
      },
       {
        text: '赛博朋克', items: [
          {text: 'WIP', items: [
               {text: 'WIP', link:'/guides/dnd/', activeMatch: '^/guides/dnd/'},
               {text: 'WIP', link:'/guides/dnd/', activeMatch: '^/guides/dnd/'}],},
          {text: 'WIP', items: ['WIP', 'WIP'],},
        ],
      },
       {
        text: '轻量规则', items: [
               {text: '池（WIP）', link:'/guides/dnd/', activeMatch: '^/guides/dnd/'},
               {text: 'COC（WIP）', link:'/guides/dnd/', activeMatch: '^/guides/dnd/'},
               {text: '魔法猫猫（WIP）', link:'/guides/dnd/', activeMatch: '^/guides/dnd/'},
               {text: '降世神通（WIP）', link:'/guides/dnd/', activeMatch: '^/guides/dnd/'},
        ],
      },
       {
        text: '模组浏览', items: [
          {text: '总览列表',icon: 'solar:pin-list-bold', link:'/guides/modules/index', activeMatch: '^/guides/modules/index'},
          {text: '长度分类',icon:'mdi:clock', items: [
               {text: '短团',icon:'icon-park-solid:one-key', link:'/guides/modules/scale/short/index', activeMatch: '^/guides/modules/scale/short/'},
               {text: '中团',icon:'icon-park-solid:three-key', link:'/guides/modules/scale/medium/index', activeMatch: '^/guides/modules/scale/medium/'},
               {text: '长团',icon:'icon-park-solid:five-key', link:'/guides/modules/scale/long/index', activeMatch: '^/guides/modules/scale/long/'}],},
          {text: '规则分类',icon:'game-icons:rule-book', items: [
               {text: 'DND',icon:'simple-icons:dungeonsanddragons', link:'/guides/modules/rules/dnd/index', activeMatch: '^/guides/modules/rules/dnd'},
               {text: '赛博朋克',icon:'arcticons:cyberpunk-red-companion', link:'/guides/modules/rules/cyberpunk/index', activeMatch: '^/guides/modules/rules/cyberpunk/'},
               {text: '降世神通',icon:'akar-icons:air', link:'/guides/modules/rules/avatar/index', activeMatch: '^/guides/modules/rules/avatar/'}],},
          {text: '玩家手册',icon: 'game-icons:target-poster', link:'/guides/modules/booklet/index', activeMatch: '^/guides/modules/booklet/'},
        ],
      },

       {text: 'Log', link:'/logs/', activeMatch: '^/logs/'},
      {
        text: '关于', items: [
          {text: '站点指南',icon: 'ep:guide', link:'/guides/hotline/help', activeMatch: '^/guides/hotline/help'},
          {text: '神官 ー 信観', items:  [
          {text: '约团方式',icon: 'streamline:group-meeting-call-solid', link:'/guides/hotline/shinkan42/appointment', activeMatch: '^/guides/hotline/shinkan42/appointment'},
          {text: '联系方式',icon: 'material-symbols:mail-outline', link:'/guides/hotline/shinkan42/contact', activeMatch: '^/guides/hotline/shinkan42/contact'},
        ],},
     ],},
])
