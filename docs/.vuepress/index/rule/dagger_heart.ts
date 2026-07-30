import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '匕首之心 🚧',
	linkPrefix: '/rule/dagger_heart/',
	dir: 'rule/dagger_heart',
	sidebar: [
		{
			text: '📖 新手指南 🚧',
			prefix: 'guide',
			collapsed: false,
			items: [
				'about',
				'character_creation',
				'quick_roll',
				'general_rule',
				'roleplay',
				'faq',
			],
		},
		{
			text: '🔗 资料站跳转 🚧',
			collapsed: false,
			items: [
				{ text: '规则速查 ⚡', link: 'https://daggerheart.huijiwiki.com/wiki/%E8%A7%84%E5%88%99%E9%80%9F%E6%9F%A5' },
				{ text: '职业 🗡️', link: 'https://daggerheart.huijiwiki.com/wiki/%E5%88%86%E7%B1%BB:%E8%81%8C%E4%B8%9A' },
				{ text: '种族 🧝', link: 'https://daggerheart.huijiwiki.com/wiki/%E5%88%86%E7%B1%BB:%E7%A7%8D%E6%97%8F' },
				{ text: '社群 🏘️', link: 'https://daggerheart.huijiwiki.com/wiki/%E5%88%86%E7%B1%BB:%E7%A4%BE%E7%BE%A4' },
				{ text: '领域 📜', link: 'https://daggerheart.huijiwiki.com/wiki/%E9%A2%86%E5%9F%9F%E5%8D%A1' },
				{ text: '装备 🎒', link: 'https://daggerheart.huijiwiki.com/wiki/%E8%A3%85%E5%A4%87' },
			],
		},
		{
			text: '🎬 战役框架 🚧',
			collapsed: false,
			items: [
				{ text: '官方 📖', link: 'https://daggerheart.huijiwiki.com/wiki/%E6%88%98%E5%BD%B9%E6%A1%86%E6%9E%B6' },
				{ text: '社区 🤝', link: 'https://www.daggerheart.com/wp-content/uploads/2025/07/Daggerheart-Homebrew-Kit-v1.0-July-31-2025.pdf' },
				{ text: '神官自制 👤 🚧', link: '/rule/dagger_heart/home_brew/' },
			],
		},
	],
});
