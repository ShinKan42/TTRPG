import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";

export default defineUserConfig({
	base: "/",
	lang: "zh-CN",
	title: "HOT # 跑团热线 # LINE",
	description: "TTRPG HOT LINE",

	bundler: viteBundler(),

	theme: plumeTheme({
		// 添加您的部署域名
		// hostname: 'https://your_site_url',

		hostname: "http://ttrpg.shinkan42.art/",

		// 默认 不启用，仅当 plugins.git 为 true 时生效
		// 此配置在 plume.config.ts 中无效
		changelog: true,

		// 默认启用，仅当 plugins.git 为 true 时生效
		// 此配置在 plume.config.ts 中无效
		contributors: {
			mode: "block",
			avatarPattern: "'https://github.com/:username.png'",
		},

		encrypt: {
			rules: {
				"/pl_ref/": "Natural20",
				"/gm_ref/": "Natural20",
			},
		},

		locales: {
			"/": {
				encryptButtonText: "密码：Natural20",
				encryptPlaceholder: "Natural20",
				encryptPageText: "该类页面存在剧透信息，请确认访问",
			},
		},

		article: "log",

		autoFrontmatter: {
			permalink: false,
		},

		plugins: {
			/**
			 * Shiki 代码高亮
			 * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
			 */
			// shiki: {
			// 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
			//   languages: ['shell', 'bash', 'typescript', 'javascript'],
			// },

			shiki: {
				languages: ["html", "css", "typescript", "javascript"],
			},

			// 如果您在此处直接声明为 true，则表示开发环境和生产环境都启用该功能
			git: process.env.NODE_ENV === "production",

			/**
			 * markdown enhance
			 * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
			 */
			markdownEnhance: {
				demo: true,
				//   include: true,
				//   chart: true,
				//   echarts: true,
				mermaid: true,
				//   flowchart: true,
			},

			/**
			 *  markdown power
			 * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
			 */
			// markdownPower: {
			//   pdf: true,
			//   caniuse: true,
			//   plot: true,
			//   bilibili: true,
			//   youtube: true,
			//   icons: true,
			//   codepen: true,
			//   replit: true,
			//   codeSandbox: true,
			//   jsfiddle: true,
			//   repl: {
			//     go: true,
			//     rust: true,
			//     kotlin: true,
			//   },
			// },

			markdownPower: {
				pdf: true,
				plot: true,
				bilibili: true,
				youtube: true,
				icons: true,
				imageSize: true,
				fileTree: true,
			},

			/**
			 * 评论 comments
			 * @see https://theme-plume.vuejs.press/guide/features/comments/
			 */
			// comment: {
			//   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
			//   comment: true,
			//   repo: '',
			//   repoId: '',
			//   categoryId: '',
			//   mapping: 'pathname',
			//   reactionsEnabled: true,
			//   inputPosition: 'top',
			// },

			comment: {
				provider: "Waline", // "Artalk" | "Giscus" | "Twikoo" | "Waline"
				comment: true,
				serverURL: "https://comment.shinkan42.art/",
				dark: "auto",
				commentSorting: "latest",
				reaction: "true",
				//   repo: '',
				//   repoId: '',
				//   categoryId: '',
				//   mapping: 'pathname',
				//   reactionsEnabled: true,
				//   inputPosition: 'top',
			},
		},
	}),
});
