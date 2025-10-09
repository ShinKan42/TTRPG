import path from 'node:path';
import { defineThemeConfig } from 'vuepress-theme-plume';
import { navbar } from './navbar';

import Collections from './index/index.ts';

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
	logo: '/image/site/SS-Seal-Filled-Resized.png',
	// your git repo url
	docsRepo: 'https://github.com/ShinKan42/TTRPG',
	docsDir: 'docs',

	appearance: true,
	footer: {
		copyright: '来者是客，还请就坐',
	},

	profile: {
		avatar: '/image/site/SS-Seal-Filled-Resized.png',
		name: '神官 ー 信観',
		description: '跑团Log',
		circle: true,
		// location: '',
		// organization: '',
	},

	Collections,

	social: [],
	navbarSocialInclude: [],

	navbar: navbar,

	bulletin: {
		layout: 'bottom-right',
		title: '跑团告知',
		contentType: 'markdown',
		lifetime: 'session',
		enablePage: true,
		contentFile: path.join(__dirname, 'bulletin.md'),
	},
});
