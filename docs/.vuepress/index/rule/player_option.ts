import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '🎲 玩家选项',
	dir: 'rule/dnd_5r/player_option',
	linkPrefix: '/rule/dnd_5r/player_option/',
	sidebar: [
		{ text: '📑 总览索引', link: 'index' },
		{ text: '🗡️ 职业', prefix: 'class', collapsed: false },
		{ text: '🧝 种族', prefix: 'race', collapsed: false },
		{ text: '💪 专长', prefix: 'feat', collapsed: false },
		{ text: '✨ 法术', prefix: 'spell', collapsed: false },
		{ text: '🎒 物品', prefix: 'item', collapsed: false },
	],
});
