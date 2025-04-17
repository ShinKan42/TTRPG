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
	docsRepo: "https://github.com/ShinKan42/TTRPG",
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

	social: [
		{ icon: "discord", link: "https://discord.gg/XjMpb3vnWc" },
		{
			icon: "qq",
			link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=nx_4229SqWdXI7OlkLyYZ650CRSNR_ZL&authKey=xstDI%2B4b%2FEhRFeqcR6y9eBd0A3rMdxqLd0hyw37R%2FMiFdxfHX1fhQBg6r9iuHcNC&noverify=0&group_code=547345976",
		},
		{ icon: "bilibili", link: "https://space.bilibili.com/5524867" },
	],
	navbarSocialInclude: ["bilibili", "qq", "discord"],

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
