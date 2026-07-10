import { defineCollection } from 'vuepress-theme-plume';

export default defineCollection({
    type: 'doc',
    title: '黄金宝库之钥',
    linkPrefix: '/module/gm_ref/dnd_5r/keys_from_the_golden_vault/',
    dir: 'module/gm_ref/dnd_5r/keys_from_the_golden_vault',
    sidebar: [
        'index',
        {
            text: '01 — 黯沉泥沼的毒牙',
            icon: 'game-icons:treasure-map',
            prefix: '01_venom_of_the_dark_mire',
            collapsed: true,
            items: [
                'index',
                '01_dannells_request',
                '02_day_recon',
                '03_exhibition_gap',
                '04_auction',
                '05_after_hours',
            ],
        },
    ],
});
