import { defineNavbarConfig } from 'vuepress-theme-plume';

export const navbar = defineNavbarConfig([
	{
		text: 'COC',
		items: [
			{
				text: '施工中',
				items: [
					{ text: '施工中', link: '/dnd/', activeMatch: '^/dnd/' },
					{ text: '施工中', link: '/dnd/', activeMatch: '^/dnd/' },
				],
			},
			{ text: '施工中', items: ['施工中', '施工中'] },
		],
	},
	{
		text: 'DND',
		items: [
			{
				text: '新手指南',
				items: [
					{
						text: '团前准备',
						icon: 'hugeicons:glasses',
						link: '/rule/dnd/guide/preparation',
						activeMatch: '^/rule/dnd/guide/preparation',
					},
					{
						text: '车卡指南',
						icon: 'tabler:arrow-guide',
						link: '/rule/dnd/guide/character_creation',
						activeMatch: '^/rule/dnd/guide/character_creation',
					},
					{
						text: '常用骰法',
						icon: 'fa-solid:dice-d20',
						link: '/rule/dnd/guide/quick_roll',
						activeMatch: '^/rule/dnd/guide/quick_roll',
					},
					{
						text: '扮演规则',
						icon: 'qlementine-icons:money-16',
						link: '/rule/dnd/guide/roleplay',
						activeMatch: '^/rule/dnd/guide/roleplay',
					},
					{
						text: '战斗规则',
						icon: 'ri:sword-line',
						link: '/rule/dnd/guide/combat',
						activeMatch: '^/rule/dnd/guide/combat',
					},
				],
			},
			{
				text: '资料信息',
				items: [
					{
						text: '职业',
						icon: 'fluent-emoji-high-contrast:thinking-face',
						link: '/rule/dnd/data/class/',
						activeMatch: '^/rule/dnd/data/class/',
					},
					{
						text: '种族',
						link: '/rule/dnd/data/race/',
						activeMatch: '^/rule/dnd/data/race/',
					},
					{
						text: '专长',
						link: '/rule/dnd/data/feat/',
						activeMatch: '^/rule/dnd/data/feat/',
					},
					{
						text: '技能',
						link: '/rule/dnd/data/skill',
						activeMatch: '^/rule/dnd/data/skill',
					},
					{
						text: '工具',
						link: '/rule/dnd/data/tool',
						activeMatch: '^/rule/dnd/data/tool',
					},
					{
						text: '法术',
						link: '/rule/dnd/data/spell/',
						activeMatch: '^/rule/dnd/data/spell/',
					},
					{
						text: '物品',
						link: '/rule/dnd/data/item/',
						activeMatch: '^/rule/dnd/data/item/',
					},
					{
						text: '状态',
						link: '/rule/dnd/data/condition',
						activeMatch: '^/rule/dnd/data/condition',
					},
				],
			},
			{
				text: '其他资料',
				items: [
					{
						text: 'ACG 角色',
						link: '/rule/dnd/ref/acg_character/',
						activeMatch: '^/rule/dnd/ref/acg_character/',
					},
					{
						text: '神官 - 村规',
						link: '/rule/dnd/ref/house_rule/overall',
						activeMatch: '^/rule/dnd/ref/house_rule',
					},
					{
						text: '神官 - DLC',
						link: '/rule/dnd/ref/dlc/',
						activeMatch: '^/rule/dnd/ref/dlc',
					},
				],
			},
		],
	},
	{
		text: '赛博朋克',
		items: [
			{
				text: '施工中',
				items: [
					{ text: '施工中', link: '/dnd/', activeMatch: '^/dnd/' },
					{ text: '施工中', link: '/dnd/', activeMatch: '^/dnd/' },
				],
			},
			{ text: '施工中', items: ['施工中', '施工中'] },
		],
	},
	{
		text: '更多规则',
		items: [
			{
				text: 'FATE',
				icon: 'ph:plus-minus-bold',
				link: '/rule/misc/fate',
				activeMatch: '^/rule/misc/fate',
			},
			{ text: 'Dagger Heart（施工中）', link: '/dnd/', activeMatch: '^/dnd/' },
			{ text: '魔法猫猫（施工中）', link: '/dnd/', activeMatch: '^/dnd/' },
			{ text: '降世神通（施工中）', link: '/dnd/', activeMatch: '^/dnd/' },
			{ text: '沙丘（施工中）', link: '/dnd/', activeMatch: '^/dnd/' },
		],
	},
	{
		text: '模组一览',
		items: [
			{
				text: '可选模组',
				items: [
					{
						text: '模组-神官',
						icon: 'mingcute:pray-line',
						link: '/module/menu/shinkan/module',
						activeMatch: '^/module/menu/shinkan/module',
					},
				],
			},

			{
				text: '游玩查阅-参考信息',
				items: [
					{
						text: '玩家手册目录-神官（施工中）',
						icon: 'typcn:th-list-outline',
						link: '/module/menu/shinkan/pl_ref_index',
						activeMatch: '^/module/menu/shinkan/pl_ref_index',
					},
				],
			},
			{
				text: '主持资料-剧透慎点！',
				items: [
					{
						text: '备团手册目录-神官（施工中）',
						icon: 'jam:triangle-danger-f',
						link: '/module/menu/shinkan/gm_ref_index',
						activeMatch: '^/module/menu/shinkan/gm_ref_index',
					},
				],
			},
		],
	},

	//{ text: '团记', link: '/log/', activeMatch: '^/log/' },

	{
		text: '关于',
		items: [
			{
				text: '团前准备',
				icon: 'hugeicons:glasses',
				link: '/about/preparation',
				activeMatch: '^/about/preparation',
			},
			{
				text: '站点指南',
				icon: 'ep:guide',
				link: '/about/help',
				activeMatch: '^/about/help',
			},
			{
				text: '格式示例',
				icon: 'jam:code-sample',
				link: '/about/sample',
				activeMatch: '^/about/sample',
			},
			{
				text: '神官 ー 信観',
				items: [
					{
						text: '约团方式',
						icon: 'streamline:group-meeting-call-solid',
						link: '/about/shinkan42/appointment',
						activeMatch: '^/about/shinkan42/appointment',
					},
					{
						text: '联系方式',
						icon: 'material-symbols:mail-outline',
						link: '/about/shinkan42/contact',
						activeMatch: '^/about/shinkan42/contact',
					},
				],
			},
			{
				text: '资源资料',
				items: [
					{
						text: '背景音乐',
						icon: 'icon-park-solid:music-one',
						link: '/about/ref/bgm',
						activeMatch: '^/about/ref/bgm',
					},
					{
						text: '实用音效',
						icon: 'subway:sound',
						link: '/about/ref/sfx',
						activeMatch: '^/about/ref/sfx',
					},
				],
			},
		],
	},
]);
