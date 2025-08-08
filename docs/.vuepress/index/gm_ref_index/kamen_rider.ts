import { defineNoteConfig } from 'vuepress-theme-plume';

export const GM_Kamen_Rider = defineNoteConfig({
	link: '/module/gm_ref/kamen_rider/',
	dir: 'module/gm_ref/kamen_rider',
	sidebar: [
		{
			text: '框架规则',
			icon: 'hugeicons:structure-03',
			collapsed: false,
			items: [
				'general',
				{
					text: '欲望大奖赛',
					icon: 'game-icons:belt-armor',
					prefix: '1_dgp',
					collapsed: false,
					items: ['desire_grand_prix', 'ryuuki_meworld'],
				},
			],
		},
		{
			text: '腰带 & 卡带',
			icon: 'game-icons:belt',
			prefix: 'e_driver',
			collapsed: false,
			items: ['ryuuki', 'geats', 'saber'],
		},
		{
			text: '骑士',
			icon: 'game-icons:bat-mask',
			prefix: 'b_rider',
			collapsed: false,
			items: ['ryuuki', 'geats'],
		},
		{
			text: '怪人',
			icon: 'game-icons:devil-mask',
			prefix: 'd_kaijin',
			collapsed: false,
			items: ['ryuuki', 'geats'],
		},
	],
});
