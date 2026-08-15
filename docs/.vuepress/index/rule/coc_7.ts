import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: 'COC',
	linkPrefix: '/rule/coc/',
	dir: 'rule/coc',
	sidebar: [
		{
			text: '📖 新手指南',
			prefix: 'guide',
			collapsed: false,
			items: [{ text: 'COC 怎么玩 ❔', link: 'about' }],
		},
	],
});
