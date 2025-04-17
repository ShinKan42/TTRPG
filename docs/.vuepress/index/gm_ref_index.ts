import { defineNoteConfig } from "vuepress-theme-plume";

export const GM_Ref_Index = defineNoteConfig({
	link: "/module/gm_ref_index/",
	dir: "module/gm_ref_index",
	sidebar: [
		{
			text: "主持资料",
			icon: "material-symbols:lock-outline",
			collapsed: false,
			items: [
				"index",
				{
					text: "DND（WIP）",
					icon: "simple-icons:dungeonsanddragons",
					collapsed: false,
					items: ["test"],
				},
			],
		},
	],
});
