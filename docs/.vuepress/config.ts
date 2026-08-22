import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from 'vuepress';
import { plumeTheme } from 'vuepress-theme-plume';

import collections from './index/index.ts';

const isProd = process.env.NODE_ENV === 'production';

export default defineUserConfig({
	base: '/',
	lang: 'zh-CN',
	title: '# Role Initiative #',
	description: 'by ShinKan42',

	bundler: viteBundler(),

	head: [
   		   // Google验证（直接粘贴从GSC复制的完整标签）
  		    ['meta', { 
  		      name: 'google-site-verification', 
  		      content: 'dAVp0f72P9QitJLdUdLt9xLrQoNKqTsYCGS_SJMH3AI' 
  		    }],
      
  		    // 百度验证（自己组装，content值替换为你从百度获取的）
 		     ['meta', { 
 		       name: 'baidu-site-verification', 
 		       content: 'codeva-qsgrSAbOG4' 
		      }],
		],

	theme: plumeTheme({

		// GM 备团文件夹加密（2026-08-14 DM 指令：密码 114514）
		encrypt: {
			rules: {
				'/prep/': '114514',
			},
		},

		// GM 备团加密页不进站内搜索（目录级过滤，防止搜索框泄露案卷标题/章节）
		search: {
			isSearchable: (page: any) => !page.path.startsWith('/prep/'),
		},

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
			mode: 'inline',
			avatarPattern: 'https://github.com/:username.png',
		},

		autoFrontmatter: {
			permalink: false,
		},

		collections,

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
				// 2026-08-18 改 false：max-content 让单元格永不换行，多列宽表总宽超视口→横向滚动条
				// false 后表格收缩到容器宽，中文单元格自动换行（站点级替代逐表手动 <br>）
				// 个别确需单行的表可单表加 max-content 参数豁免
				maxContent: false,
				/**
				 * 复制为 html/markdown
				 * true 相当于 `all`，相当于同时启用 html 和 markdown
				 */
				copy: true, // true | 'all' | 'html' | 'md'
			},
		},



		plugins: {
			// GM 备团页不进 sitemap（加密页不应被搜索引擎索引）
			// 注意：excludePaths 只支持精确路径；新增 prep 页时同步在页面 frontmatter 写 sitemap: false
			sitemap: {
				excludePaths: [
					'/prep/menu/',
					'/prep/menu/dnd_5r.html',
					'/prep/dnd_5r/kftgv/',
					'/prep/dnd_5r/kftgv/index.html',
					'/prep/dnd_5r/kftgv/reach_for_the_stars.html',
					'/prep/dnd_5r/kftgv/the_murkmire_malevolence.html',
					'/prep/dnd_5r/kftgv/party_at_paliset_hall.html',
					'/prep/dnd_5r/dragons_of_stormwrack_isle/',
				'/prep/dnd_5r/dragons_of_stormwrack_isle/index.html',
					'/prep/dnd_5r/dragon_delves/',
					'/prep/dnd_5r/dragon_delves/index.html',
					'/prep/dnd_5r/dragon_delves/bakers_doesnt.html',
					'/prep/dnd_5r/deaths_house/',
					'/prep/dnd_5r/deaths_house/index.html',
					'/prep/dnd_5r/curse_of_strahd/',
					'/prep/dnd_5r/curse_of_strahd/index.html',
					'/prep/dnd_5r/curse_of_strahd/ch1_2_into_the_mists.html',
					'/prep/dnd_5r/descent_into_avernus/',
					'/prep/dnd_5r/descent_into_avernus/index.html',
					'/prep/dnd_5r/doomed_sword_coast/',
					'/prep/dnd_5r/doomed_sword_coast/index.html',
					'/prep/dnd_5r/doomed_sword_coast/geography.html',
					'/prep/dnd_5r/doomed_sword_coast/reign_of_rot.html',
					'/prep/dnd_5r/doomed_sword_coast/reign_of_rot_ch5.html',
					'/prep/dnd_5r/doomed_sword_coast/vecna_rise.html',
					'/prep/dnd_5r/doomed_sword_coast/vecna_fall.html',
					'/prep/dnd_5r/doomed_sword_coast/academy_of_adventure.html',
					'/prep/dnd_5r/doomed_sword_coast/legacy_of_vecna.html',
					'/prep/dnd_5r/doomed_sword_coast/wrath_of_zuggtmoy.html',
					'/prep/dnd_5r/doomed_sword_coast/blood_war.html',
					],
			},

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
		},
	}),
});