import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '末日剑湾',
	dir: 'prep/dnd_5r/doomed_sword_coast',
	sidebar: ['index', 'geography',
		{
			text: '维克那四部曲',
			items: ['academy_of_adventure', 'vecna_rise', 'vecna_fall', 'legacy_of_vecna'],
		},
		{
			text: '末日幽暗地域',
			items: [
				{ text: '腐化王朝', collapsed: false, items: [{ text: '总览', link: 'reign_of_rot' }, { text: '卷一 · 序幕+蘑菇与恶意', link: 'reign_of_rot_1' }, { text: '卷二 · 曼塔德里斯', link: 'reign_of_rot_2' }] },
				'wrath_of_zuggtmoy',
				'blood_war',
			],
		},
	],
});
