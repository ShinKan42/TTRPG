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
		{
			text: '📚 资料速查',
			prefix: 'guide',
			collapsed: false,
			items: [
				{ text: '技能表 📋', link: 'skills_table' },
				{ text: '职业表 🎓', link: 'jobs_table' },
				{ text: '武器表 🔫', link: 'weapons_table' },
				{ text: '疯狂表 🤪', link: 'madness_table' },
				{ text: '装备表 🎒', link: 'equipment_table' },
				{ text: '法术表 📜', link: 'spells_table' },
				{ text: '神话图鉴 👁️', link: 'mythos_table' },
			],
		},
	],
});
