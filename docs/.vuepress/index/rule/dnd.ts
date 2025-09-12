import { defineNoteConfig } from 'vuepress-theme-plume';

export const DND = defineNoteConfig({
	link: '/rule/dnd/',
	dir: 'rule/dnd',
	sidebar: [
		{
			text: '新手指南',
			icon: 'icon-park-twotone:guide-board',
			prefix: 'guide',
			collapsed: false,
			items: [
				'preparation',
				'character_creation',
				'quick_roll',
				'roleplay',
				'combat',
				'faq',
			],
		},
		{
			text: '资料信息',
			icon: 'icon-park-twotone:guide-board',
			collapsed: false,
			items: [
				{
					text: '职业',
					icon: 'ic:outline-hotel-class',
					prefix: 'class',
					collapsed: true,
					items: ['pdf', 'bilibili', 'youtube'],
				},
				{
					text: '种族',
					icon: 'material-symbols-light:genetics-rounded',
					prefix: 'race',
					collapsed: true,
					items: ['pdf', 'bilibili', 'youtube'],
				},
				{
					text: '专长',
					icon: 'game-icons:fist',
					prefix: 'feat',
					collapsed: true,
					items: ['pdf', 'bilibili', 'youtube'],
				},
				{
					text: '法术',
					icon: 'game-icons:floating-crystal',
					prefix: 'spell',
					collapsed: true,
					items: ['pdf', 'bilibili', 'youtube'],
				},
				'skill',
				'tool',
				'condition',
				'bastion',
			],
		},
		{
			text: '其他资料',
			icon: 'material-symbols:quick-reference-all',
			collapsed: false,
			prefix: 'ref',
			items: [
				{
					text: 'ACG 角色',
					icon: 'game-icons:crystal-wand',
					prefix: 'acg',
					collapsed: true,
					items: ['pdf', 'bilibili', 'youtube'],
				},
				{
					text: '神官村规',
					icon: 'healthicons:village-24px',
					prefix: '嵌入',
					collapsed: true,
					items: ['pdf', 'bilibili', 'youtube'],
				},
			],
		},
	],
});
