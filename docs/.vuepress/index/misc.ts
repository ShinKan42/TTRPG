import { defineNoteConfig } from 'vuepress-theme-plume';

export const Misc = defineNoteConfig({
	link: '/rule/misc/',
	dir: 'rule/misc',
	sidebar: [
		{
			text: '轻量规则',
			icon: 'fluent:style-guide-24-regular',
			collapsed: false,
			items: [
				'index',
				{
					text: 'DND（WIP）',
					icon: 'simple-icons:dungeonsanddragons',
					prefix: 'dnd',
					collapsed: false,
					items: ['index'],
				},
			],
		},
	],
});
