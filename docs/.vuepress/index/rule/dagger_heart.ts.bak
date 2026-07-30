import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: '匕首之心',
	linkPrefix: '/rule/dagger_heart/',
	dir: 'rule/dagger_heart',
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
				'general_rule',
				'faq',
			],
		},
		{
			text: '资料信息',
			icon: 'prime:book',
			collapsed: false,
			prefix: 'brief_ref',
			items: [
				{
					text: '职业',
					icon: 'ic:outline-hotel-class',
					prefix: 'class',
					collapsed: true,
					items: [
						'index',
						'fighter',
						'rogue',
						'ranger',
						'guardian',
						'druid',
						'seraph',
						'bard',
						'sorcerer',
						'wizard',
					],
				},
				'ancestry',
				'community',
				'domain',
				'item',
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
					prefix: 'acg_character',
					collapsed: true,
					items: ['index', 'madoka_magica', '1999'],
				},
				{
					text: '官方 - 战役框架',
					icon: 'healthicons:village-24px',
					prefix: 'vanilla_campaign',
					collapsed: true,
					items: ['index'],
				},
				{
					text: '官方 - 战役框架',
					icon: 'healthicons:village-24px',
					prefix: 'shinkan_campaign',
					collapsed: true,
					items: ['index'],
				},
			],
		},
	],
});
