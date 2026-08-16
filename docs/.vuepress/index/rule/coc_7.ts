import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: 'COC',
	linkPrefix: '/rule/coc/',
	dir: 'rule/coc',
	sidebar: [
		{
			text: '📖 新手指南',
			prefix: 'guide',
			collapsed: false,
			items: [
				{ text: 'COC 怎么玩 ❔', link: 'about' },
				{ text: '车卡指南 📖', link: 'character_creation' },
				{ text: '常用骰法 🎲', link: 'quick_roll' },
				{ text: '理智与疯狂 🧠', link: 'sanity' },
				{ text: '战斗 ⚔️', link: 'combat' },
				{ text: '常见问题 ❓', link: 'faq' },
			],
		},
	],
});
