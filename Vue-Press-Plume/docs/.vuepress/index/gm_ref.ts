import { defineNoteConfig } from "vuepress-theme-plume";

export const GM_Ref = defineNoteConfig({
	link: "/modules/",
	dir: "modules",
	sidebar: [
		{
			text: "备团资料",
			icon: "material-symbols:lock-outline",
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
