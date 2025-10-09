import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '模组一览',
	linkPrefix: '/module/menu/',
	dir: 'module/menu',
	sidebar: [
		{
			text: '可选模组',
			icon: 'mingcute:pray-line',
			collapsed: false,
			items: ['shinkan/module'],
		},
		{
			text: '玩家手册-参考信息',
			icon: 'typcn:th-list-outline',
			collapsed: false,
			items: ['shinkan/pl_ref_index'],
		},
		{
			text: '主持资料-剧透慎点！',
			icon: 'jam:triangle-danger-f',
			collapsed: false,
			items: ['shinkan/gm_ref_index'],
		},
	],
});
