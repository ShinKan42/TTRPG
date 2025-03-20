import { defineNotesConfig } from 'vuepress-theme-plume'
import { DND } from './dnd'
import { Cyberpunk } from './cyberpunk'
import { Avatar } from './avatar'
import { Modules } from './modules'
import { HotLine } from './HotLine'

export const NotesConfig = defineNotesConfig({
  dir: 'guides',
  link: '/guides/',
  notes: [
    DND,
    Cyberpunk,
    Avatar,
    Modules,
    HotLine
  ],
})