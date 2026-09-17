import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '🎲 玩家选项',
	dir: 'rule/dnd_5r/options',
	linkPrefix: '/rule/dnd_5r/options/',
	sidebar: [
		{ text: '🤝 社区资料', link: '/rule/dnd_5r/community/' },
		{ text: '📑 总览索引', link: 'index' },
		{ text: '🗡️ 职业', link: 'class' },
		{ text: '🧝 种族', link: 'race' },
		{ text: '💪 专长', link: 'feat' },
		{ text: '✨ 法术', link: 'spell' },
		{ text: '🎒 物品', link: 'item' },
	],
});
