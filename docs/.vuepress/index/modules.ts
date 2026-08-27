import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '模组一览',
	linkPrefix: '/module/',
	dir: 'module',
	sidebar: [
		'index',
		'collection',
		{
			text: '🐉 奇幻类',
			collapsed: false,
			items: ['dnd_5r', 'dagger_heart'],
		},
		{
			text: '🐙 恐怖类',
			collapsed: false,
			items: ['coc'],
		},
		{
			text: '📡 玩家资料',
			collapsed: false,
			items: [
				{ text: '全球新闻社', link: 'pl_ref/gns' },
				{ text: '瓢虫，瓢虫，飞回家', link: 'pl_ref/ladybug' },
			],
		},
	],
});
