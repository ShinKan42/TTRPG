import { defineCollections } from 'vuepress-theme-plume';

import COC from './rule/coc.ts';
import DND5R from './rule/dnd5r.ts';
import CyberpunkRed from './rule/cyberpunkred.ts';
import Avatar from './rule/avatar.ts';

import Modules from './modules.ts';

import About from './about.ts';

import PL_The_Show_Must_Go_On from './pl_ref_index/the_show_must_go_on.ts';
import GM_The_Show_Must_Go_On from './gm_ref_index/the_show_must_go_on.ts';

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
