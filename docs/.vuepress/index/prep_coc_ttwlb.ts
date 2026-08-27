import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '我们留下的东西',
	dir: 'prep/coc/the_things_we_leave_behind',
	sidebar: ['index',
  'game_entry', 'ladybug_ladybug_fly_away_home', 'global_news_service',
  'global_news_service_reading', 'handouts'],
});
