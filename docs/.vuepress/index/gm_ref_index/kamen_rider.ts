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
			text: '骑士',
			icon: 'game-icons:bat-mask',
			prefix: 'b_rider',
			collapsed: false,
			items: ['ryuuki', 'geats'],
		},
		{
			text: '杂鱼',
			icon: 'game-icons:ninja-mask',
			prefix: 'd_1_zako',
			collapsed: false,
			items: ['geats_jyamato'],
		},
		{
			text: '干部',
			icon: 'game-icons:devil-mask',
			prefix: 'd_2_kanbu',
			collapsed: false,
			items: ['geats_miraijin'],
		},
		{
			text: '怪兽',
			icon: 'game-icons:mecha-mask',
			prefix: 'd_3_monster',
			collapsed: false,
			items: ['ryuuki_keiyakujyuu'],
		},
		{
			text: '驱动器',
			icon: 'game-icons:belt',
			prefix: 'e_1_driver',
			collapsed: false,
			items: ['ryuuki', 'geats'],
		},
		{
			text: '卡带',
			icon: 'material-symbols:hard-disk-outline',
			prefix: 'e_2_buckle',
			collapsed: false,
			items: ['ryuuki', 'geats'],
		},
	],
});
