import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '模组一览',
	linkPrefix: '/module/',
	dir: 'module',
	sidebar: [
		'menu/index',
		{
			text: '🐉 奇幻类',
			collapsed: false,
			items: ['menu/dnd_5r'],
		},
	],
});
