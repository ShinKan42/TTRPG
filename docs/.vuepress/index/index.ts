import { defineCollections } from 'vuepress-theme-plume';

import COC_7 from './rule/coc_7.ts';
import Dagger_Heart from './rule/dagger_heart.ts';
import DND_5R from './rule/dnd_5r.ts';
import Cyberpunk_Red from './rule/cyberpunk_red.ts';
import Avatar_Legend from './rule/avatar_legend.ts';

import Modules from './modules.ts';
import Prep from './prep.ts';
import PrepDragonDelves from './prep_dragon_delves.ts';
import PrepKftgv from './prep_kftgv.ts';
import PrepStormwrack from './prep_stormwrack.ts';
import PrepDeathsHouse from './prep_deaths_house.ts';
import PrepCurseOfStrahd from './prep_curse_of_strahd.ts';
import PrepDescentIntoAvernus from './prep_descent_into_avernus.ts';

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
	Prep,
	PrepDragonDelves,
	PrepKftgv,
	PrepStormwrack,
	PrepDeathsHouse,
	PrepCurseOfStrahd,
	PrepDescentIntoAvernus,
	Log,
	About,
	//
]);
