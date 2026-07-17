import { defineCollections } from 'vuepress-theme-plume';

import COC_7 from './rule/coc_7.ts';
import Dagger_Heart from './rule/dagger_heart.ts';
import DND_5R from './rule/dnd_5r.ts';
import Cyberpunk_Red from './rule/cyberpunk_red.ts';
import Avatar_Legend from './rule/avatar_legend.ts';

import Modules from './modules.ts';

import About from './about.ts';

import Log from './log.ts';

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
]);
