import { defineNotesConfig } from 'vuepress-theme-plume';

import { COC } from './coc';
import { DND } from './dnd';
import { Cyberpunk } from './cyberpunk';
import { Avatar } from './avatar';
import { Misc } from './misc';

import { Modules } from './modules';

import { PL_Ref_Index } from './pl_ref_index';
import { GM_Ref_Index } from './gm_ref_index';

import { PL_Ref_List } from './pl_ref_index/pl_ref_list';
import { GM_Ref_List } from './gm_ref_index/gm_ref_list';

import { About } from './about';

export const NotesConfig = defineNotesConfig({
	notes: [
		COC,
		DND,
		Cyberpunk,
		Avatar,
		Misc,
		Modules,
		PL_Ref_Index,
		GM_Ref_Index,
		PL_Ref_List,
		GM_Ref_List,
		About,
	],
});
