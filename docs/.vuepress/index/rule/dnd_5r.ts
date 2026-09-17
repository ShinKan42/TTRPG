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
				{ text: '职业选择 🗡️', link: '/rule/dnd_5r/class/guide' },
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
			text: '📚 官方资料',
			prefix: 'official',
			collapsed: false,
			items: [
				{ text: '总览索引 📑', link: 'index' },
				{
					text: '通用规则 📜',
					collapsed: true,
					items: [
						{ text: '三龙牌 🐉', link: 'three_dragon_ante' },
					],
				},
				{
					text: '主题规则 📦',
					collapsed: true,
					items: [
						{ text: '暂无收录', link: 'index#zhuti-guize' },
					],
				},
			],
		},
		{
			text: '🤝 社区资料',
			prefix: 'community',
			collapsed: false,
			items: [
				{ text: '总览索引 📑', link: 'index' },
				{
					text: '通用规则 📜',
					collapsed: true,
					items: [
						{ text: '瞄准攻击 🎯', link: '/rule/dnd_5r/community/targeted_attack' },
					],
				},
				{
					text: '主题规则 📦',
					collapsed: true,
					items: [
						{ text: '暂无收录', link: 'index#zhuti-guize' },
					],
				},
			],
		},
		{
			text: '🎲 玩家选项',
			collapsed: false,
			items: [
				{ text: '总览索引 📑', link: '/rule/dnd_5r/player_option/' },
				{
					text: '职业 🗡️',
					collapsed: true,
					items: [
						{ text: '职业总览', link: '/rule/dnd_5r/player_option/class/' },
					],
				},
				{
					text: '种族 🧝',
					collapsed: true,
					items: [
						{ text: '种族总览', link: '/rule/dnd_5r/player_option/race/' },
					],
				},
				{
					text: '专长 💪',
					collapsed: true,
					items: [
						{ text: '专长总览', link: '/rule/dnd_5r/player_option/feat/' },
					],
				},
				{
					text: '法术 ✨',
					collapsed: true,
					items: [
						{ text: '法术总览', link: '/rule/dnd_5r/player_option/spell/' },
					],
				},
				{
					text: '物品 🎒',
					collapsed: true,
					items: [
						{ text: '物品总览', link: '/rule/dnd_5r/player_option/item/' },
					],
				},
			],
		},
		{
			text: '👤 神官 ー 信観',
			prefix: 'home_brew',
			collapsed: false,
			items: [
				{ text: '总览索引 📑', link: 'index' },
				{
					text: 'ACG 角色 🎭',
					prefix: 'acg',
					collapsed: true,
					items: [
						{ text: 'Madoka Magica ⭐', link: 'madoka_magica' },
						{ text: '1999 🎯', link: '1999' },
					],
				},
				{
					text: '通用规则 📜',
					prefix: 'shinkan_house_rule',
					collapsed: true,
					items: [
						{ text: 'Dungeon Meshi 🍳', link: 'dungeon_meshi' },
					],
				},
				{
					text: '主题规则 📦',
					prefix: 'shinkan_dlc',
					collapsed: true,
					items: [
						{ text: 'Kamen Rider 🦊', link: 'kamen_rider' },
					],
				},
			],
		},
	],
});
