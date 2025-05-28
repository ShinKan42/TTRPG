import { defineNoteConfig } from 'vuepress-theme-plume';

export const About = defineNoteConfig({
	link: '/about/',
	dir: 'about',
	sidebar: [
		{
			text: '跑团热线',
			icon: 'mingcute:pray-line',
			collapsed: false,
			items: [
				'preparation',
				'help',
				'sample',
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
					items: ['bgm'],
				},
			],
		},
	],
});
