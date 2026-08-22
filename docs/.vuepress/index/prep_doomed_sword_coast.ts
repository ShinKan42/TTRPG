import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '末日剑湾',
	dir: 'prep/dnd_5r/doomed_sword_coast',
	sidebar: [
		'index',
		{
			text: '⚔️ 主线：维克那四部曲',
			prefix: '/',
			items: ['academy_of_adventure', 'vecna_rise', 'vecna_fall', 'legacy_of_vecna'],
		},
		{
			text: '🕳️ 末日幽暗地域线',
			prefix: '/',
			items: ['reign_of_rot', 'wrath_of_zuggtmoy', 'blood_war'],
		},
		'geography',
	],
});
