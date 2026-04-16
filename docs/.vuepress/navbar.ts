import { defineNavbarConfig } from 'vuepress-theme-plume';

export const navbar = defineNavbarConfig([
	{
		text: 'COC',
		items: [
			{
				text: '施工中',
				items: [
					{ text: '施工中', link: '/dnd_5r/', activeMatch: '^/dnd_5r/' },
					{ text: '施工中', link: '/dnd_5r/', activeMatch: '^/dnd_5r/' },
				],
			},
			{ text: '施工中', items: ['施工中', '施工中'] },
		],
	},
	{
		text: '匕首之心',
		items: [
			{
				text: '新手指南',
				items: [
					{
						text: '团前准备',
						icon: 'hugeicons:glasses',
						badge: '须知',
						link: '/rule/dagger_heart/guide/preparation',
						activeMatch: '^/rule/dagger_heart/guide/preparation',
					},
					{
						text: '车卡指南',
						icon: 'tabler:arrow-guide',
						badge: '新手',
						link: '/rule/dagger_heart/guide/character_creation',
						activeMatch: '^/rule/dagger_heart/guide/character_creation',
					},
					{
						text: '常用骰法',
						icon: 'fa-solid:dice-d20',
						badge: '常用',
						link: '/rule/dagger_heart/guide/quick_roll',
						activeMatch: '^/rule/dagger_heart/guide/quick_roll',
					},
					{
						text: '基础规则',
						icon: 'mdi:compass-outline',
						link: '/rule/dagger_heart/guide/general_rule',
						activeMatch: '^/rule/dagger_heart/guide/general_rule',
					},
				],
			},
			{
				text: '资料信息',
				items: [
					{
						text: '职业',
						icon: 'ic:outline-hotel-class',
						badge: '导引',
						link: '/rule/dagger_heart/brief_ref/class/',
						activeMatch: '^/rule/dagger_heart/brief_ref/class/',
					},
					{
						text: '种族',
						link: '/rule/dagger_heart/brief_ref/ancestry',
						activeMatch: '^/rule/dagger_heart/brief_ref/ancestry',
					},
					{
						text: '社群',
						link: '/rule/dagger_heart/brief_ref/community',
						activeMatch: '^/rule/dagger_heart/brief_ref/community',
					},
					{
						text: '领域',
						link: '/rule/dagger_heart/brief_ref/domain',
						activeMatch: '^/rule/dagger_heart/brief_ref/domain',
					},
					{
						text: '物品',
						link: '/rule/dagger_heart/brief_ref/item',
						activeMatch: '^/rule/dagger_heart/brief_ref/item',
					},
				],
			},
			{
				text: '其他资料',
				items: [
					{
						text: 'ACG 角色',
						link: '/rule/dagger_heart/home_brew/acg_character/',
						activeMatch: '^/rule/dagger_heart/home_brew/acg_character/',
					},
					{
						text: '官方 - 战役框架',
						link: '/rule/dagger_heart/home_brew/vanilla_campaign/',
						activeMatch: '^/rule/dagger_heart/home_brew/vanilla_campaign/',
					},
					{
						text: '神官 - 战役框架',
						link: '/rule/dagger_heart/home_brew/shinkan_campaign/',
						activeMatch: '^/rule/dagger_heart/home_brew/shinkan_campaign/',
					},
				],
			},
		],
	},
	{
		text: 'DND-5R',
		items: [
			{
				text: '新手指南',
				items: [
					{
						text: 'DND 怎么玩',
						icon: 'hugeicons:glasses',
						badge: '❔',
						link: '/rule/dnd_5r/guide/about',
						activeMatch: '^/rule/dnd_5r/guide/about',
					},
					{
						text: '车卡指南',
						icon: 'tabler:arrow-guide',
						link: '/rule/dnd_5r/guide/character_creation',
						activeMatch: '^/rule/dnd_5r/guide/character_creation',
					},
					{
						text: '常用骰法',
						icon: 'fa-solid:dice-d20',
						badge: '⚡',
						link: '/rule/dnd_5r/guide/quick_roll',
						activeMatch: '^/rule/dnd_5r/guide/quick_roll',
					},
					{
						text: '扮演',
						icon: 'qlementine-icons:money-16',
						link: '/rule/dnd_5r/guide/roleplay',
						activeMatch: '^/rule/dnd_5r/guide/roleplay',
					},
					{
						text: '战斗',
						icon: 'ri:sword-line',
						link: '/rule/dnd_5r/guide/combat',
						activeMatch: '^/rule/dnd_5r/guide/combat',
					},
					{
						text: '技能与工具',
						link: '/rule/dnd_5r/brief_ref/skill_and_tool',
						activeMatch: '^/rule/dnd_5r/brief_ref/skill_and_tool',
					},
					{
						text: '环境与状态',
						link: '/rule/dnd_5r/brief_ref/environment_and_condition',
						activeMatch: '^/rule/dnd_5r/brief_ref/environment_and_condition',
					},
					{
						text: '常见问题（FAQ）',
						icon: 'foundation:magnifying-glass',
						link: '/rule/dnd_5r/brief_ref/faq',
						activeMatch: '^/rule/dnd_5r/brief_ref/faq',
					},
				],
			},
			{
				text: '简化资料',
				items: [
					{
						text: '职业',
						icon: 'fluent-emoji-high-contrast:thinking-face',
						link: '/rule/dnd_5r/brief_ref/class',
						activeMatch: '^/rule/dnd_5r/brief_ref/class',
					},
					{
						text: '种族',
						link: '/rule/dnd_5r/brief_ref/race',
						activeMatch: '^/rule/dnd_5r/brief_ref/race',
					},
					{
						text: '专长',
						link: '/rule/dnd_5r/brief_ref/feat/',
						activeMatch: '^/rule/dnd_5r/brief_ref/feat/',
					},
					{
						text: '法术',
						link: '/rule/dnd_5r/brief_ref/spell/',
						activeMatch: '^/rule/dnd_5r/brief_ref/spell/',
					},
					{
						text: '物品',
						link: '/rule/dnd_5r/brief_ref/item/',
						activeMatch: '^/rule/dnd_5r/brief_ref/item/',
					},
				],
			},
			{
				text: '其他资料',
				items: [
					{
						text: 'ACG 角色',
						link: '/rule/dnd_5r/home_brew/acg_character/',
						activeMatch: '^/rule/dnd_5r/home_brew/acg_character/',
					},
					{
						text: '神官 - 村规',
						link: '/rule/dnd_5r/home_brew/shinkan_house_rule/index',
						activeMatch: '^/rule/dnd_5r/home_brew/shinkan_house_rule/',
					},
					{
						text: '神官 - DLC',
						link: '/rule/dnd_5r/home_brew/shinkan_dlc/',
						activeMatch: '^/rule/dnd_5r/home_brew/shinkan_dlc/',
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
					{ text: '施工中', link: '/dnd_5r/', activeMatch: '^/dnd_5r/' },
					{ text: '施工中', link: '/dnd_5r/', activeMatch: '^/dnd_5r/' },
				],
			},
			{ text: '施工中', items: ['施工中', '施工中'] },
		],
	},
	{
		text: '更多规则',
		items: [
			{
				text: '轻量',
				items: [
					{
					text: 'FATE',
					icon: 'ph:plus-minus-bold',
					badge: '通用',
					link: '/rule/misc/fate',
					activeMatch: '^/rule/misc/fate',
					},
								{
					text: '魔法猫猫（施工中）',
					link: '/dnd_5r/',
					activeMatch: '^/dnd_5r/',
					},
				],
			},
			{
				text: 'IP 主题',
				items: [
					{
					text: '降世神通（施工中）',
					link: '/dnd_5r/',
					activeMatch: '^/dnd_5r/',
					},
					{ text: '沙丘（施工中）', link: '/dnd_5r/', activeMatch: '^/dnd_5r/' },
				],
			},
		],
	},
	{
		text: '模组一览',
		items: [
			{
				text: '模组介绍-约团挑选',
				icon: 'foundation:magnifying-glass',
				items: [
					{ text: '快速选择', icon:'arcticons:quick-cursor', badge: '⚡', link: '/module/menu/', activeMatch: '^/module/menu/' },
					{ text: 'DND-5R', icon:'simple-icons:dungeonsanddragons', link: '/module/menu/dnd_5r', activeMatch: '^/module/menu/dnd_5r' },
				],
			},
			{
				text: '玩家手册-参考信息',
				icon: 'typcn:th-list-outline',
				items: [
					{ text: 'DND-5R', icon:'simple-icons:dungeonsanddragons', link: '/module/pl_ref/dnd_5r/', activeMatch: '^/module/pl_ref/dnd_5r/' },
				],
			},
			{
				text: '主持指南-剧透慎点',
				icon: 'jam:triangle-danger-f',
				items: [
					{ text: 'DND-5R', icon:'simple-icons:dungeonsanddragons', link: '/module/gm_ref/dnd_5r/', activeMatch: '^/module/gm_ref/dnd_5r/' },
				],
			},
		],
	},

	//{ text: '团记', link: '/log/', activeMatch: '^/log/' },

	{
		text: '关于',
		items: [
			{
				text: '约团相关',
				items: [
					{
						text: '联系方式',
						icon: 'material-symbols:mail-outline',
						link: '/about/contact',
						activeMatch: '^/about/contact',
					},
					{
						text: '约团方式',
						icon: 'streamline:group-meeting-call-solid',
						link: '/about/appointment',
						activeMatch: '^/about/appointment',
					},
					{
						text: '跑团怎么玩',
						icon: 'foundation:magnifying-glass',
						badge: '❔',
						link: '/about/preparation',
						activeMatch: '^/about/preparation',
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
