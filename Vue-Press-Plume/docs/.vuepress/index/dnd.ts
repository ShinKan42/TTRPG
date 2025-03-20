import { defineNoteConfig } from 'vuepress-theme-plume'

export const DND = defineNoteConfig({
      link: '/guides/dnd/',
      dir: 'dnd',
      sidebar: [
        {
      text: '新手指南',
      icon: 'icon-park-twotone:guide-board',
      prefix: 'guide',
      collapsed: false,
      items: [
                 'character_creation',
                 'quick_rolls',
                 'roleplay',
                 {
                   text: '战斗规则',
                   icon: 'ri:sword-line',
                   prefix: 'combat',
                   collapsed: true,
                   items: [
                     'turn',
                     'conditions',
                     'spells',
                     'items',
                     'rest',
                   ],
                  },
                 'faq',
               ],
           },
        {
      text: '资料信息',
      icon: 'icon-park-twotone:guide-board',
      collapsed: false,
      items: [
                 {
                   text: '种族',
                   icon: 'material-symbols-light:genetics-rounded',
                   prefix: 'races',
                   collapsed: true,
                   items: [
                     'pdf',
                     'bilibili',
                     'youtube',
                   ],
                  },
                 {
                   text: '背景',
                   icon: 'solar:home-outline',
                   prefix: 'origins',
                   collapsed: true,
                   items: [
                     'pdf',
                     'bilibili',
                     'youtube',
                   ],
                  },
                 {
                   text: '职业',
                   icon: 'ic:outline-hotel-class',
                   prefix: 'classes',
                   collapsed: true,
                   items: [
                     'pdf',
                     'bilibili',
                     'youtube',
                   ],
                  },
                 {
                   text: '专长',
                   icon: 'game-icons:fist',
                   prefix: 'feats',
                   collapsed: true,
                   items: [
                     'pdf',
                     'bilibili',
                     'youtube',
                   ],
                  },
                 {
                   text: '法术精简',
                   icon: 'game-icons:floating-crystal',
                   prefix: 'spells_simplified',
                   collapsed: true,
                   items: [
                     'pdf',
                     'bilibili',
                     'youtube',
                   ],
                  },
               ],
           },
{
      text: '参考信息',
      icon: 'material-symbols:quick-reference-all',
      collapsed: false,
      prefix: 'ref',
      items: [
                 'terms',
                 {
                   text: '法术大全',
                   icon: 'game-icons:crystal-wand',
                   prefix: '嵌入',
                   collapsed: true,
                   items: [
                     'pdf',
                     'bilibili',
                     'youtube',
                   ],
                  },
                 {
                   text: '物品大全',
                   icon: 'game-icons:armor-vest',
                   prefix: '嵌入',
                   collapsed: true,
                   items: [
                     'pdf',
                     'bilibili',
                     'youtube',
                   ],
                  },
                 {
                   text: '其他表格',
                   icon: 'vaadin:form',
                   prefix: '嵌入',
                   collapsed: true,
                   items: [
                     'pdf',
                     'bilibili',
                     'youtube',
                   ],
                  },
                 {
                   text: '神官村规',
                   icon: 'healthicons:village-24px',
                   prefix: '嵌入',
                   collapsed: true,
                   items: [
                     'pdf',
                     'bilibili',
                     'youtube',
                   ],
                  },
               ],
           },

        ],
})
