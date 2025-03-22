import { defineNotesConfig } from "vuepress-theme-plume";

import { DND } from "./dnd";
import { Cyberpunk } from "./cyberpunk";
import { Avatar } from "./avatar";
import { Modules } from "./modules";
import { HotLine } from "./hotline";

import { PL_Ref } from "./pl_ref";
import { GM_Ref } from "./gm_ref";

export const NotesConfig = defineNotesConfig({
	notes: [DND, Cyberpunk, Avatar, Modules, HotLine, PL_Ref, GM_Ref],
});
