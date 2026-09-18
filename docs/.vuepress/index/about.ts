import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: 'Role Initiative',
	linkPrefix: '/about/',
	dir: 'about',
	sidebar: [
		{
			text: '🤝 约团相关',
			collapsed: false,
			items: ['contact','appointment', 'preparation'],
		},
		{
			text: '🎧 资源资料',
			prefix: 'ref',
			collapsed: false,
			items: ['bgm', 'sfx'],
		},
		{
			text: '📜 通用村规',
			collapsed: false,
			items: ['tarot'],
		},
	],
});
