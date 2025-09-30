import { defineNoteConfig } from 'vuepress-theme-plume';

export const GM_The_Show_Must_Go_On = defineNoteConfig({
	link: '/module/gm_ref/the_show_must_go_on/',
	dir: 'module/gm_ref/the_show_must_go_on',
	sidebar: [
		'index',
		'emerald_bar',
		'1_game_of_love',
		'z_love_letter',
		'a_queen',
		{
			text: 'Royales of Four',
			icon: 'fa6-regular:chess-queen',
			prefix: 'd_royales_of_four',
			collapsed: true,
			items: ['killer_queen', 'black_queen', 'white_queen'],
		},
		{
			text: '重点人物',
			icon: 'token:npc',
			prefix: 'b_key_npc',
			collapsed: true,
			items: ['radio_ga_ga', 'the_invisible_man', 'the_prophet'],
		},
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
			items: ['index', '2_roleplay', 'd_encounter', 'e_magic_item'],
		},
		{
			text: 'Too Much Love Will Kill You',
			icon: 'mingcute:love-fill',
			prefix: 'too_much_love_will_kill_you',
			collapsed: true,
			items: ['index', '2_roleplay', 'e_magic_item'],
		},
	],
});
