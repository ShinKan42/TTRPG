import { defineCollections } from 'vuepress-theme-plume';

import COC_7 from './rule/coc_7.ts';
import Dagger_Heart from './rule/dagger_heart.ts';
import DND_5R_PlayerOption from './rule/dnd_5r_player_option.ts';
import DND_5R from './rule/dnd_5r.ts';
import Cyberpunk_Red from './rule/cyberpunk_red.ts';
import Avatar_Legend from './rule/avatar_legend.ts';
import AOS_Soulbound from './rule/aos.ts';
import Lancer from './rule/lancer.ts';

import Modules from './modules.ts';
import Prep from './prep.ts';



import PrepTombVecna from './prep_tomb_vecna.ts';
import PrepDragonDelves from './prep_dragon_delves.ts';




import PrepCoc from './prep_coc.ts';
import PlRef from './pl_ref.ts';
import PrepCocTtwlb from './prep_coc_ttwlb.ts';
import PrepDmToolbox from './prep_dm_toolbox.ts';

import About from './about.ts';

import Log from './log.ts';

export default defineCollections([
	COC_7,
	Dagger_Heart,
	DND_5R_PlayerOption,
	DND_5R,
	Cyberpunk_Red,
	Avatar_Legend,
	AOS_Soulbound,
	Lancer,
	//
	Modules,
	Prep,



	PrepTombVecna,
	PrepDragonDelves,




	PrepCoc,
	PrepCocTtwlb,
	PrepDmToolbox,
	PlRef,
	Log,
	About,
	//
]);
