import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '湮灭之墓×毁灭前夜',
	dir: 'prep/dnd_5r/tomb_of_annihilation_eve_of_ruin',
	sidebar: ['index',
		{
			text: '湮灭之墓',
			items: [
				{ text: '第1章 · 南扎路港', link: 'toa_1' },
				{ text: '第2章 · 楚尔特大地', link: 'toa_2' },
				{ text: '第3章 · 禁城栖居者', link: 'toa_3' },
				{ text: '第4章 · 暗夜巨蛇神殿', link: 'toa_4' },
				{ text: '第5章 · 九神之墓', link: 'toa_5' },
			],
		},
		{
			text: '维克那：毁灭前夜',
			items: [
				{ text: '第2章 · 三人巫师会', link: 'eor_2' },
				{ text: '第3章 · 光际号', link: 'eor_3' },
				{ text: '第4章 · 朽坏巨像', link: 'eor_4' },
				{ text: '第5章 · 死亡之屋', link: 'eor_5' },
				{ text: '第6章 · 蓝火之夜', link: 'eor_6' },
				{ text: '第7章 · 无羁魂冢', link: 'eor_7' },
				{ text: '第8章 · 龙后之傲', link: 'eor_8' },
				{ text: '第9章 · 揭露背叛者', link: 'eor_9' },
				{ text: '第10章 · 喧癫空野之战', link: 'eor_10' },
				{ text: '第11章 · 毁灭前夜', link: 'eor_11' },
			],
		},
	],
});
