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
			items: [
			{ text: '联系方式 📮', link: 'contact' },
			{ text: '约团方式 📅', link: 'appointment' },
			{ text: '跑团怎么玩 ❔', link: 'preparation' },
		],
		},
		{
			text: '🎧 资源资料',
			prefix: 'ref',
			collapsed: false,
			items: [
			{ text: '背景音乐 🎵', link: 'bgm' },
			{ text: '实用音效 🔊', link: 'sfx' },
		],
		},
		{
			text: '📜 通用村规',
			collapsed: false,
			items: [{ text: '塔罗牌 🔮', link: 'tarot' }],
		},
	],
});
