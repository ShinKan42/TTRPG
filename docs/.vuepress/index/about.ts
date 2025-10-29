import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '台前 TRPG',
	linkPrefix: '/about/',
	dir: 'about',
	sidebar: [
		{
			text: '台前 TRPG',
			icon: 'mingcute:pray-line',
			collapsed: false,
			items: ['preparation', 'help', 'sample'],
		},
		{
			text: '神官 ー 信観',
			icon: 'mingcute:pray-line',
			prefix: 'shinkan42',
			collapsed: false,
			items: ['appointment', 'contact'],
		},
		{
			text: '资源资料',
			icon: 'ic:baseline-download',
			prefix: 'ref',
			collapsed: false,
			items: ['bgm', 'sfx'],
		},
	],
});
