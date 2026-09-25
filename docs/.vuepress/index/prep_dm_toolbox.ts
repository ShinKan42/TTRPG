import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '🧰 DM 工具箱',
	dir: 'prep/dm_toolbox',
	linkPrefix: '/prep/dm_toolbox/',
	sidebar: [
		{ text: '总览索引 📑', link: 'index' },
		{
			text: '📐 设计方法',
			prefix: 'methods',
			collapsed: false,
			items: [
				{ text: '设计方法总览 📑', link: 'index' },
				{ text: '旅行事件系统 🧭', link: 'traveling_events' },
			],
		},
		{
			text: '👹 怪物与 NPC',
			prefix: 'monsters',
			collapsed: false,
			items: [{ text: '怪物与 NPC 总览 📑', link: 'index' }],
		},
		{
			text: '🗺️ 冒险与地图',
			prefix: 'adventures',
			collapsed: false,
			items: [{ text: '冒险与地图总览 📑', link: 'index' }],
		},
	],
});
