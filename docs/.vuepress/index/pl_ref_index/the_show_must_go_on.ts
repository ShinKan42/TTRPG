import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
	type: 'doc',
	title: 'The Show Must Go On',
	linkPrefix: '/module/pl_ref/the_show_must_go_on/',
	dir: 'module/pl_ref/the_show_must_go_on',
	sidebar: [
		'index',
		'emerald_bar',
		'1_game_of_love',
		'z_love_letter',
		{
			text: '魔法物品',
			icon: 'mdi:magic-staff',
			prefix: 'e_magic_item',
			collapsed: true,
			items: ['consumable', 'toy', 'functional', 'power'],
		},
		'dragon_attack',
		'too_much_love_will_kill_you',
	],
});
