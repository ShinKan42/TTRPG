import { defineNotesConfig } from "vuepress-theme-plume";
import { Gm_Ref } from "./gm_ref";
import { Guide } from "./guide";

export const NotesConfig = defineNotesConfig({
	dir: "",
	link: "",
	notes: [Guide, Gm_Ref],
});
