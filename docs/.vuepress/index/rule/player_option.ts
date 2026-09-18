import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '🎲 玩家选项',
	dir: 'rule/dnd_5r/player_option',
	linkPrefix: '/rule/dnd_5r/player_option/',
	sidebar: [
		{ text: '📑 总览索引', link: 'index' },
		{
			text: '🎭 ACG 角色',
			prefix: 'acg',
			collapsed: false,
			items: [
				{ text: '⭐ Madoka Magica', link: 'madoka_magica' },
				{ text: '🎯 1999', link: '1999' },
			],
		},
	],
});
