import { defineNoteConfig } from "vuepress-theme-plume";

export const Modules = defineNoteConfig({
	link: "/module/menu/",
	dir: "module/menu",
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
					prefix: "rule",
					collapsed: false,
					items: ["dnd/index", "cyberpunk/index", "avatar/index"],
				},
			],
		},
	],
});
