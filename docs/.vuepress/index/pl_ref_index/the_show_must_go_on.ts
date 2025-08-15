import { defineNoteConfig } from 'vuepress-theme-plume';

export const PL_The_Show_Must_Go_On = defineNoteConfig({
	link: '/module/pl_ref/the_show_must_go_on/',
	dir: 'module/pl_ref/the_show_must_go_on',
	sidebar: [
		'intro',
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
		{
			text: 'Dragon_Attack',
			icon: 'simple-icons:redragon',
			prefix: 'dragon_attack',
			collapsed: true,
			items: ['intro', '2_roleplay', 'd_encounter', 'e_magic_item'],
		},
	],
});
