import { defineNoteConfig } from "vuepress-theme-plume";

export const PL_Ref = defineNoteConfig({
	link: "/pl_ref/",
	dir: "pl_ref",
	sidebar: [
		{
			text: "玩家手册",
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
