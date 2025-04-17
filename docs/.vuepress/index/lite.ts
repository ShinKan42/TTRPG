import { defineNoteConfig } from "vuepress-theme-plume";

export const Lite = defineNoteConfig({
	link: "/rule/lite/",
	dir: "rule/lite",
	sidebar: [
		{
			text: "轻量规则",
			icon: "fluent:style-guide-24-regular",
			collapsed: false,
			items: [
				"index",
				{
					text: "DND（WIP）",
					icon: "simple-icons:dungeonsanddragons",
					prefix: "dnd",
					collapsed: false,
					items: ["index"],
				},
			],
		},
	],
});
