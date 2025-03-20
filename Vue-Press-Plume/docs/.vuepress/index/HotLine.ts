import { defineNoteConfig } from 'vuepress-theme-plume'

export const HotLine = defineNoteConfig({
      link: '/guides/hotline/',
      dir: 'hotline',
      sidebar: [
        {
      text: '跑团热线',
      icon: 'mingcute:pray-line',
      collapsed: false,
     items: [
            'help',
             {
                   text: '神官 ー 信観',
                   icon: 'mingcute:pray-line',
                   prefix: 'shinkan42',
                   collapsed: false,
                   items: [
                     'appointment',
                     'contact',
                   ],
                  },
             {
                   text: 'WIP',
                   icon: 'mdi:clock',
                   prefix: 'gm',
                   collapsed: false,
                   items: [
                     'shinkan/index',
                     'chapp/index',
                     'yy/index',
                     'paobudong/index',
                     'v/index',
                   ],
                  },
           
              ],
           },
        ],
})
