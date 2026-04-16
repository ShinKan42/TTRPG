import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '模组一览',
	linkPrefix: '/module/',
	dir: 'module',
	sidebar: [
		{
			text: '模组介绍-约团挑选',
			icon: 'foundation:magnifying-glass',
			prefix: 'menu',
			collapsed: false,
			items: [
				'index',
				{
					text: '奇幻类',
					icon: 'game-icons:magic-broom',
					collapsed: false,
					items: ['dnd_5r'],
				},
			],
		},
		{
			text: '玩家手册-参考信息',
			icon: 'typcn:th-list-outline',
			prefix: 'pl_ref',
			collapsed: false,
			items: ['index'],
		},
		{
			text: '主持指南-剧透慎点',
			icon: 'jam:triangle-danger-f',
			prefix: 'gm_ref',
			collapsed: false,
			items: ['index'],
		},
	],
});
