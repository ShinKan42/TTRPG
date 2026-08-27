import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '我们搁置之事',
	dir: 'prep/coc/the_things_we_leave_behind',
	sidebar: ['index',
		{
			text: '📰 全球新闻社',
			collapsed: false,
			items: [
				{ text: '组织页', link: 'global_news_service' },
				{ text: '模组之后', link: 'global_news_service_aftermath' },
			],
		},
		{
			text: '🐞 模组详情',
			collapsed: false,
			items: [
				{ text: '瓢虫，瓢虫，飞回家', link: 'ladybug_ladybug_fly_away_home' },
			],
		},
	],
});
