import { defineNotesConfig } from "vuepress-theme-plume";

import { DND } from "./dnd";
import { Cyberpunk } from "./cyberpunk";
import { Avatar } from "./avatar";

import { Modules } from "./modules";
import { PL_Ref_Index } from "./pl_ref_index";
import { GM_Ref_Index } from "./gm_ref_index";

import { HotLine } from "./hotline";

export const NotesConfig = defineNotesConfig({
	notes: [DND, Cyberpunk, Avatar, Modules, HotLine, PL_Ref_Index, GM_Ref_Index],
});
