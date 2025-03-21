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
	docsRepo: "https://github.com/ShinKan42/TTRPG.git",
	docsDir: "docs",

	appearance: true,
	footer: {
		copyright: "来者是客，还请就坐",
	},

	profile: {
		avatar: "/images/SS-Seal-Filled-Resized.png",
		name: "神官 ー 信観",
		description: "跑团Log",
		circle: true,
		// location: '',
		// organization: '',
	},

	blog: {
		link: "/log/",
		include: ["log/**/*.md"],
		exclude: [".vuepress/", "node_modules/"],
		tagsLink: "/log/tags/",
		archivesLink: "/log/archives/",
		categoriesLink: "/log/categories/",
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
