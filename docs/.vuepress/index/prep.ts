import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '备团',
	linkPrefix: '/prep/',
	dir: 'prep',
	sidebar: [
		'menu/index',
		'menu/dnd_5r',
		{
			text: '🎲 短团',
			collapsed: false,
			items: [],
		},
		{
			text: '📚 短团集',
			collapsed: false,
			items: [
				{
					text: '🏛️ 巨龙迷城',
					items: ['dnd_5r/dragon_delves/index', 'dnd_5r/dragon_delves/bakers_doesnt'],
				},
				{
					text: '🔑 黄金宝库之钥',
					items: ['dnd_5r/kftgv/index', 'dnd_5r/kftgv/reach_for_the_stars', 'dnd_5r/kftgv/party_at_paliset_hall'],
				},
			],
		},
		{
			text: '🎭 长团',
			collapsed: false,
			items: [
				{
					text: '🐉 风骸岛之龙',
					items: ['dnd_5r/dragons_of_stormwrack_isle/index'],
				},
			],
		},
	],
});
