import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: 'Role Initiative',
	linkPrefix: '/about/',
	dir: 'about',
	sidebar: [
		{
			text: '约团相关',
			icon: 'mingcute:pray-line',
			collapsed: false,
			items: ['contact','appointment', 'preparation'],
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
