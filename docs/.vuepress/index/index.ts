import { defineNotesConfig } from 'vuepress-theme-plume';

import { COC } from './rule/coc';
import { DND } from './rule/dnd';
import { Cyberpunk } from './rule/cyberpunk';
import { Avatar } from './rule/avatar';

import { Modules } from './modules';

import { About } from './about';

import { PL_Kamen_Rider } from './pl_ref_index/kamen_rider';
import { GM_Kamen_Rider } from './gm_ref_index/kamen_rider';

export const NotesConfig = defineNotesConfig({
	notes: [
		COC,
		DND,
		Cyberpunk,
		Avatar,
		Modules,
		About,
		PL_Kamen_Rider,
		GM_Kamen_Rider,
	],
});
