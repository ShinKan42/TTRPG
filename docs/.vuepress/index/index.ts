import { defineCollections } from 'vuepress-theme-plume';

import COC_7 from './rule/coc_7.ts';
import Dagger_Heart from './rule/dagger_heart.ts';
import DND_5R from './rule/dnd_5r.ts';
import Cyberpunk_Red from './rule/cyberpunk_red.ts';
import Avatar_Legend from './rule/avatar_legend.ts';

import Modules from './modules.ts';

import About from './about.ts';

import Log from './log.ts';

import PL_The_Show_Must_Go_On from './pl_ref_index/the_show_must_go_on.ts';
import GM_The_Show_Must_Go_On from './gm_ref_index/the_show_must_go_on.ts';

export default defineCollections([
	COC_7,
	Dagger_Heart,
	DND_5R,
	Cyberpunk_Red,
	Avatar_Legend,
	//
	Modules,
	Log,
	About,
	//
	PL_The_Show_Must_Go_On,
	GM_The_Show_Must_Go_On,
]);
