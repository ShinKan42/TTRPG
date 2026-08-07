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
			text: '📖 职业选择 🗡️',
			collapsed: false,
			prefix: 'class',
			items: [
				{ text: '选择思路 💭', link: 'guide' },
				{
					text: '⚔️ 战士组',
					collapsed: true,
					items: [
						{ text: '野蛮人 🪓', link: 'https://5e.kiwee.top/classes.html#野蛮人_phb%2724' },
						{ text: '战士 ⚔️', link: 'https://5e.kiwee.top/classes.html#战士_phb%2724' },
						{ text: '武僧 🥋', link: 'https://5e.kiwee.top/classes.html#武僧_phb%2724' },
						{ text: '圣武士 🛡️', link: 'https://5e.kiwee.top/classes.html#圣武士_phb%2724' },
					],
				},
				{
					text: '🎯 专家组',
					collapsed: true,
					items: [
						{ text: '吟游诗人 🎵', link: 'https://5e.kiwee.top/classes.html#吟游诗人_phb%2724' },
						{ text: '游侠 🏹', link: 'https://5e.kiwee.top/classes.html#游侠_phb%2724' },
						{ text: '游荡者 🔪', link: 'https://5e.kiwee.top/classes.html#游荡者_phb%2724' },
					],
				},
				{
					text: '🔮 法师组',
					collapsed: true,
					items: [
						{ text: '术士 🔮', link: 'https://5e.kiwee.top/classes.html#术士_phb%2724' },
						{ text: '魔契师 👁️', link: 'https://5e.kiwee.top/classes.html#魔契师_phb%2724' },
						{ text: '法师 📖', link: 'https://5e.kiwee.top/classes.html#法师_phb%2724' },
					],
				},
				{
					text: '⛪ 神术组',
					collapsed: true,
					items: [
						{ text: '牧师 ⛪', link: 'https://5e.kiwee.top/classes.html#牧师_phb%2724' },
						{ text: '德鲁伊 🌿', link: 'https://5e.kiwee.top/classes.html#德鲁伊_phb%2724' },
					],
				},
				{ text: '⚙️ 奇械师', link: 'https://5e.kiwee.top/classes.html#奇械师_tce' },
			],
		},
		{
			text: '🔗 资料站跳转',
			collapsed: false,
			items: [
				{ text: '种族 🧝', link: 'https://5e.kiwee.top/races.html' },
				{ text: '专长 💪', link: 'https://5e.kiwee.top/feats.html' },
				{ text: '法术 ✨', link: 'https://5e.kiwee.top/spells.html' },
				{ text: '物品 🎒', link: 'https://5e.kiwee.top/items.html' },
				{ text: '据点 🏰', link: 'https://5e.kiwee.top/book.html#xdmg' },
				{ text: '不全书 📖', link: 'https://5echm.kagangtuya.top/' },
			],
		},
		{
			text: '📚 更多资料',
			collapsed: false,
			items: [
				{
					text: '官方资料 📖',
					prefix: 'official',
					collapsed: true,
					items: [
						{ text: '三龙牌 🐉', link: 'three_dragon_ante' },
					],
				},
				{
					text: '社区资料 🤝 🚧',
					collapsed: true,
					items: [],
				},
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