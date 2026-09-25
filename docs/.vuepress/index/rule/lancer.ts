import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '枪骑兵 Lancer',
	linkPrefix: '/rule/lancer/',
	dir: 'rule/lancer',
	sidebar: [
		{
			text: '系统总览 ⚙️',
			link: 'index',
		},
		{
			text: '📖 新手指南',
			prefix: 'guide',
			collapsed: false,
			items: [{ text: 'Lancer 怎么玩 ❔', link: 'about' }],
		},
	],
});
