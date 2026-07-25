import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: 'DND-5R',
	linkPrefix: '/rule/dnd_5r/',
	dir: 'rule/dnd_5r',
	sidebar: [
		{
			text: '📖 新手指南',
			prefix: 'guide',
			collapsed: false,
			items: [
				{ text: 'DND 怎么玩 ❔', link: 'about' },
				{ text: '车卡指南 📖', link: 'character_creation' },
				{ text: '常用骰法 🎲', link: 'quick_roll' },
				{ text: '扮演 🎭', link: 'roleplay' },
				{ text: '战斗 ⚔️', link: 'combat' },
				{ text: '常见问题 ❓', link: 'faq' },
			],
		},
		{
			text: '🔗 资料站跳转',
			collapsed: false,
			items: [
				{ text: '职业 🗡️', link: 'https://5e.kiwee.top/classes.html' },
				{ text: '种族 🧝', link: 'https://5e.kiwee.top/races.html' },
				{ text: '专长 💪', link: 'https://5e.kiwee.top/feats.html' },
				{ text: '法术 ✨', link: 'https://5e.kiwee.top/spells.html' },
				{ text: '物品 🎒', link: 'https://5e.kiwee.top/items.html' },
				{ text: '据点 🏰', link: 'https://5e.kiwee.top/book.html#xdmg' },
				{ text: '不全书 📖', link: 'https://5echm.kagangtuya.top/' },
			],
		},
		{
			text: '👤 神官 ー 信観',
			collapsed: false,
			prefix: 'home_brew',
			items: [
				{
					text: 'ACG 角色 🎭',
					prefix: 'acg',
					collapsed: true,
					items: ['index', 'madoka_magica', '1999'],
				},
				{
					text: '村规 📜',
					prefix: 'shinkan_house_rule',
					collapsed: true,
					items: [
						'index',
						{ text: '塔罗牌 🔮', link: 'https://5e.kiwee.top/decks.html#%e5%a1%94%e7%bd%97%e7%89%8c_td' },
						'dungeon_meshi',
					],
				},
				{
					text: 'DLC 📦',
					prefix: 'shinkan_dlc',
					collapsed: true,
					items: ['index', 'kamen_rider'],
				},
			],
		},
	],
});
