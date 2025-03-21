import { defineNotesConfig } from "vuepress-theme-plume";
import { DND } from "./dnd";
import { Cyberpunk } from "./cyberpunk";
import { Avatar } from "./avatar";
import { Modules } from "./modules";
import { HotLine } from "./HotLine";
import { GM_Ref } from "./gm_ref";

export const NotesConfig = defineNotesConfig({
	notes: [DND, Cyberpunk, Avatar, Modules, HotLine, GM_Ref],
});
