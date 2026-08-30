import { defineNavbarConfig } from 'vuepress-theme-plume';

export const navbar = defineNavbarConfig([
	{
		text: '🕯️ COC',
		items: [
			{
				text: '📖 新手指南',
				items: [
					{
						text: 'COC 怎么玩 ❔',
						link: '/rule/coc/guide/about',
						activeMatch: '^/rule/coc/guide/about',
					},
					{
						text: '车卡指南 📖',
						link: '/rule/coc/guide/character_creation',
						activeMatch: '^/rule/coc/guide/character_creation',
					},
					{
						text: '常用骰法 🎲',
						link: '/rule/coc/guide/quick_roll',
						activeMatch: '^/rule/coc/guide/quick_roll',
					},
					{
						text: '理智与疯狂 🧠',
						link: '/rule/coc/guide/sanity',
						activeMatch: '^/rule/coc/guide/sanity',
					},
					{
						text: '战斗 ⚔️',
						link: '/rule/coc/guide/combat',
						activeMatch: '^/rule/coc/guide/combat',
					},
					{
						text: '常见问题 ❓',
						link: '/rule/coc/guide/faq',
						activeMatch: '^/rule/coc/guide/faq',
					},
				],
			},
			{
				text: '📚 资料速查',
				items: [
					{
						text: '技能表 📋',
						link: '/rule/coc/guide/skills_table',
						activeMatch: '^/rule/coc/guide/skills_table',
					},
					{
						text: '职业表 🎓',
						link: '/rule/coc/guide/jobs_table',
						activeMatch: '^/rule/coc/guide/jobs_table',
					},
					{
						text: '武器表 🔫',
						link: '/rule/coc/guide/weapons_table',
						activeMatch: '^/rule/coc/guide/weapons_table',
					},
					{
						text: '疯狂表 🤪',
						link: '/rule/coc/guide/madness_table',
						activeMatch: '^/rule/coc/guide/madness_table',
					},
					{
						text: '装备表 🎒',
						link: '/rule/coc/guide/equipment_table',
						activeMatch: '^/rule/coc/guide/equipment_table',
					},
					{
						text: '法术表 📜',
						link: '/rule/coc/guide/spells_table',
						activeMatch: '^/rule/coc/guide/spells_table',
					},
					{
						text: '神话图鉴 👁️',
						link: '/rule/coc/guide/mythos_table',
						activeMatch: '^/rule/coc/guide/mythos_table',
					},
					{
						text: '神话典籍 📚',
						link: '/rule/coc/guide/tomes_table',
						activeMatch: '^/rule/coc/guide/tomes_table',
					},
					{
						text: '神话造物 🔮',
						link: '/rule/coc/guide/artifacts_table',
						activeMatch: '^/rule/coc/guide/artifacts_table',
					},
					],
			},
		],
	},
	{
		text: '🗡️ 匕首之心 🚧',
		items: [
			{
				text: '📖 新手指南 🚧',
				items: [
					{ text: '匕首之心怎么玩 ❔', link: '/rule/dagger_heart/guide/about', activeMatch: '^/rule/dagger_heart/guide/about' },
					{ text: '车卡指南 📖', link: '/rule/dagger_heart/guide/character_creation', activeMatch: '^/rule/dagger_heart/guide/character_creation' },
					{ text: '常用骰法 🎲', link: '/rule/dagger_heart/guide/quick_roll', activeMatch: '^/rule/dagger_heart/guide/quick_roll' },
					{ text: '基础规则 📚', link: '/rule/dagger_heart/guide/general_rule', activeMatch: '^/rule/dagger_heart/guide/general_rule' },
					{ text: '扮演 🎭', link: '/rule/dagger_heart/guide/roleplay', activeMatch: '^/rule/dagger_heart/guide/roleplay' },
					{ text: '常见问题 ❓', link: '/rule/dagger_heart/guide/faq', activeMatch: '^/rule/dagger_heart/guide/faq' },
				],
			},
			{
				text: '🔗 资料站跳转 🚧',
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
				items: [
					{ text: '官方 📖', link: 'https://daggerheart.huijiwiki.com/wiki/%E6%88%98%E5%BD%B9%E6%A1%86%E6%9E%B6' },
					{ text: '社区 🤝', link: 'https://www.daggerheart.com/wp-content/uploads/2025/07/Daggerheart-Homebrew-Kit-v1.0-July-31-2025.pdf' },
					{ text: '神官自制 👤 🚧', link: '/rule/dagger_heart/home_brew/', activeMatch: '^/rule/dagger_heart/home_brew/' },
				],
			},
		],
	},
	{
		text: '🔮 DND-5R',
		items: [
			{
				text: '📖 新手指南',
				items: [
					{
						text: 'DND 怎么玩 ❔',
						link: '/rule/dnd_5r/guide/about',
						activeMatch: '^/rule/dnd_5r/guide/about',
					},
					{
						text: '职业选择 🗡️',
						link: '/rule/dnd_5r/class/guide',
						activeMatch: '^/rule/dnd_5r/class/',
					},
					{
						text: '车卡指南 📖',
						link: '/rule/dnd_5r/guide/character_creation',
						activeMatch: '^/rule/dnd_5r/guide/character_creation',
					},
					{
						text: '常用骰法 🎲',
						link: '/rule/dnd_5r/guide/quick_roll',
						activeMatch: '^/rule/dnd_5r/guide/quick_roll',
					},
					{
						text: '扮演 🎭',
						link: '/rule/dnd_5r/guide/roleplay',
						activeMatch: '^/rule/dnd_5r/guide/roleplay',
					},
					{
						text: '战斗 ⚔️',
						link: '/rule/dnd_5r/guide/combat',
						activeMatch: '^/rule/dnd_5r/guide/combat',
					},
					{
						text: '常见问题 ❓',
						link: '/rule/dnd_5r/guide/faq',
						activeMatch: '^/rule/dnd_5r/guide/faq',
					},
				],
			},
			{
				text: '🔗 资料站跳转',
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
					text: '📚 更多资料',
					items: [
						{
							text: '官方资料 📖',
							link: '/rule/dnd_5r/official/',
							activeMatch: '^/rule/dnd_5r/official/',
						},
						{
							text: '社区资料 🤝 🚧',
							link: '/rule/dnd_5r/community/',
							activeMatch: '^/rule/dnd_5r/community/',
						},
					],
				},
				{
					text: '👤 神官 ー 信観',
					items: [
					{
						text: 'ACG 角色 🎭',
						link: '/rule/dnd_5r/home_brew/acg/',
						activeMatch: '^/rule/dnd_5r/home_brew/acg/',
					},
					{
						text: '村规 📜',
						link: '/rule/dnd_5r/home_brew/shinkan_house_rule/',
						activeMatch: '^/rule/dnd_5r/home_brew/shinkan_house_rule/',
					},
					{
						text: 'DLC 📦',
						link: '/rule/dnd_5r/home_brew/shinkan_dlc/',
						activeMatch: '^/rule/dnd_5r/home_brew/shinkan_dlc/',
					},
				],
			},
		],
	},
	{
		text: '🖲️赛博朋克：红🚧',
		items: [
			{
				text: '🚧',
				items: [
					{ text: '🚧', link: '/dnd_5r/', activeMatch: '^/dnd_5r/' },
					{ text: '🚧', link: '/dnd_5r/', activeMatch: '^/dnd_5r/' },
				],
			},
			{ text: '🚧', items: ['🚧', '🚧'] },
		],
	},
	{
		text: '📚更多规则',
		items: [
			{
				text: '轻量',
				items: [
					{
						text: 'FATE ⚖️',
						badge: '泛用',
						link: '/rule/misc/fate',
						activeMatch: '^/rule/misc/fate',
					},
								{
					text: '魔法猫猫🚧',
					link: '/dnd_5r/',
					activeMatch: '^/dnd_5r/',
					},
				],
			},
			{
				text: 'IP 主题',
				items: [
					{
					text: '降世神通🚧',
					link: '/dnd_5r/',
					activeMatch: '^/dnd_5r/',
					},
					{ text: '沙丘🚧', link: '/dnd_5r/', activeMatch: '^/dnd_5r/' },
				],
			},
		],
	},
	{
		text: '🎲 挑选模组',
		items: [
			{ text: '快速选择 ⚡', link: '/module/', activeMatch: '^/module/$' },
			{ text: '模组挑选总索引 📋', link: '/module/collection', activeMatch: '^/module/collection' },
			{
				text: '🐉 奇幻类',
				items: [
					{ text: '龙与地下城 5 版 2024 🔮', link: '/module/dnd_5r', activeMatch: '^/module/dnd_5r' },
				],
			},
			{
				text: '🐙 恐怖类',
				items: [
					{ text: '克苏鲁的呼唤 🐙', link: '/module/coc', activeMatch: '^/module/coc' },
				],
			},
		],
	},
	{
		text: '📜团记',
		link: '/log/',
		activeMatch: '^/log/',
	},

	{
		text: 'ℹ️ 关于',
		items: [
			{
				text: '🤝 约团相关',
				items: [
					{ text: '联系方式 📮', link: '/about/contact', activeMatch: '^/about/contact' },
					{ text: '约团方式 📅', link: '/about/appointment', activeMatch: '^/about/appointment' },
					{ text: '跑团怎么玩 ❔', link: '/about/preparation', activeMatch: '^/about/preparation' },
				],
			},
			{
				text: '🎧 资源资料',
				items: [
					{ text: '背景音乐 🎵', link: '/about/ref/bgm', activeMatch: '^/about/ref/bgm' },
					{ text: '实用音效 🔊', link: '/about/ref/sfx', activeMatch: '^/about/ref/sfx' },
				],
			},
			{
				text: '📋 主持备团',
				items: [
					{ text: '案卷总索引 📋', link: '/prep/menu/', activeMatch: '^/prep/menu/$' },
					{
						text: '🐉 奇幻类',
						items: [
							{ text: '龙与地下城 5 版 2024 🔮', link: '/prep/menu/dnd_5r', activeMatch: '^/prep/menu/dnd_5r' },
						],
					},
					{
						text: '🐙 恐怖类',
						items: [
							{ text: '克苏鲁的呼唤 🐙', link: '/prep/menu/coc', activeMatch: '^/prep/menu/coc' },
						],
					},
				],
			},
		],
	},
]);
