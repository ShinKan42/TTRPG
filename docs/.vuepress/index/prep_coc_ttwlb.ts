import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '我们留下的东西',
	dir: 'prep/coc/the_things_we_leave_behind',
	sidebar: ['index',
		{
			text: '在跑的团 · 周二日落',
			collapsed: false,
			items: [
				{ text: '约团入口', link: 'game_entry' },
				{ text: '瓢虫，瓢虫，飞回家', link: 'ladybug_ladybug_fly_away_home' },
				{ text: '玩家 Handouts', link: 'handouts' },
			],
		},
		{
			text: '资料 · 全球新闻社',
			collapsed: false,
			items: [
				{ text: '组织页', link: 'global_news_service' },
				{ text: '战役框架', link: 'global_news_service_reading' },
			],
		},
	],
});
