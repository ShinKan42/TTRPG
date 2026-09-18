import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '🎲 玩家选项',
	dir: 'rule/dnd_5r/player_option',
	linkPrefix: '/rule/dnd_5r/player_option/',
	sidebar: [
		{ text: '📑 总览索引', link: 'index' },
		{
			text: '🗡️ 职业',
			prefix: 'class',
			collapsed: false,
			items: [{ text: '职业总览 📑', link: 'index' }],
		},
		{
			text: '🧝 种族',
			prefix: 'race',
			collapsed: false,
			items: [{ text: '种族总览 📑', link: 'index' }],
		},
		{
			text: '💪 专长',
			prefix: 'feat',
			collapsed: false,
			items: [{ text: '专长总览 📑', link: 'index' }],
		},
		{
			text: '✨ 法术',
			prefix: 'spell',
			collapsed: false,
			items: [{ text: '法术总览 📑', link: 'index' }],
		},
		{
			text: '🎒 物品',
			prefix: 'item',
			collapsed: false,
			items: [{ text: '物品总览 📑', link: 'index' }],
		},
		{
			text: '🎭 ACG 角色',
			prefix: 'acg',
			collapsed: false,
			items: [{ text: 'ACG 总览 📑', link: 'index' }],
		},
	],
});
