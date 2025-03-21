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
						link: "/dnd/guide/quick_rolls",
						activeMatch: "^/dnd/guide/quick_rolls",
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
						link: "/dnd/data/classes/",
						activeMatch: "^/dnd/data/classes/",
					},
					{
						text: "法术",
						link: "/dnd/data/spells/",
						activeMatch: "^/dnd/data/spells/",
					},
					{
						text: "种族",
						link: "/dnd/data/races/",
						activeMatch: "^/dnd/data/races/",
					},
					{
						text: "背景",
						link: "/dnd/data/origins/",
						activeMatch: "^/dnd/data/origins/",
					},
					{
						text: "装备",
						link: "/dnd/data/feats/",
						activeMatch: "^/dnd/data/equipments/",
					},
				],
			},
			{
				text: "其他资料",
				items: [
					{
						text: "ACG角色",
						link: "/dnd/ref/acg_characters/",
						activeMatch: "^/dnd/ref/acg_characters/",
					},
					{
						text: "参考链接",
						link: "/dnd/ref/links",
						activeMatch: "^/dnd/ref/links",
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
				link: "/modules/index",
				activeMatch: "^/modules/index",
			},
			{
				text: "游玩资料",
				icon: "game-icons:target-poster",
				link: "/modules/booklet/index",
				activeMatch: "^/modules/booklet/",
			},
			{
				text: "长度分类",
				icon: "mdi:clock",
				items: [
					{
						text: "短团",
						icon: "icon-park-solid:one-key",
						link: "/modules/scale/short/index",
						activeMatch: "^/modules/scale/short/",
					},
					{
						text: "中团",
						icon: "icon-park-solid:three-key",
						link: "/modules/scale/medium/index",
						activeMatch: "^/modules/scale/medium/",
					},
					{
						text: "长团",
						icon: "icon-park-solid:five-key",
						link: "/modules/scale/long/index",
						activeMatch: "^/modules/scale/long/",
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
						link: "/modules/rules/dnd/index",
						activeMatch: "^/modules/rules/dnd",
					},
					{
						text: "赛博朋克",
						icon: "arcticons:cyberpunk-red-companion",
						link: "/modules/rules/cyberpunk/index",
						activeMatch: "^/modules/rules/cyberpunk/",
					},
					{
						text: "降世神通",
						icon: "akar-icons:air",
						link: "/modules/rules/avatar/index",
						activeMatch: "^/modules/rules/avatar/",
					},
				],
			},
		],
	},

	{ text: "Log", link: "/logs/", activeMatch: "^/logs/" },

	{
		text: "备团资料",
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
						link: "/gm_refs/rules/dnd/index",
						activeMatch: "^/gm_refs/rules/dnd",
					},
					{
						text: "赛博朋克",
						icon: "arcticons:cyberpunk-red-companion",
						link: "/gm_refs/rules/cyberpunk/index",
						activeMatch: "^/gm_refs/rules/cyberpunk/",
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
