import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from 'vuepress';
import { plumeTheme } from 'vuepress-theme-plume';

const isProd = process.env.NODE_ENV === 'production';

export default defineUserConfig({
	base: '/',
	lang: 'zh-CN',
	title: '# Role Initiative #',
	description: 'by ShinKan42',

	bundler: viteBundler(),

	theme: plumeTheme({
		// 添加您的部署域名
		// hostname: 'https://your_site_url',

		hostname: 'http://ttrpg.shinkan42.art/',

		// 默认 不启用，仅当 plugins.git 为 true 时生效
		// 此配置在 plume.config.ts 中无效
		changelog: {
			maxCount: 10,
			repoUrl: 'https://github.com/ShinKan42/TTRPG',
			commitUrlPattern: ':repo/commit/:hash',
			issueUrlPattern: ':repo/issues/:issue',
			tagUrlPattern: ':repo/releases/tag/:tag',
		},

		// 默认启用，仅当 plugins.git 为 true 时生效
		// 此配置在 plume.config.ts 中无效
		contributors: {
			mode: 'block',
			avatarPattern: 'https://github.com/:username.png',
		},

		article: 'log',

		autoFrontmatter: {
			permalink: false,
		},

		markdown: {
			demo: true,
			//   include: true,
			chartjs: true,
			markmap: true,
			//   echarts: true,
			mermaid: true,
			flowchart: true,
			table: {
				// 表格默认对齐方式 'left' | 'center' | 'right'
				align: 'center',
				// 表格宽度是否为最大内容宽度
				// 行内元素不再自动换行，超出容器宽度时表格显示滚动条
				maxContent: true,
				/**
				 * 复制为 html/markdown
				 * true 相当于 `all`，相当于同时启用 html 和 markdown
				 */
				copy: true, // true | 'all' | 'html' | 'md'
			},
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
				langs: ['html', 'css', 'typescript', 'javascript'],
			},

			// 如果您在此处直接声明为 true，则表示开发环境和生产环境都启用该功能
			git: true,

			// ReplaceAssetsPluginOptions
			replaceAssets: isProd ? 'https://bed.shinkan42.art' : false,

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
				abbr: true,
				annotation: true,
				field: true,
				timeline: true,
				artPlayer: true,
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
				provider: 'Waline', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
				comment: true,
				serverURL: 'https://comment.shinkan42.art/',
				dark: 'auto',
				commentSorting: 'latest',
				reaction: 'true',
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
