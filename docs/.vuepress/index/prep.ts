import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '备团',
	linkPrefix: '/prep/',
	dir: 'prep',
	sidebar: [
		'menu/index',
		{
			text: '🐉 奇幻类',
			collapsed: false,
			items: ['menu/dnd_5r'],
		},
		{
			text: '🔑 黄金宝库之钥',
			collapsed: false,
			items: ['dnd_5r/kftgv/index', 'dnd_5r/kftgv/reach_for_the_stars', 'dnd_5r/kftgv/party_at_paliset_hall'],
		},
	],
});
