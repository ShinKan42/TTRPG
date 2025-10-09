import { defineCollections } from 'vuepress-theme-plume';

import COC from './rule/coc';
import DND5R from './rule/dnd5r';
import CyberpunkRed from './rule/cyberpunkred';
import Avatar from './rule/avatar';

import Modules from './modules';

import About from './about';

import PL_The_Show_Must_Go_On from './pl_ref_index/the_show_must_go_on';
import GM_The_Show_Must_Go_On from './gm_ref_index/the_show_must_go_on';

export default defineCollections([
	COC,
	DND5R,
	CyberpunkRed,
	Avatar,
	Modules,
	About,
	PL_The_Show_Must_Go_On,
	GM_The_Show_Must_Go_On,
]);
