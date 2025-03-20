import path from "node:path";
import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./navbar";
import { NotesConfig } from "./index/index";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
	logo: "/images/SS-Seal-Filled-Resized.png",
	// your git repo url
	docsRepo: "",
	docsDir: "docs",

	appearance: true,
	footer: {
		copyright: "来者是客，还请就坐",
	},

	profile: {
		avatar: "/images/SS-Seal-Filled-Resized.png",
		name: "神官 ー 信観",
		description: "跑团热线跑团Log",
		circle: true,
		// location: '',
		// organization: '',
	},

	blog: {
		link: "/logs/",
		include: ["logs/**/*.md"],
		exclude: [".vuepress/", "node_modules/"],
		tagsLink: "/logs/tags/",
		archivesLink: "/logs/archives/",
		categoriesLink: "/logs/categories/",
	},

	social: [],
	navbarSocialInclude: [],

	notes: NotesConfig,
	navbar: navbar,

	bulletin: {
		layout: "bottom-right",
		title: "跑团告知",
		contentType: "markdown",
		lifetime: "session",
		enablePage: true,
		contentFile: path.join(__dirname, "bulletin.md"),
	},
});
