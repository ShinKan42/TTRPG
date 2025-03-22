import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
	{
		text: "DND",
		items: [
			{
				text: "新手指南",
				items: [
					{
						text: "车卡指南",
						link: "/dnd/guide/character_creation",
						activeMatch: "^/dnd/guide/character_creation",
					},
					{
						text: "常用骰法",
						link: "/dnd/guide/quick_roll",
						activeMatch: "^/dnd/guide/quick_roll",
					},
					{
						text: "扮演规则",
						link: "/dnd/guide/roleplay",
						activeMatch: "^/dnd/guide/roleplay",
					},
					{
						text: "战斗规则",
						link: "/dnd/guide/combat/turn",
						activeMatch: "^/dnd/guide/combat/",
					},
				],
			},
			{
				text: "资料信息",
				items: [
					{
						text: "职业",
						link: "/dnd/data/class/",
						activeMatch: "^/dnd/data/class/",
					},
					{
						text: "法术",
						link: "/dnd/data/spell/",
						activeMatch: "^/dnd/data/spell/",
					},
					{
						text: "种族",
						link: "/dnd/data/race/",
						activeMatch: "^/dnd/data/race/",
					},
					{
						text: "背景",
						link: "/dnd/data/origin/",
						activeMatch: "^/dnd/data/origin/",
					},
					{
						text: "装备",
						link: "/dnd/data/feat/",
						activeMatch: "^/dnd/data/equipment/",
					},
				],
			},
			{
				text: "其他资料",
				items: [
					{
						text: "ACG角色",
						link: "/dnd/ref/acg_character/",
						activeMatch: "^/dnd/ref/acg_character/",
					},
					{
						text: "参考链接",
						link: "/dnd/ref/link",
						activeMatch: "^/dnd/ref/link",
					},
					{
						text: "神官村规",
						link: "/dnd/ref/shinkan42/",
						activeMatch: "^/dnd/ref/shinkan42/",
					},
				],
			},
		],
	},
	{
		text: "赛博朋克",
		items: [
			{
				text: "WIP",
				items: [
					{ text: "WIP", link: "/dnd/", activeMatch: "^/dnd/" },
					{ text: "WIP", link: "/dnd/", activeMatch: "^/dnd/" },
				],
			},
			{ text: "WIP", items: ["WIP", "WIP"] },
		],
	},
	{
		text: "轻量规则",
		items: [
			{ text: "池（WIP）", link: "/dnd/", activeMatch: "^/dnd/" },
			{ text: "COC（WIP）", link: "/dnd/", activeMatch: "^/dnd/" },
			{ text: "魔法猫猫（WIP）", link: "/dnd/", activeMatch: "^/dnd/" },
			{ text: "降世神通（WIP）", link: "/dnd/", activeMatch: "^/dnd/" },
		],
	},
	{
		text: "模组浏览",
		items: [
			{
				text: "总览列表",
				icon: "solar:pin-list-bold",
				link: "/module/index",
				activeMatch: "^/module/index",
			},
			{
				text: "长度分类",
				icon: "mdi:clock",
				items: [
					{
						text: "短团",
						icon: "icon-park-solid:one-key",
						link: "/module/scale/short/index",
						activeMatch: "^/module/scale/short/",
					},
					{
						text: "中团",
						icon: "icon-park-solid:three-key",
						link: "/module/scale/medium/index",
						activeMatch: "^/module/scale/medium/",
					},
					{
						text: "长团",
						icon: "icon-park-solid:five-key",
						link: "/module/scale/long/index",
						activeMatch: "^/module/scale/long/",
					},
				],
			},
			{
				text: "规则分类",
				icon: "game-icons:rule-book",
				items: [
					{
						text: "DND",
						icon: "simple-icons:dungeonsanddragons",
						link: "/module/rules/dnd/index",
						activeMatch: "^/module/rule/dnd",
					},
					{
						text: "赛博朋克",
						icon: "arcticons:cyberpunk-red-companion",
						link: "/module/rules/cyberpunk/index",
						activeMatch: "^/modules/rule/cyberpunk/",
					},
					{
						text: "降世神通",
						icon: "akar-icons:air",
						link: "/module/rules/avatar/index",
						activeMatch: "^/module/rule/avatar/",
					},
				],
			},
		],
	},

	{ text: "Log", link: "/log/", activeMatch: "^/log/" },

	{
		text: "玩家手册",
		items: [
			{
				text: "总览列表",
				icon: "solar:pin-list-bold",
				link: "/pl_ref/index",
				activeMatch: "^/pl_ref/index",
			},
			{
				text: "规则分类",
				icon: "game-icons:rule-book",
				items: [
					{
						text: "DND",
						icon: "simple-icons:dungeonsanddragons",
						link: "/pl_ref/rule/dnd/index",
						activeMatch: "^/pl_ref/rule/dnd",
					},
					{
						text: "赛博朋克",
						icon: "arcticons:cyberpunk-red-companion",
						link: "/pl_ref/rule/cyberpunk/index",
						activeMatch: "^/pl_ref/rule/cyberpunk/",
					},
					{
						text: "降世神通",
						icon: "akar-icons:air",
						link: "/pl_ref/rule/avatar/index",
						activeMatch: "^/pl_ref/rule/avatar/",
					},
				],
			},
		],
	},
	{
		text: "主持资料",
		items: [
			{
				text: "总览列表",
				icon: "solar:pin-list-bold",
				link: "/gm_ref/index",
				activeMatch: "^/gm_ref/index",
			},
			{
				text: "规则分类",
				icon: "game-icons:rule-book",
				items: [
					{
						text: "DND",
						icon: "simple-icons:dungeonsanddragons",
						link: "/gm_ref/rules/dnd/index",
						activeMatch: "^/gm_ref/rules/dnd",
					},
					{
						text: "赛博朋克",
						icon: "arcticons:cyberpunk-red-companion",
						link: "/gm_ref/rules/cyberpunk/index",
						activeMatch: "^/gm_ref/rules/cyberpunk/",
					},
					{
						text: "降世神通",
						icon: "akar-icons:air",
						link: "/gm_ref/rules/avatar/index",
						activeMatch: "^/gm_ref/rules/avatar/",
					},
				],
			},
		],
	},

	{
		text: "关于",
		items: [
			{
				text: "站点指南",
				icon: "ep:guide",
				link: "/hotline/help",
				activeMatch: "^/hotline/help",
			},
			{
				text: "神官 ー 信観",
				items: [
					{
						text: "约团方式",
						icon: "streamline:group-meeting-call-solid",
						link: "/hotline/shinkan42/appointment",
						activeMatch: "^/hotline/shinkan42/appointment",
					},
					{
						text: "联系方式",
						icon: "material-symbols:mail-outline",
						link: "/hotline/shinkan42/contact",
						activeMatch: "^/hotline/shinkan42/contact",
					},
				],
			},
		],
	},
]);
