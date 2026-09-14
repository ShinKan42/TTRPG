import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '湮灭之墓×毁灭前夜',
	dir: 'prep/dnd_5r/tomb_of_annihilation_eve_of_ruin',
	sidebar: [
		{ text: '总览', link: 'index' },
		{
			text: '湮灭之墓',
			collapsed: true,
			items: [
				{ text: '总览', link: 'toa' },
				{ text: '第一章 南扎路港', link: 'toa_1' },
			],
		},
		{
			text: '毁灭前夜',
			collapsed: true,
			items: [],
		},
	],
});
