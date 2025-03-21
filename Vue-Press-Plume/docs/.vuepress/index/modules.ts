import { defineNoteConfig } from "vuepress-theme-plume";

export const Modules = defineNoteConfig({
	link: "/modules/",
	dir: "modules",
	sidebar: [
		{
			text: "模组浏览",
			icon: "mingcute:pray-line",
			collapsed: false,
			items: [
				"index",
				{
					text: "长度分类",
					icon: "mdi:clock",
					prefix: "scale",
					collapsed: false,
					items: ["short/index", "medium/index", "long/index"],
				},
				{
					text: "规则分类",
					icon: "mdi:clock",
					prefix: "rules",
					collapsed: false,
					items: ["dnd/index", "cyberpunk/index", "avatar/index"],
				},
				{
					text: "主持分类",
					icon: "mdi:clock",
					prefix: "gm",
					collapsed: false,
					items: [
						"shinkan/index",
						"chapp/index",
						"yy/index",
						"paobudong/index",
						"v/index",
					],
				},
				{
					text: "玩家手册",
					icon: "game-icons:target-poster",
					prefix: "booklet",
					collapsed: true,
					items: [
						"index",
						"dnd-medium-t1-watchers_crossing",
						"dnd-medium-t2-return-sunsaw",
					],
				},
			],
		},
	],
});
