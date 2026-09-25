import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '魂缚 AOS',
	linkPrefix: '/rule/aos/',
	dir: 'rule/aos',
	sidebar: [
		{
			text: '📖 新手指南',
			prefix: 'guide',
			collapsed: false,
			items: [{ text: '魂缚怎么玩 ❔', link: 'about' }],
		},
	],
});
