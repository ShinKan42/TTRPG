import { defineNavbarConfig } from 'vuepress-theme-plume';

export const navbar = defineNavbarConfig([
	{
		text: '🕯️ COC',
		items: [
			{ text: '新手指南 📖', link: '/rule/coc/guide/', activeMatch: '^/rule/coc/guide/$|^/rule/coc/guide/(about|character_creation|quick_roll|sanity|combat|faq)' },

			{ text: '资料速查 📚', link: '/rule/coc/guide/tables', activeMatch: '^/rule/coc/guide/tables$|^/rule/coc/guide/(skills|jobs|weapons|madness|equipment|spells|mythos|tomes|artifacts)_table' },

		],
	},
	{
		text: '🗡️ 匕首之心 🚧',
		items: [
			{ text: '新手指南 📖 🚧', link: '/rule/dagger_heart/guide/', activeMatch: '^/rule/dagger_heart/guide/$|^/rule/dagger_heart/guide/(about|character_creation|quick_roll|general_rule|combat|roleplay|faq)' },

			{ text: '简介推荐 ⭐', link: '/rule/dagger_heart/brief_ref/', activeMatch: '^/rule/dagger_heart/brief_ref/' },

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
			{ text: '新手指南 📖', link: '/rule/dnd_5r/guide/', activeMatch: '^/rule/dnd_5r/guide/$|^/rule/dnd_5r/guide/(about|character_creation|quick_roll|roleplay|combat|faq)|^/rule/dnd_5r/class/' },

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
			{ text: '官方资料 📚', link: '/rule/dnd_5r/official/', activeMatch: '^/rule/dnd_5r/official/' },

				{ text: '社区资料 🤝', link: '/rule/dnd_5r/community/', activeMatch: '^/rule/dnd_5r/community/' },

				{
					text: '👤 神官 ー 信観',
					items: [
					{
						text: 'ACG 角色 🎭',
						link: '/rule/dnd_5r/home_brew/acg/',
						activeMatch: '^/rule/dnd_5r/home_brew/acg/',
					},
					{
						text: '通用规则 📜',
						link: '/rule/dnd_5r/home_brew/shinkan_house_rule/',
						activeMatch: '^/rule/dnd_5r/home_brew/shinkan_house_rule/',
					},
					{
						text: '主题规则 📦',
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
				text: '📜 通用村规',
				items: [
					{ text: '塔罗牌 🔮', link: '/about/tarot', activeMatch: '^/about/tarot' },
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
