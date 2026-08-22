import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '末日剑湾',
	dir: 'prep/dnd_5r/doomed_sword_coast',
	sidebar: [
		'index',
		'academy_of_adventure',
		'vecna_rise',
		'vecna_fall',
		'legacy_of_vecna',
		'reign_of_rot',
		'wrath_of_zuggtmoy',
		'blood_war',
		'geography',
	],
});
