import path from 'node:path';
import { defineThemeConfig } from 'vuepress-theme-plume';
import { navbar } from './navbar';

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
	logo: 'https://bed.shinkan42.art/image/site/SS-Seal-Filled-Resized.png',
	// your git repo url
	docsRepo: 'https://github.com/ShinKan42/TTRPG',
	docsDir: 'docs',

	appearance: true,
	footer: {
		copyright: '来者是客，还请就坐',
	},

	profile: {
		avatar: 'https://bed.shinkan42.art/image/site/SS-Seal-Filled-Resized.png',
		name: '神官 ー 信観',
		description: '跑团Log',
		circle: true,
		// location: '',
		// organization: '',
	},

	social: [],
	navbarSocialInclude: [],

	navbar: navbar,

	bulletin: {
		layout: 'bottom-right',
		title: '跑团是什么？',
		contentType: 'markdown',
		lifetime: 'session',
		enablePage: true,
		contentFile: path.join(__dirname, 'bulletin.md'),
	},
});
