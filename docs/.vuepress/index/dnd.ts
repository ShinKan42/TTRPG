import { defineNoteConfig } from "vuepress-theme-plume";

export const DND = defineNoteConfig({
	link: "/rule/dnd/",
	dir: "rule/dnd",
	sidebar: [
		{
			text: "新手指南",
			icon: "icon-park-twotone:guide-board",
			prefix: "guide",
			collapsed: false,
			items: [
				"preparation",
				"character_creation",
				"quick_roll",
				"roleplay",
				{
					text: "战斗规则",
					icon: "ri:sword-line",
					prefix: "combat",
					collapsed: true,
					items: ["turn", "condition", "spell", "item", "rest"],
				},
				"faq",
			],
		},
		{
			text: "资料信息",
			icon: "icon-park-twotone:guide-board",
			collapsed: false,
			items: [
				{
					text: "种族",
					icon: "material-symbols-light:genetics-rounded",
					prefix: "race",
					collapsed: true,
					items: ["pdf", "bilibili", "youtube"],
				},
				{
					text: "背景",
					icon: "solar:home-outline",
					prefix: "origin",
					collapsed: true,
					items: ["pdf", "bilibili", "youtube"],
				},
				{
					text: "职业",
					icon: "ic:outline-hotel-class",
					prefix: "class",
					collapsed: true,
					items: ["pdf", "bilibili", "youtube"],
				},
				{
					text: "专长",
					icon: "game-icons:fist",
					prefix: "feat",
					collapsed: true,
					items: ["pdf", "bilibili", "youtube"],
				},
				{
					text: "法术精简",
					icon: "game-icons:floating-crystal",
					prefix: "spell",
					collapsed: true,
					items: ["pdf", "bilibili", "youtube"],
				},
			],
		},
		{
			text: "参考信息",
			icon: "material-symbols:quick-reference-all",
			collapsed: false,
			prefix: "ref",
			items: [
				"term",
				{
					text: "法术大全",
					icon: "game-icons:crystal-wand",
					prefix: "嵌入",
					collapsed: true,
					items: ["pdf", "bilibili", "youtube"],
				},
				{
					text: "物品大全",
					icon: "game-icons:armor-vest",
					prefix: "嵌入",
					collapsed: true,
					items: ["pdf", "bilibili", "youtube"],
				},
				{
					text: "其他表格",
					icon: "vaadin:form",
					prefix: "嵌入",
					collapsed: true,
					items: ["pdf", "bilibili", "youtube"],
				},
				{
					text: "神官村规",
					icon: "healthicons:village-24px",
					prefix: "嵌入",
					collapsed: true,
					items: ["pdf", "bilibili", "youtube"],
				},
			],
		},
	],
});
