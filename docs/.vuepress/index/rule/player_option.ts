import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	// DND 5R 的玩家选项 collection（区别于其他规则集的同名 ts）
	title: '🎲 玩家选项',
	dir: 'rule/dnd_5r/player_option',
	linkPrefix: '/rule/dnd_5r/player_option/',
	sidebar: [
		{ text: '总览索引 📑', link: 'index' },
		{
			text: '🗡️ 职业',
			collapsed: true,
			items: [{ text: '暂无收录', link: 'index#zhiye' }],
		},
		{
			text: '🧝 种族',
			collapsed: true,
			items: [{ text: '暂无收录', link: 'index#zhongzu' }],
		},
		{
			text: '💪 专长',
			collapsed: true,
			items: [{ text: '暂无收录', link: 'index#zhuanchang' }],
		},
		{
			text: '✨ 法术',
			collapsed: true,
			items: [{ text: '暂无收录', link: 'index#fashu' }],
		},
		{
			text: '🎒 物品',
			collapsed: true,
			items: [{ text: '暂无收录', link: 'index#wupin' }],
		},
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
