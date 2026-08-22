// docs/.vuepress/config.ts
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";

// docs/.vuepress/index/index.ts
import { defineCollections } from "vuepress-theme-plume";

// docs/.vuepress/index/rule/coc_7.ts
import { defineCollection } from "vuepress-theme-plume";
var coc_7_default = defineCollection({
  type: "doc",
  title: "COC",
  linkPrefix: "/rule/coc/",
  dir: "rule/coc",
  sidebar: [
    {
      text: "\u{1F4D6} \u65B0\u624B\u6307\u5357",
      prefix: "guide",
      collapsed: false,
      items: [
        { text: "COC \u600E\u4E48\u73A9 \u2754", link: "about" },
        { text: "\u8F66\u5361\u6307\u5357 \u{1F4D6}", link: "character_creation" },
        { text: "\u5E38\u7528\u9AB0\u6CD5 \u{1F3B2}", link: "quick_roll" },
        { text: "\u7406\u667A\u4E0E\u75AF\u72C2 \u{1F9E0}", link: "sanity" },
        { text: "\u6218\u6597 \u2694\uFE0F", link: "combat" },
        { text: "\u5E38\u89C1\u95EE\u9898 \u2753", link: "faq" }
      ]
    },
    {
      text: "\u{1F4DA} \u8D44\u6599\u901F\u67E5",
      prefix: "guide",
      collapsed: false,
      items: [
        { text: "\u6280\u80FD\u8868 \u{1F4CB}", link: "skills_table" },
        { text: "\u804C\u4E1A\u8868 \u{1F393}", link: "jobs_table" },
        { text: "\u6B66\u5668\u8868 \u{1F52B}", link: "weapons_table" }
      ]
    }
  ]
});

// docs/.vuepress/index/rule/dagger_heart.ts
import { defineCollection as defineCollection2 } from "vuepress-theme-plume";
var dagger_heart_default = defineCollection2({
  type: "doc",
  title: "\u5315\u9996\u4E4B\u5FC3 \u{1F6A7}",
  linkPrefix: "/rule/dagger_heart/",
  dir: "rule/dagger_heart",
  sidebar: [
    {
      text: "\u{1F4D6} \u65B0\u624B\u6307\u5357 \u{1F6A7}",
      prefix: "guide",
      collapsed: false,
      items: [
        "about",
        "character_creation",
        "quick_roll",
        "general_rule",
        "roleplay",
        "faq"
      ]
    },
    {
      text: "\u{1F517} \u8D44\u6599\u7AD9\u8DF3\u8F6C \u{1F6A7}",
      collapsed: false,
      items: [
        { text: "\u89C4\u5219\u901F\u67E5 \u26A1", link: "https://daggerheart.huijiwiki.com/wiki/%E8%A7%84%E5%88%99%E9%80%9F%E6%9F%A5" },
        { text: "\u804C\u4E1A \u{1F5E1}\uFE0F", link: "https://daggerheart.huijiwiki.com/wiki/%E5%88%86%E7%B1%BB:%E8%81%8C%E4%B8%9A" },
        { text: "\u79CD\u65CF \u{1F9DD}", link: "https://daggerheart.huijiwiki.com/wiki/%E5%88%86%E7%B1%BB:%E7%A7%8D%E6%97%8F" },
        { text: "\u793E\u7FA4 \u{1F3D8}\uFE0F", link: "https://daggerheart.huijiwiki.com/wiki/%E5%88%86%E7%B1%BB:%E7%A4%BE%E7%BE%A4" },
        { text: "\u9886\u57DF \u{1F4DC}", link: "https://daggerheart.huijiwiki.com/wiki/%E9%A2%86%E5%9F%9F%E5%8D%A1" },
        { text: "\u88C5\u5907 \u{1F392}", link: "https://daggerheart.huijiwiki.com/wiki/%E8%A3%85%E5%A4%87" }
      ]
    },
    {
      text: "\u{1F3AC} \u6218\u5F79\u6846\u67B6 \u{1F6A7}",
      collapsed: false,
      items: [
        { text: "\u5B98\u65B9 \u{1F4D6}", link: "https://daggerheart.huijiwiki.com/wiki/%E6%88%98%E5%BD%B9%E6%A1%86%E6%9E%B6" },
        { text: "\u793E\u533A \u{1F91D}", link: "https://www.daggerheart.com/wp-content/uploads/2025/07/Daggerheart-Homebrew-Kit-v1.0-July-31-2025.pdf" },
        { text: "\u795E\u5B98\u81EA\u5236 \u{1F464} \u{1F6A7}", link: "/rule/dagger_heart/home_brew/" }
      ]
    }
  ]
});

// docs/.vuepress/index/rule/dnd_5r.ts
import { defineCollection as defineCollection3 } from "vuepress-theme-plume";
var dnd_5r_default = defineCollection3({
  type: "doc",
  title: "DND-5R",
  linkPrefix: "/rule/dnd_5r/",
  dir: "rule/dnd_5r",
  sidebar: [
    {
      text: "\u{1F4D6} \u65B0\u624B\u6307\u5357",
      prefix: "guide",
      collapsed: false,
      items: [
        { text: "DND \u600E\u4E48\u73A9 \u2754", link: "about" },
        { text: "\u804C\u4E1A\u9009\u62E9 \u{1F5E1}\uFE0F", link: "/rule/dnd_5r/class/guide" },
        { text: "\u8F66\u5361\u6307\u5357 \u{1F4D6}", link: "character_creation" },
        { text: "\u5E38\u7528\u9AB0\u6CD5 \u{1F3B2}", link: "quick_roll" },
        { text: "\u626E\u6F14 \u{1F3AD}", link: "roleplay" },
        { text: "\u6218\u6597 \u2694\uFE0F", link: "combat" },
        { text: "\u5E38\u89C1\u95EE\u9898 \u2753", link: "faq" }
      ]
    },
    {
      text: "\u{1F517} \u8D44\u6599\u7AD9\u8DF3\u8F6C",
      collapsed: false,
      items: [
        { text: "\u79CD\u65CF \u{1F9DD}", link: "https://5e.kiwee.top/races.html" },
        { text: "\u4E13\u957F \u{1F4AA}", link: "https://5e.kiwee.top/feats.html" },
        { text: "\u6CD5\u672F \u2728", link: "https://5e.kiwee.top/spells.html" },
        { text: "\u7269\u54C1 \u{1F392}", link: "https://5e.kiwee.top/items.html" },
        { text: "\u636E\u70B9 \u{1F3F0}", link: "https://5e.kiwee.top/book.html#xdmg" },
        { text: "\u4E0D\u5168\u4E66 \u{1F4D6}", link: "https://5echm.kagangtuya.top/" }
      ]
    },
    {
      text: "\u{1F4DA} \u66F4\u591A\u8D44\u6599",
      collapsed: false,
      items: [
        {
          text: "\u5B98\u65B9\u8D44\u6599 \u{1F4D6}",
          prefix: "official",
          collapsed: true,
          items: [
            "index",
            { text: "\u4E09\u9F99\u724C \u{1F409}", link: "three_dragon_ante" }
          ]
        },
        {
          text: "\u793E\u533A\u8D44\u6599 \u{1F91D} \u{1F6A7}",
          prefix: "community",
          collapsed: true,
          items: [
            "index"
          ]
        }
      ]
    },
    {
      text: "\u{1F464} \u795E\u5B98 \u30FC \u4FE1\u89B3",
      collapsed: false,
      prefix: "home_brew",
      items: [
        {
          text: "ACG \u89D2\u8272 \u{1F3AD}",
          prefix: "acg",
          collapsed: true,
          items: ["index", "madoka_magica", "1999"]
        },
        {
          text: "\u6751\u89C4 \u{1F4DC}",
          prefix: "shinkan_house_rule",
          collapsed: true,
          items: [
            "index",
            { text: "\u5854\u7F57\u724C \u{1F52E}", link: "https://5e.kiwee.top/decks.html#%e5%a1%94%e7%bd%97%e7%89%8c_td" },
            "dungeon_meshi"
          ]
        },
        {
          text: "DLC \u{1F4E6}",
          prefix: "shinkan_dlc",
          collapsed: true,
          items: ["index", "kamen_rider"]
        }
      ]
    }
  ]
});

// docs/.vuepress/index/rule/cyberpunk_red.ts
import { defineCollection as defineCollection4 } from "vuepress-theme-plume";
var cyberpunk_red_default = defineCollection4({
  type: "doc",
  title: "\u8D5B\u535A\u670B\u514B\uFF1A\u7EA2",
  linkPrefix: "/rule/cyberpunk/",
  dir: "rule/cyberpunk"
});

// docs/.vuepress/index/rule/avatar_legend.ts
import { defineCollection as defineCollection5 } from "vuepress-theme-plume";
var avatar_legend_default = defineCollection5({
  type: "doc",
  title: "\u964D\u4E16\u795E\u901A",
  linkPrefix: "/rule/avatar/",
  dir: "rule/avatar"
});

// docs/.vuepress/index/modules.ts
import { defineCollection as defineCollection6 } from "vuepress-theme-plume";
var modules_default = defineCollection6({
  type: "doc",
  title: "\u6A21\u7EC4\u4E00\u89C8",
  linkPrefix: "/module/",
  dir: "module",
  sidebar: [
    "menu/index",
    "menu/collection",
    {
      text: "\u{1F409} \u5947\u5E7B\u7C7B",
      collapsed: false,
      items: ["menu/dnd_5r", "menu/dagger_heart"]
    }
  ]
});

// docs/.vuepress/index/prep.ts
import { defineCollection as defineCollection7 } from "vuepress-theme-plume";
var prep_default = defineCollection7({
  type: "doc",
  title: "\u5907\u56E2\u603B\u7D22\u5F15",
  dir: "prep/menu",
  sidebar: ["index", "dnd_5r"]
});

// docs/.vuepress/index/prep_dragon_delves.ts
import { defineCollection as defineCollection8 } from "vuepress-theme-plume";
var prep_dragon_delves_default = defineCollection8({
  type: "doc",
  title: "\u5DE8\u9F99\u8FF7\u57CE",
  dir: "prep/dnd_5r/dragon_delves",
  sidebar: ["index", "bakers_doesnt"]
});

// docs/.vuepress/index/prep_kftgv.ts
import { defineCollection as defineCollection9 } from "vuepress-theme-plume";
var prep_kftgv_default = defineCollection9({
  type: "doc",
  title: "\u9EC4\u91D1\u5B9D\u5E93\u4E4B\u94A5",
  dir: "prep/dnd_5r/kftgv",
  sidebar: ["index", "the_murkmire_malevolence", "reach_for_the_stars", "party_at_paliset_hall"]
});

// docs/.vuepress/index/prep_stormwrack.ts
import { defineCollection as defineCollection10 } from "vuepress-theme-plume";
var prep_stormwrack_default = defineCollection10({
  type: "doc",
  title: "\u98CE\u9AB8\u5C9B\u4E4B\u9F99",
  dir: "prep/dnd_5r/dragons_of_stormwrack_isle",
  sidebar: ["index"]
});

// docs/.vuepress/index/prep_deaths_house.ts
import { defineCollection as defineCollection11 } from "vuepress-theme-plume";
var prep_deaths_house_default = defineCollection11({
  type: "doc",
  title: "\u6B7B\u4EA1\u4E4B\u5C4B",
  dir: "prep/dnd_5r/deaths_house",
  sidebar: ["index", "deaths_house"]
});

// docs/.vuepress/index/prep_curse_of_strahd.ts
import { defineCollection as defineCollection12 } from "vuepress-theme-plume";
var prep_curse_of_strahd_default = defineCollection12({
  type: "doc",
  title: "\u65BD\u7279\u62C9\u5FB7\u7684\u8BC5\u5492",
  dir: "prep/dnd_5r/curse_of_strahd",
  sidebar: ["index"]
});

// docs/.vuepress/index/prep_descent_into_avernus.ts
import { defineCollection as defineCollection13 } from "vuepress-theme-plume";
var prep_descent_into_avernus_default = defineCollection13({
  type: "doc",
  title: "\u5760\u5165\u963F\u5F17\u7EB3\u65AF",
  dir: "prep/dnd_5r/descent_into_avernus",
  sidebar: ["index"]
});

// docs/.vuepress/index/prep_doomed_sword_coast.ts
import { defineCollection as defineCollection14 } from "vuepress-theme-plume";
var prep_doomed_sword_coast_default = defineCollection14({
  type: "doc",
  title: "\u672B\u65E5\u5251\u6E7E",
  dir: "prep/dnd_5r/doomed_sword_coast",
  sidebar: [
    "index",
    "geography",
    {
      text: "\u7EF4\u514B\u90A3\u56DB\u90E8\u66F2",
      prefix: "/",
      items: ["academy_of_adventure", "vecna_rise", "vecna_fall", "legacy_of_vecna"]
    },
    {
      text: "\u672B\u65E5\u5E7D\u6697\u5730\u57DF",
      prefix: "/",
      items: [
        { text: "\u8150\u5316\u738B\u671D", prefix: "/", collapsed: false, items: ["reign_of_rot", "reign_of_rot_ch5"] },
        "wrath_of_zuggtmoy",
        "blood_war"
      ]
    }
  ]
});

// docs/.vuepress/index/about.ts
import { defineCollection as defineCollection15 } from "vuepress-theme-plume";
var about_default = defineCollection15({
  type: "doc",
  title: "Role Initiative",
  linkPrefix: "/about/",
  dir: "about",
  sidebar: [
    {
      text: "\u7EA6\u56E2\u76F8\u5173",
      icon: "mingcute:pray-line",
      collapsed: false,
      items: ["contact", "appointment", "preparation"]
    },
    {
      text: "\u8D44\u6E90\u8D44\u6599",
      icon: "ic:baseline-download",
      prefix: "ref",
      collapsed: false,
      items: ["bgm", "sfx"]
    }
  ]
});

// docs/.vuepress/index/log.ts
import { defineCollection as defineCollection16 } from "vuepress-theme-plume";
var log_default = defineCollection16({
  type: "post",
  title: "\u{1F4DC} \u56E2\u8BB0",
  linkPrefix: "/log/",
  dir: "log"
});

// docs/.vuepress/index/index.ts
var index_default = defineCollections([
  coc_7_default,
  dagger_heart_default,
  dnd_5r_default,
  cyberpunk_red_default,
  avatar_legend_default,
  //
  modules_default,
  prep_default,
  prep_dragon_delves_default,
  prep_kftgv_default,
  prep_stormwrack_default,
  prep_deaths_house_default,
  prep_curse_of_strahd_default,
  prep_descent_into_avernus_default,
  prep_doomed_sword_coast_default,
  log_default,
  about_default
  //
]);

// docs/.vuepress/config.ts
var isProd = process.env.NODE_ENV === "production";
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "# Role Initiative #",
  description: "by ShinKan42",
  bundler: viteBundler(),
  head: [
    // Google验证（直接粘贴从GSC复制的完整标签）
    ["meta", {
      name: "google-site-verification",
      content: "dAVp0f72P9QitJLdUdLt9xLrQoNKqTsYCGS_SJMH3AI"
    }],
    // 百度验证（自己组装，content值替换为你从百度获取的）
    ["meta", {
      name: "baidu-site-verification",
      content: "codeva-qsgrSAbOG4"
    }]
  ],
  theme: plumeTheme({
    // GM 备团文件夹加密（2026-08-14 DM 指令：密码 114514）
    encrypt: {
      rules: {
        "/prep/": "114514"
      }
    },
    // GM 备团加密页不进站内搜索（目录级过滤，防止搜索框泄露案卷标题/章节）
    search: {
      isSearchable: (page) => !page.path.startsWith("/prep/")
    },
    // 添加您的部署域名
    // hostname: 'https://your_site_url',
    hostname: "http://ttrpg.shinkan42.art/",
    // 默认 不启用，仅当 plugins.git 为 true 时生效
    // 此配置在 plume.config.ts 中无效
    changelog: {
      maxCount: 10,
      repoUrl: "https://github.com/ShinKan42/TTRPG",
      commitUrlPattern: ":repo/commit/:hash",
      issueUrlPattern: ":repo/issues/:issue",
      tagUrlPattern: ":repo/releases/tag/:tag"
    },
    // 默认启用，仅当 plugins.git 为 true 时生效
    // 此配置在 plume.config.ts 中无效
    contributors: {
      mode: "inline",
      avatarPattern: "https://github.com/:username.png"
    },
    autoFrontmatter: {
      permalink: false
    },
    collections: index_default,
    markdown: {
      demo: true,
      //   include: true,
      chartjs: true,
      markmap: true,
      //   echarts: true,
      mermaid: true,
      flowchart: true,
      table: {
        // 表格默认对齐方式 'left' | 'center' | 'right'
        align: "center",
        // 表格宽度是否为最大内容宽度
        // 行内元素不再自动换行，超出容器宽度时表格显示滚动条
        // 2026-08-18 改 false：max-content 让单元格永不换行，多列宽表总宽超视口→横向滚动条
        // false 后表格收缩到容器宽，中文单元格自动换行（站点级替代逐表手动 <br>）
        // 个别确需单行的表可单表加 max-content 参数豁免
        maxContent: false,
        /**
         * 复制为 html/markdown
         * true 相当于 `all`，相当于同时启用 html 和 markdown
         */
        copy: true
        // true | 'all' | 'html' | 'md'
      }
    },
    plugins: {
      // GM 备团页不进 sitemap（加密页不应被搜索引擎索引）
      // 注意：excludePaths 只支持精确路径；新增 prep 页时同步在页面 frontmatter 写 sitemap: false
      sitemap: {
        excludePaths: [
          "/prep/menu/",
          "/prep/menu/dnd_5r.html",
          "/prep/dnd_5r/kftgv/",
          "/prep/dnd_5r/kftgv/index.html",
          "/prep/dnd_5r/kftgv/reach_for_the_stars.html",
          "/prep/dnd_5r/kftgv/the_murkmire_malevolence.html",
          "/prep/dnd_5r/kftgv/party_at_paliset_hall.html",
          "/prep/dnd_5r/dragons_of_stormwrack_isle/",
          "/prep/dnd_5r/dragons_of_stormwrack_isle/index.html",
          "/prep/dnd_5r/dragon_delves/",
          "/prep/dnd_5r/dragon_delves/index.html",
          "/prep/dnd_5r/dragon_delves/bakers_doesnt.html",
          "/prep/dnd_5r/deaths_house/",
          "/prep/dnd_5r/deaths_house/index.html",
          "/prep/dnd_5r/curse_of_strahd/",
          "/prep/dnd_5r/curse_of_strahd/index.html",
          "/prep/dnd_5r/curse_of_strahd/ch1_2_into_the_mists.html",
          "/prep/dnd_5r/descent_into_avernus/",
          "/prep/dnd_5r/descent_into_avernus/index.html",
          "/prep/dnd_5r/doomed_sword_coast/",
          "/prep/dnd_5r/doomed_sword_coast/index.html",
          "/prep/dnd_5r/doomed_sword_coast/geography.html",
          "/prep/dnd_5r/doomed_sword_coast/reign_of_rot.html",
          "/prep/dnd_5r/doomed_sword_coast/reign_of_rot_ch5.html",
          "/prep/dnd_5r/doomed_sword_coast/vecna_rise.html",
          "/prep/dnd_5r/doomed_sword_coast/vecna_fall.html",
          "/prep/dnd_5r/doomed_sword_coast/academy_of_adventure.html",
          "/prep/dnd_5r/doomed_sword_coast/legacy_of_vecna.html",
          "/prep/dnd_5r/doomed_sword_coast/wrath_of_zuggtmoy.html",
          "/prep/dnd_5r/doomed_sword_coast/blood_war.html"
        ]
      },
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      // shiki: {
      // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      // },
      shiki: {
        langs: ["html", "css", "typescript", "javascript"]
      },
      // 如果您在此处直接声明为 true，则表示开发环境和生产环境都启用该功能
      git: true,
      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      // markdownPower: {
      //   pdf: true,
      //   caniuse: true,
      //   plot: true,
      //   bilibili: true,
      //   youtube: true,
      //   icons: true,
      //   codepen: true,
      //   replit: true,
      //   codeSandbox: true,
      //   jsfiddle: true,
      //   repl: {
      //     go: true,
      //     rust: true,
      //     kotlin: true,
      //   },
      // },
      markdownPower: {
        pdf: true,
        plot: true,
        bilibili: true,
        youtube: true,
        icons: true,
        imageSize: true,
        fileTree: true,
        abbr: true,
        annotation: true,
        field: true,
        timeline: true,
        artPlayer: true
      }
      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    }
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2luZGV4L2luZGV4LnRzIiwgImRvY3MvLnZ1ZXByZXNzL2luZGV4L3J1bGUvY29jXzcudHMiLCAiZG9jcy8udnVlcHJlc3MvaW5kZXgvcnVsZS9kYWdnZXJfaGVhcnQudHMiLCAiZG9jcy8udnVlcHJlc3MvaW5kZXgvcnVsZS9kbmRfNXIudHMiLCAiZG9jcy8udnVlcHJlc3MvaW5kZXgvcnVsZS9jeWJlcnB1bmtfcmVkLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2luZGV4L3J1bGUvYXZhdGFyX2xlZ2VuZC50cyIsICJkb2NzLy52dWVwcmVzcy9pbmRleC9tb2R1bGVzLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2luZGV4L3ByZXAudHMiLCAiZG9jcy8udnVlcHJlc3MvaW5kZXgvcHJlcF9kcmFnb25fZGVsdmVzLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2luZGV4L3ByZXBfa2Z0Z3YudHMiLCAiZG9jcy8udnVlcHJlc3MvaW5kZXgvcHJlcF9zdG9ybXdyYWNrLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2luZGV4L3ByZXBfZGVhdGhzX2hvdXNlLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2luZGV4L3ByZXBfY3Vyc2Vfb2Zfc3RyYWhkLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2luZGV4L3ByZXBfZGVzY2VudF9pbnRvX2F2ZXJudXMudHMiLCAiZG9jcy8udnVlcHJlc3MvaW5kZXgvcHJlcF9kb29tZWRfc3dvcmRfY29hc3QudHMiLCAiZG9jcy8udnVlcHJlc3MvaW5kZXgvYWJvdXQudHMiLCAiZG9jcy8udnVlcHJlc3MvaW5kZXgvbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcQmFpZHVTeW5jZGlza1xcXFxBSVxcXFxMTE1cXFxcU2l0ZVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0JhaWR1U3luY2Rpc2svQUkvTExNL1NpdGUvZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci12aXRlJztcclxuaW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzJztcclxuaW1wb3J0IHsgcGx1bWVUaGVtZSB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXBsdW1lJztcclxuXHJcbmltcG9ydCBjb2xsZWN0aW9ucyBmcm9tICcuL2luZGV4L2luZGV4LnRzJztcclxuXHJcbmNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuXHRiYXNlOiAnLycsXHJcblx0bGFuZzogJ3poLUNOJyxcclxuXHR0aXRsZTogJyMgUm9sZSBJbml0aWF0aXZlICMnLFxyXG5cdGRlc2NyaXB0aW9uOiAnYnkgU2hpbkthbjQyJyxcclxuXHJcblx0YnVuZGxlcjogdml0ZUJ1bmRsZXIoKSxcclxuXHJcblx0aGVhZDogW1xyXG4gICBcdFx0ICAgLy8gR29vZ2xlXHU5QThDXHU4QkMxXHVGRjA4XHU3NkY0XHU2M0E1XHU3Qzk4XHU4RDM0XHU0RUNFR1NDXHU1OTBEXHU1MjM2XHU3Njg0XHU1QjhDXHU2NTc0XHU2ODA3XHU3QjdFXHVGRjA5XHJcbiAgXHRcdCAgICBbJ21ldGEnLCB7IFxyXG4gIFx0XHQgICAgICBuYW1lOiAnZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uJywgXHJcbiAgXHRcdCAgICAgIGNvbnRlbnQ6ICdkQVZwMGY3MlA5UWl0SkxkVWRMdDl4THJRb05LcVRzWUNHU19TSk1IM0FJJyBcclxuICBcdFx0ICAgIH1dLFxyXG4gICAgICBcclxuICBcdFx0ICAgIC8vIFx1NzY3RVx1NUVBNlx1OUE4Q1x1OEJDMVx1RkYwOFx1ODFFQVx1NURGMVx1N0VDNFx1ODhDNVx1RkYwQ2NvbnRlbnRcdTUwM0NcdTY2RkZcdTYzNjJcdTRFM0FcdTRGNjBcdTRFQ0VcdTc2N0VcdTVFQTZcdTgzQjdcdTUzRDZcdTc2ODRcdUZGMDlcclxuIFx0XHQgICAgIFsnbWV0YScsIHsgXHJcbiBcdFx0ICAgICAgIG5hbWU6ICdiYWlkdS1zaXRlLXZlcmlmaWNhdGlvbicsIFxyXG4gXHRcdCAgICAgICBjb250ZW50OiAnY29kZXZhLXFzZ3JTQWJPRzQnIFxyXG5cdFx0ICAgICAgfV0sXHJcblx0XHRdLFxyXG5cclxuXHR0aGVtZTogcGx1bWVUaGVtZSh7XHJcblxyXG5cdFx0Ly8gR00gXHU1OTA3XHU1NkUyXHU2NTg3XHU0RUY2XHU1OTM5XHU1MkEwXHU1QkM2XHVGRjA4MjAyNi0wOC0xNCBETSBcdTYzMDdcdTRFRTRcdUZGMUFcdTVCQzZcdTc4MDEgMTE0NTE0XHVGRjA5XHJcblx0XHRlbmNyeXB0OiB7XHJcblx0XHRcdHJ1bGVzOiB7XHJcblx0XHRcdFx0Jy9wcmVwLyc6ICcxMTQ1MTQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBHTSBcdTU5MDdcdTU2RTJcdTUyQTBcdTVCQzZcdTk4NzVcdTRFMERcdThGREJcdTdBRDlcdTUxODVcdTY0MUNcdTdEMjJcdUZGMDhcdTc2RUVcdTVGNTVcdTdFQTdcdThGQzdcdTZFRTRcdUZGMENcdTk2MzJcdTZCNjJcdTY0MUNcdTdEMjJcdTY4NDZcdTZDQzRcdTk3MzJcdTY4NDhcdTUzNzdcdTY4MDdcdTk4OTgvXHU3QUUwXHU4MjgyXHVGRjA5XHJcblx0XHRzZWFyY2g6IHtcclxuXHRcdFx0aXNTZWFyY2hhYmxlOiAocGFnZTogYW55KSA9PiAhcGFnZS5wYXRoLnN0YXJ0c1dpdGgoJy9wcmVwLycpLFxyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBcdTZERkJcdTUyQTBcdTYwQThcdTc2ODRcdTkwRThcdTdGNzJcdTU3REZcdTU0MERcclxuXHRcdC8vIGhvc3RuYW1lOiAnaHR0cHM6Ly95b3VyX3NpdGVfdXJsJyxcclxuXHJcblx0XHRob3N0bmFtZTogJ2h0dHA6Ly90dHJwZy5zaGlua2FuNDIuYXJ0LycsXHJcblxyXG5cdFx0Ly8gXHU5RUQ4XHU4QkE0IFx1NEUwRFx1NTQyRlx1NzUyOFx1RkYwQ1x1NEVDNVx1NUY1MyBwbHVnaW5zLmdpdCBcdTRFM0EgdHJ1ZSBcdTY1RjZcdTc1MUZcdTY1NDhcclxuXHRcdC8vIFx1NkI2NFx1OTE0RFx1N0Y2RVx1NTcyOCBwbHVtZS5jb25maWcudHMgXHU0RTJEXHU2NUUwXHU2NTQ4XHJcblx0XHRjaGFuZ2Vsb2c6IHtcclxuXHRcdFx0bWF4Q291bnQ6IDEwLFxyXG5cdFx0XHRyZXBvVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1NoaW5LYW40Mi9UVFJQRycsXHJcblx0XHRcdGNvbW1pdFVybFBhdHRlcm46ICc6cmVwby9jb21taXQvOmhhc2gnLFxyXG5cdFx0XHRpc3N1ZVVybFBhdHRlcm46ICc6cmVwby9pc3N1ZXMvOmlzc3VlJyxcclxuXHRcdFx0dGFnVXJsUGF0dGVybjogJzpyZXBvL3JlbGVhc2VzL3RhZy86dGFnJyxcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gXHU5RUQ4XHU4QkE0XHU1NDJGXHU3NTI4XHVGRjBDXHU0RUM1XHU1RjUzIHBsdWdpbnMuZ2l0IFx1NEUzQSB0cnVlIFx1NjVGNlx1NzUxRlx1NjU0OFxyXG5cdFx0Ly8gXHU2QjY0XHU5MTREXHU3RjZFXHU1NzI4IHBsdW1lLmNvbmZpZy50cyBcdTRFMkRcdTY1RTBcdTY1NDhcclxuXHRcdGNvbnRyaWJ1dG9yczoge1xyXG5cdFx0XHRtb2RlOiAnaW5saW5lJyxcclxuXHRcdFx0YXZhdGFyUGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS86dXNlcm5hbWUucG5nJyxcclxuXHRcdH0sXHJcblxyXG5cdFx0YXV0b0Zyb250bWF0dGVyOiB7XHJcblx0XHRcdHBlcm1hbGluazogZmFsc2UsXHJcblx0XHR9LFxyXG5cclxuXHRcdGNvbGxlY3Rpb25zLFxyXG5cclxuXHRcdG1hcmtkb3duOiB7XHJcblx0XHRcdGRlbW86IHRydWUsXHJcblx0XHRcdC8vICAgaW5jbHVkZTogdHJ1ZSxcclxuXHRcdFx0Y2hhcnRqczogdHJ1ZSxcclxuXHRcdFx0bWFya21hcDogdHJ1ZSxcclxuXHRcdFx0Ly8gICBlY2hhcnRzOiB0cnVlLFxyXG5cdFx0XHRtZXJtYWlkOiB0cnVlLFxyXG5cdFx0XHRmbG93Y2hhcnQ6IHRydWUsXHJcblx0XHRcdHRhYmxlOiB7XHJcblx0XHRcdFx0Ly8gXHU4ODY4XHU2ODNDXHU5RUQ4XHU4QkE0XHU1QkY5XHU5RjUwXHU2NUI5XHU1RjBGICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0J1xyXG5cdFx0XHRcdGFsaWduOiAnY2VudGVyJyxcclxuXHRcdFx0XHQvLyBcdTg4NjhcdTY4M0NcdTVCQkRcdTVFQTZcdTY2MkZcdTU0MjZcdTRFM0FcdTY3MDBcdTU5MjdcdTUxODVcdTVCQjlcdTVCQkRcdTVFQTZcclxuXHRcdFx0XHQvLyBcdTg4NENcdTUxODVcdTUxNDNcdTdEMjBcdTRFMERcdTUxOERcdTgxRUFcdTUyQThcdTYzNjJcdTg4NENcdUZGMENcdThEODVcdTUxRkFcdTVCQjlcdTU2NjhcdTVCQkRcdTVFQTZcdTY1RjZcdTg4NjhcdTY4M0NcdTY2M0VcdTc5M0FcdTZFREFcdTUyQThcdTY3NjFcclxuXHRcdFx0XHQvLyAyMDI2LTA4LTE4IFx1NjUzOSBmYWxzZVx1RkYxQW1heC1jb250ZW50IFx1OEJBOVx1NTM1NVx1NTE0M1x1NjgzQ1x1NkMzOFx1NEUwRFx1NjM2Mlx1ODg0Q1x1RkYwQ1x1NTkxQVx1NTIxN1x1NUJCRFx1ODg2OFx1NjAzQlx1NUJCRFx1OEQ4NVx1ODlDNlx1NTNFM1x1MjE5Mlx1NkEyQVx1NTQxMVx1NkVEQVx1NTJBOFx1Njc2MVxyXG5cdFx0XHRcdC8vIGZhbHNlIFx1NTQwRVx1ODg2OFx1NjgzQ1x1NjUzNlx1N0YyOVx1NTIzMFx1NUJCOVx1NTY2OFx1NUJCRFx1RkYwQ1x1NEUyRFx1NjU4N1x1NTM1NVx1NTE0M1x1NjgzQ1x1ODFFQVx1NTJBOFx1NjM2Mlx1ODg0Q1x1RkYwOFx1N0FEOVx1NzBCOVx1N0VBN1x1NjZGRlx1NEVFM1x1OTAxMFx1ODg2OFx1NjI0Qlx1NTJBOCA8YnI+XHVGRjA5XHJcblx0XHRcdFx0Ly8gXHU0RTJBXHU1MjJCXHU3ODZFXHU5NzAwXHU1MzU1XHU4ODRDXHU3Njg0XHU4ODY4XHU1M0VGXHU1MzU1XHU4ODY4XHU1MkEwIG1heC1jb250ZW50IFx1NTNDMlx1NjU3MFx1OEM0MVx1NTE0RFxyXG5cdFx0XHRcdG1heENvbnRlbnQ6IGZhbHNlLFxyXG5cdFx0XHRcdC8qKlxyXG5cdFx0XHRcdCAqIFx1NTkwRFx1NTIzNlx1NEUzQSBodG1sL21hcmtkb3duXHJcblx0XHRcdFx0ICogdHJ1ZSBcdTc2RjhcdTVGNTNcdTRFOEUgYGFsbGBcdUZGMENcdTc2RjhcdTVGNTNcdTRFOEVcdTU0MENcdTY1RjZcdTU0MkZcdTc1MjggaHRtbCBcdTU0OEMgbWFya2Rvd25cclxuXHRcdFx0XHQgKi9cclxuXHRcdFx0XHRjb3B5OiB0cnVlLCAvLyB0cnVlIHwgJ2FsbCcgfCAnaHRtbCcgfCAnbWQnXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cclxuXHJcblxyXG5cdFx0cGx1Z2luczoge1xyXG5cdFx0XHQvLyBHTSBcdTU5MDdcdTU2RTJcdTk4NzVcdTRFMERcdThGREIgc2l0ZW1hcFx1RkYwOFx1NTJBMFx1NUJDNlx1OTg3NVx1NEUwRFx1NUU5NFx1ODhBQlx1NjQxQ1x1N0QyMlx1NUYxNVx1NjRDRVx1N0QyMlx1NUYxNVx1RkYwOVxyXG5cdFx0XHQvLyBcdTZDRThcdTYxMEZcdUZGMUFleGNsdWRlUGF0aHMgXHU1M0VBXHU2NTJGXHU2MzAxXHU3Q0JFXHU3ODZFXHU4REVGXHU1Rjg0XHVGRjFCXHU2NUIwXHU1ODlFIHByZXAgXHU5ODc1XHU2NUY2XHU1NDBDXHU2QjY1XHU1NzI4XHU5ODc1XHU5NzYyIGZyb250bWF0dGVyIFx1NTE5OSBzaXRlbWFwOiBmYWxzZVxyXG5cdFx0XHRzaXRlbWFwOiB7XHJcblx0XHRcdFx0ZXhjbHVkZVBhdGhzOiBbXHJcblx0XHRcdFx0XHQnL3ByZXAvbWVudS8nLFxyXG5cdFx0XHRcdFx0Jy9wcmVwL21lbnUvZG5kXzVyLmh0bWwnLFxyXG5cdFx0XHRcdFx0Jy9wcmVwL2RuZF81ci9rZnRndi8nLFxyXG5cdFx0XHRcdFx0Jy9wcmVwL2RuZF81ci9rZnRndi9pbmRleC5odG1sJyxcclxuXHRcdFx0XHRcdCcvcHJlcC9kbmRfNXIva2Z0Z3YvcmVhY2hfZm9yX3RoZV9zdGFycy5odG1sJyxcclxuXHRcdFx0XHRcdCcvcHJlcC9kbmRfNXIva2Z0Z3YvdGhlX211cmttaXJlX21hbGV2b2xlbmNlLmh0bWwnLFxyXG5cdFx0XHRcdFx0Jy9wcmVwL2RuZF81ci9rZnRndi9wYXJ0eV9hdF9wYWxpc2V0X2hhbGwuaHRtbCcsXHJcblx0XHRcdFx0XHQnL3ByZXAvZG5kXzVyL2RyYWdvbnNfb2Zfc3Rvcm13cmFja19pc2xlLycsXHJcblx0XHRcdFx0Jy9wcmVwL2RuZF81ci9kcmFnb25zX29mX3N0b3Jtd3JhY2tfaXNsZS9pbmRleC5odG1sJyxcclxuXHRcdFx0XHRcdCcvcHJlcC9kbmRfNXIvZHJhZ29uX2RlbHZlcy8nLFxyXG5cdFx0XHRcdFx0Jy9wcmVwL2RuZF81ci9kcmFnb25fZGVsdmVzL2luZGV4Lmh0bWwnLFxyXG5cdFx0XHRcdFx0Jy9wcmVwL2RuZF81ci9kcmFnb25fZGVsdmVzL2Jha2Vyc19kb2VzbnQuaHRtbCcsXHJcblx0XHRcdFx0XHQnL3ByZXAvZG5kXzVyL2RlYXRoc19ob3VzZS8nLFxyXG5cdFx0XHRcdFx0Jy9wcmVwL2RuZF81ci9kZWF0aHNfaG91c2UvaW5kZXguaHRtbCcsXHJcblx0XHRcdFx0XHQnL3ByZXAvZG5kXzVyL2N1cnNlX29mX3N0cmFoZC8nLFxyXG5cdFx0XHRcdFx0Jy9wcmVwL2RuZF81ci9jdXJzZV9vZl9zdHJhaGQvaW5kZXguaHRtbCcsXHJcblx0XHRcdFx0XHQnL3ByZXAvZG5kXzVyL2N1cnNlX29mX3N0cmFoZC9jaDFfMl9pbnRvX3RoZV9taXN0cy5odG1sJyxcclxuXHRcdFx0XHRcdCcvcHJlcC9kbmRfNXIvZGVzY2VudF9pbnRvX2F2ZXJudXMvJyxcclxuXHRcdFx0XHRcdCcvcHJlcC9kbmRfNXIvZGVzY2VudF9pbnRvX2F2ZXJudXMvaW5kZXguaHRtbCcsXHJcblx0XHRcdFx0XHQnL3ByZXAvZG5kXzVyL2Rvb21lZF9zd29yZF9jb2FzdC8nLFxyXG5cdFx0XHRcdFx0Jy9wcmVwL2RuZF81ci9kb29tZWRfc3dvcmRfY29hc3QvaW5kZXguaHRtbCcsXHJcblx0XHRcdFx0XHQnL3ByZXAvZG5kXzVyL2Rvb21lZF9zd29yZF9jb2FzdC9nZW9ncmFwaHkuaHRtbCcsXHJcblx0XHRcdFx0XHQnL3ByZXAvZG5kXzVyL2Rvb21lZF9zd29yZF9jb2FzdC9yZWlnbl9vZl9yb3QuaHRtbCcsXHJcblx0XHRcdFx0XHQnL3ByZXAvZG5kXzVyL2Rvb21lZF9zd29yZF9jb2FzdC9yZWlnbl9vZl9yb3RfY2g1Lmh0bWwnLFxyXG5cdFx0XHRcdFx0Jy9wcmVwL2RuZF81ci9kb29tZWRfc3dvcmRfY29hc3QvdmVjbmFfcmlzZS5odG1sJyxcclxuXHRcdFx0XHRcdCcvcHJlcC9kbmRfNXIvZG9vbWVkX3N3b3JkX2NvYXN0L3ZlY25hX2ZhbGwuaHRtbCcsXHJcblx0XHRcdFx0XHQnL3ByZXAvZG5kXzVyL2Rvb21lZF9zd29yZF9jb2FzdC9hY2FkZW15X29mX2FkdmVudHVyZS5odG1sJyxcclxuXHRcdFx0XHRcdCcvcHJlcC9kbmRfNXIvZG9vbWVkX3N3b3JkX2NvYXN0L2xlZ2FjeV9vZl92ZWNuYS5odG1sJyxcclxuXHRcdFx0XHRcdCcvcHJlcC9kbmRfNXIvZG9vbWVkX3N3b3JkX2NvYXN0L3dyYXRoX29mX3p1Z2d0bW95Lmh0bWwnLFxyXG5cdFx0XHRcdFx0Jy9wcmVwL2RuZF81ci9kb29tZWRfc3dvcmRfY29hc3QvYmxvb2Rfd2FyLmh0bWwnLFxyXG5cdFx0XHRcdFx0XSxcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBTaGlraSBcdTRFRTNcdTc4MDFcdTlBRDhcdTRFQUVcclxuXHRcdFx0ICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL2NvZGUtaGlnaGxpZ2h0L1xyXG5cdFx0XHQgKi9cclxuXHRcdFx0Ly8gc2hpa2k6IHtcclxuXHRcdFx0Ly8gXHU1RjNBXHU3MEM4XHU1RUZBXHU4QkFFXHU5ODg0XHU4QkJFXHU0RUUzXHU3ODAxXHU1NzU3XHU5QUQ4XHU0RUFFXHU4QkVEXHU4QTAwXHVGRjBDXHU2M0QyXHU0RUY2XHU5RUQ4XHU4QkE0XHU1MkEwXHU4RjdEXHU2MjQwXHU2NzA5XHU4QkVEXHU4QTAwXHU0RjFBXHU0RUE3XHU3NTFGXHU0RTBEXHU1RkM1XHU4OTgxXHU3Njg0XHU2NUY2XHU5NUY0XHU1RjAwXHU5NTAwXHJcblx0XHRcdC8vICAgbGFuZ3VhZ2VzOiBbJ3NoZWxsJywgJ2Jhc2gnLCAndHlwZXNjcmlwdCcsICdqYXZhc2NyaXB0J10sXHJcblx0XHRcdC8vIH0sXHJcblxyXG5cdFx0XHRzaGlraToge1xyXG5cdFx0XHRcdGxhbmdzOiBbJ2h0bWwnLCAnY3NzJywgJ3R5cGVzY3JpcHQnLCAnamF2YXNjcmlwdCddLFxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8gXHU1OTgyXHU2NzlDXHU2MEE4XHU1NzI4XHU2QjY0XHU1OTA0XHU3NkY0XHU2M0E1XHU1OEYwXHU2NjBFXHU0RTNBIHRydWVcdUZGMENcdTUyMTlcdTg4NjhcdTc5M0FcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTU0OENcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTkwRkRcdTU0MkZcdTc1MjhcdThCRTVcdTUyOUZcdTgwRkRcclxuXHRcdFx0Z2l0OiB0cnVlLFxyXG5cclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqICBtYXJrZG93biBwb3dlclxyXG5cdFx0XHQgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbi9tYXJrZG93bi1wb3dlci9cclxuXHRcdFx0ICovXHJcblx0XHRcdC8vIG1hcmtkb3duUG93ZXI6IHtcclxuXHRcdFx0Ly8gICBwZGY6IHRydWUsXHJcblx0XHRcdC8vICAgY2FuaXVzZTogdHJ1ZSxcclxuXHRcdFx0Ly8gICBwbG90OiB0cnVlLFxyXG5cdFx0XHQvLyAgIGJpbGliaWxpOiB0cnVlLFxyXG5cdFx0XHQvLyAgIHlvdXR1YmU6IHRydWUsXHJcblx0XHRcdC8vICAgaWNvbnM6IHRydWUsXHJcblx0XHRcdC8vICAgY29kZXBlbjogdHJ1ZSxcclxuXHRcdFx0Ly8gICByZXBsaXQ6IHRydWUsXHJcblx0XHRcdC8vICAgY29kZVNhbmRib3g6IHRydWUsXHJcblx0XHRcdC8vICAganNmaWRkbGU6IHRydWUsXHJcblx0XHRcdC8vICAgcmVwbDoge1xyXG5cdFx0XHQvLyAgICAgZ286IHRydWUsXHJcblx0XHRcdC8vICAgICBydXN0OiB0cnVlLFxyXG5cdFx0XHQvLyAgICAga290bGluOiB0cnVlLFxyXG5cdFx0XHQvLyAgIH0sXHJcblx0XHRcdC8vIH0sXHJcblxyXG5cdFx0XHRtYXJrZG93blBvd2VyOiB7XHJcblx0XHRcdFx0cGRmOiB0cnVlLFxyXG5cdFx0XHRcdHBsb3Q6IHRydWUsXHJcblx0XHRcdFx0YmlsaWJpbGk6IHRydWUsXHJcblx0XHRcdFx0eW91dHViZTogdHJ1ZSxcclxuXHRcdFx0XHRpY29uczogdHJ1ZSxcclxuXHRcdFx0XHRpbWFnZVNpemU6IHRydWUsXHJcblx0XHRcdFx0ZmlsZVRyZWU6IHRydWUsXHJcblx0XHRcdFx0YWJicjogdHJ1ZSxcclxuXHRcdFx0XHRhbm5vdGF0aW9uOiB0cnVlLFxyXG5cdFx0XHRcdGZpZWxkOiB0cnVlLFxyXG5cdFx0XHRcdHRpbWVsaW5lOiB0cnVlLFxyXG5cdFx0XHRcdGFydFBsYXllcjogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBcdThCQzRcdThCQkEgY29tbWVudHNcclxuXHRcdFx0ICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL2ZlYXR1cmVzL2NvbW1lbnRzL1xyXG5cdFx0XHQgKi9cclxuXHRcdFx0Ly8gY29tbWVudDoge1xyXG5cdFx0XHQvLyAgIHByb3ZpZGVyOiAnJywgLy8gXCJBcnRhbGtcIiB8IFwiR2lzY3VzXCIgfCBcIlR3aWtvb1wiIHwgXCJXYWxpbmVcIlxyXG5cdFx0XHQvLyAgIGNvbW1lbnQ6IHRydWUsXHJcblx0XHRcdC8vICAgcmVwbzogJycsXHJcblx0XHRcdC8vICAgcmVwb0lkOiAnJyxcclxuXHRcdFx0Ly8gICBjYXRlZ29yeUlkOiAnJyxcclxuXHRcdFx0Ly8gICBtYXBwaW5nOiAncGF0aG5hbWUnLFxyXG5cdFx0XHQvLyAgIHJlYWN0aW9uc0VuYWJsZWQ6IHRydWUsXHJcblx0XHRcdC8vICAgaW5wdXRQb3NpdGlvbjogJ3RvcCcsXHJcblx0XHRcdC8vIH0sXHJcblx0XHR9LFxyXG5cdH0pLFxyXG59KTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6L0JhaWR1U3luY2Rpc2svQUkvTExNL1NpdGUvZG9jcy8udnVlcHJlc3MvaW5kZXhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEJhaWR1U3luY2Rpc2tcXFxcQUlcXFxcTExNXFxcXFNpdGVcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcaW5kZXhcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0JhaWR1U3luY2Rpc2svQUkvTExNL1NpdGUvZG9jcy8udnVlcHJlc3MvaW5kZXgvaW5kZXgudHNcIjtpbXBvcnQgeyBkZWZpbmVDb2xsZWN0aW9ucyB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXBsdW1lJztcclxuXHJcbmltcG9ydCBDT0NfNyBmcm9tICcuL3J1bGUvY29jXzcudHMnO1xyXG5pbXBvcnQgRGFnZ2VyX0hlYXJ0IGZyb20gJy4vcnVsZS9kYWdnZXJfaGVhcnQudHMnO1xyXG5pbXBvcnQgRE5EXzVSIGZyb20gJy4vcnVsZS9kbmRfNXIudHMnO1xyXG5pbXBvcnQgQ3liZXJwdW5rX1JlZCBmcm9tICcuL3J1bGUvY3liZXJwdW5rX3JlZC50cyc7XHJcbmltcG9ydCBBdmF0YXJfTGVnZW5kIGZyb20gJy4vcnVsZS9hdmF0YXJfbGVnZW5kLnRzJztcclxuXHJcbmltcG9ydCBNb2R1bGVzIGZyb20gJy4vbW9kdWxlcy50cyc7XHJcbmltcG9ydCBQcmVwIGZyb20gJy4vcHJlcC50cyc7XHJcbmltcG9ydCBQcmVwRHJhZ29uRGVsdmVzIGZyb20gJy4vcHJlcF9kcmFnb25fZGVsdmVzLnRzJztcclxuaW1wb3J0IFByZXBLZnRndiBmcm9tICcuL3ByZXBfa2Z0Z3YudHMnO1xyXG5pbXBvcnQgUHJlcFN0b3Jtd3JhY2sgZnJvbSAnLi9wcmVwX3N0b3Jtd3JhY2sudHMnO1xyXG5pbXBvcnQgUHJlcERlYXRoc0hvdXNlIGZyb20gJy4vcHJlcF9kZWF0aHNfaG91c2UudHMnO1xyXG5pbXBvcnQgUHJlcEN1cnNlT2ZTdHJhaGQgZnJvbSAnLi9wcmVwX2N1cnNlX29mX3N0cmFoZC50cyc7XHJcbmltcG9ydCBQcmVwRGVzY2VudEludG9BdmVybnVzIGZyb20gJy4vcHJlcF9kZXNjZW50X2ludG9fYXZlcm51cy50cyc7XHJcbmltcG9ydCBQcmVwRG9vbWVkU3dvcmRDb2FzdCBmcm9tICcuL3ByZXBfZG9vbWVkX3N3b3JkX2NvYXN0LnRzJztcclxuXHJcbmltcG9ydCBBYm91dCBmcm9tICcuL2Fib3V0LnRzJztcclxuXHJcbmltcG9ydCBMb2cgZnJvbSAnLi9sb2cudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29sbGVjdGlvbnMoW1xyXG5cdENPQ183LFxyXG5cdERhZ2dlcl9IZWFydCxcclxuXHRETkRfNVIsXHJcblx0Q3liZXJwdW5rX1JlZCxcclxuXHRBdmF0YXJfTGVnZW5kLFxyXG5cdC8vXHJcblx0TW9kdWxlcyxcclxuXHRQcmVwLFxyXG5cdFByZXBEcmFnb25EZWx2ZXMsXHJcblx0UHJlcEtmdGd2LFxyXG5cdFByZXBTdG9ybXdyYWNrLFxyXG5cdFByZXBEZWF0aHNIb3VzZSxcclxuXHRQcmVwQ3Vyc2VPZlN0cmFoZCxcclxuXHRQcmVwRGVzY2VudEludG9BdmVybnVzLFxyXG5cdFByZXBEb29tZWRTd29yZENvYXN0LFxyXG5cdExvZyxcclxuXHRBYm91dCxcclxuXHQvL1xyXG5dKTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOi9CYWlkdVN5bmNkaXNrL0FJL0xMTS9TaXRlL2RvY3MvLnZ1ZXByZXNzL2luZGV4L3J1bGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEJhaWR1U3luY2Rpc2tcXFxcQUlcXFxcTExNXFxcXFNpdGVcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcaW5kZXhcXFxccnVsZVxcXFxjb2NfNy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleC9ydWxlL2NvY183LnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29sbGVjdGlvbiB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXBsdW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29sbGVjdGlvbih7XG5cdHR5cGU6ICdkb2MnLFxuXHR0aXRsZTogJ0NPQycsXG5cdGxpbmtQcmVmaXg6ICcvcnVsZS9jb2MvJyxcblx0ZGlyOiAncnVsZS9jb2MnLFxuXHRzaWRlYmFyOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogJ1x1RDgzRFx1RENENiBcdTY1QjBcdTYyNEJcdTYzMDdcdTUzNTcnLFxuXHRcdFx0cHJlZml4OiAnZ3VpZGUnLFxuXHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcblx0XHRcdGl0ZW1zOiBbXG5cdFx0XHRcdHsgdGV4dDogJ0NPQyBcdTYwMEVcdTRFNDhcdTczQTkgXHUyNzU0JywgbGluazogJ2Fib3V0JyB9LFxuXHRcdFx0XHR7IHRleHQ6ICdcdThGNjZcdTUzNjFcdTYzMDdcdTUzNTcgXHVEODNEXHVEQ0Q2JywgbGluazogJ2NoYXJhY3Rlcl9jcmVhdGlvbicgfSxcblx0XHRcdFx0eyB0ZXh0OiAnXHU1RTM4XHU3NTI4XHU5QUIwXHU2Q0Q1IFx1RDgzQ1x1REZCMicsIGxpbms6ICdxdWlja19yb2xsJyB9LFxuXHRcdFx0XHR7IHRleHQ6ICdcdTc0MDZcdTY2N0FcdTRFMEVcdTc1QUZcdTcyQzIgXHVEODNFXHVEREUwJywgbGluazogJ3Nhbml0eScgfSxcblx0XHRcdFx0eyB0ZXh0OiAnXHU2MjE4XHU2NTk3IFx1MjY5NFx1RkUwRicsIGxpbms6ICdjb21iYXQnIH0sXG5cdFx0XHRcdHsgdGV4dDogJ1x1NUUzOFx1ODlDMVx1OTVFRVx1OTg5OCBcdTI3NTMnLCBsaW5rOiAnZmFxJyB9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6ICdcdUQ4M0RcdURDREEgXHU4RDQ0XHU2NTk5XHU5MDFGXHU2N0U1Jyxcblx0XHRcdHByZWZpeDogJ2d1aWRlJyxcblx0XHRcdGNvbGxhcHNlZDogZmFsc2UsXG5cdFx0XHRpdGVtczogW1xuXHRcdFx0XHR7IHRleHQ6ICdcdTYyODBcdTgwRkRcdTg4NjggXHVEODNEXHVEQ0NCJywgbGluazogJ3NraWxsc190YWJsZScgfSxcblx0XHRcdFx0eyB0ZXh0OiAnXHU4MDRDXHU0RTFBXHU4ODY4IFx1RDgzQ1x1REY5MycsIGxpbms6ICdqb2JzX3RhYmxlJyB9LFxuXHRcdFx0XHR7IHRleHQ6ICdcdTZCNjZcdTU2NjhcdTg4NjggXHVEODNEXHVERDJCJywgbGluazogJ3dlYXBvbnNfdGFibGUnIH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdF0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleC9ydWxlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxCYWlkdVN5bmNkaXNrXFxcXEFJXFxcXExMTVxcXFxTaXRlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGluZGV4XFxcXHJ1bGVcXFxcZGFnZ2VyX2hlYXJ0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9CYWlkdVN5bmNkaXNrL0FJL0xMTS9TaXRlL2RvY3MvLnZ1ZXByZXNzL2luZGV4L3J1bGUvZGFnZ2VyX2hlYXJ0LnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29sbGVjdGlvbiB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXBsdW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbGxlY3Rpb24oe1xyXG5cdHR5cGU6ICdkb2MnLFxyXG5cdHRpdGxlOiAnXHU1MzE1XHU5OTk2XHU0RTRCXHU1RkMzIFx1RDgzRFx1REVBNycsXHJcblx0bGlua1ByZWZpeDogJy9ydWxlL2RhZ2dlcl9oZWFydC8nLFxyXG5cdGRpcjogJ3J1bGUvZGFnZ2VyX2hlYXJ0JyxcclxuXHRzaWRlYmFyOiBbXHJcblx0XHR7XHJcblx0XHRcdHRleHQ6ICdcdUQ4M0RcdURDRDYgXHU2NUIwXHU2MjRCXHU2MzA3XHU1MzU3IFx1RDgzRFx1REVBNycsXHJcblx0XHRcdHByZWZpeDogJ2d1aWRlJyxcclxuXHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcclxuXHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHQnYWJvdXQnLFxyXG5cdFx0XHRcdCdjaGFyYWN0ZXJfY3JlYXRpb24nLFxyXG5cdFx0XHRcdCdxdWlja19yb2xsJyxcclxuXHRcdFx0XHQnZ2VuZXJhbF9ydWxlJyxcclxuXHRcdFx0XHQncm9sZXBsYXknLFxyXG5cdFx0XHRcdCdmYXEnLFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dGV4dDogJ1x1RDgzRFx1REQxNyBcdThENDRcdTY1OTlcdTdBRDlcdThERjNcdThGNkMgXHVEODNEXHVERUE3JyxcclxuXHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcclxuXHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHR7IHRleHQ6ICdcdTg5QzRcdTUyMTlcdTkwMUZcdTY3RTUgXHUyNkExJywgbGluazogJ2h0dHBzOi8vZGFnZ2VyaGVhcnQuaHVpaml3aWtpLmNvbS93aWtpLyVFOCVBNyU4NCVFNSU4OCU5OSVFOSU4MCU5RiVFNiU5RiVBNScgfSxcclxuXHRcdFx0XHR7IHRleHQ6ICdcdTgwNENcdTRFMUEgXHVEODNEXHVEREUxXHVGRTBGJywgbGluazogJ2h0dHBzOi8vZGFnZ2VyaGVhcnQuaHVpaml3aWtpLmNvbS93aWtpLyVFNSU4OCU4NiVFNyVCMSVCQjolRTglODElOEMlRTQlQjglOUEnIH0sXHJcblx0XHRcdFx0eyB0ZXh0OiAnXHU3OUNEXHU2NUNGIFx1RDgzRVx1RERERCcsIGxpbms6ICdodHRwczovL2RhZ2dlcmhlYXJ0Lmh1aWppd2lraS5jb20vd2lraS8lRTUlODglODYlRTclQjElQkI6JUU3JUE3JThEJUU2JTk3JThGJyB9LFxyXG5cdFx0XHRcdHsgdGV4dDogJ1x1NzkzRVx1N0ZBNCBcdUQ4M0NcdURGRDhcdUZFMEYnLCBsaW5rOiAnaHR0cHM6Ly9kYWdnZXJoZWFydC5odWlqaXdpa2kuY29tL3dpa2kvJUU1JTg4JTg2JUU3JUIxJUJCOiVFNyVBNCVCRSVFNyVCRSVBNCcgfSxcclxuXHRcdFx0XHR7IHRleHQ6ICdcdTk4ODZcdTU3REYgXHVEODNEXHVEQ0RDJywgbGluazogJ2h0dHBzOi8vZGFnZ2VyaGVhcnQuaHVpaml3aWtpLmNvbS93aWtpLyVFOSVBMiU4NiVFNSU5RiU5RiVFNSU4RCVBMScgfSxcclxuXHRcdFx0XHR7IHRleHQ6ICdcdTg4QzVcdTU5MDcgXHVEODNDXHVERjkyJywgbGluazogJ2h0dHBzOi8vZGFnZ2VyaGVhcnQuaHVpaml3aWtpLmNvbS93aWtpLyVFOCVBMyU4NSVFNSVBNCU4NycgfSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHRleHQ6ICdcdUQ4M0NcdURGQUMgXHU2MjE4XHU1Rjc5XHU2ODQ2XHU2N0I2IFx1RDgzRFx1REVBNycsXHJcblx0XHRcdGNvbGxhcHNlZDogZmFsc2UsXHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0eyB0ZXh0OiAnXHU1Qjk4XHU2NUI5IFx1RDgzRFx1RENENicsIGxpbms6ICdodHRwczovL2RhZ2dlcmhlYXJ0Lmh1aWppd2lraS5jb20vd2lraS8lRTYlODglOTglRTUlQkQlQjklRTYlQTElODYlRTYlOUUlQjYnIH0sXHJcblx0XHRcdFx0eyB0ZXh0OiAnXHU3OTNFXHU1MzNBIFx1RDgzRVx1REQxRCcsIGxpbms6ICdodHRwczovL3d3dy5kYWdnZXJoZWFydC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjUvMDcvRGFnZ2VyaGVhcnQtSG9tZWJyZXctS2l0LXYxLjAtSnVseS0zMS0yMDI1LnBkZicgfSxcclxuXHRcdFx0XHR7IHRleHQ6ICdcdTc5NUVcdTVCOThcdTgxRUFcdTUyMzYgXHVEODNEXHVEQzY0IFx1RDgzRFx1REVBNycsIGxpbms6ICcvcnVsZS9kYWdnZXJfaGVhcnQvaG9tZV9icmV3LycgfSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleC9ydWxlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxCYWlkdVN5bmNkaXNrXFxcXEFJXFxcXExMTVxcXFxTaXRlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGluZGV4XFxcXHJ1bGVcXFxcZG5kXzVyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9CYWlkdVN5bmNkaXNrL0FJL0xMTS9TaXRlL2RvY3MvLnZ1ZXByZXNzL2luZGV4L3J1bGUvZG5kXzVyLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29sbGVjdGlvbiB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXBsdW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbGxlY3Rpb24oe1xyXG5cdHR5cGU6ICdkb2MnLFxyXG5cdHRpdGxlOiAnRE5ELTVSJyxcclxuXHRsaW5rUHJlZml4OiAnL3J1bGUvZG5kXzVyLycsXHJcblx0ZGlyOiAncnVsZS9kbmRfNXInLFxyXG5cdHNpZGViYXI6IFtcclxuXHRcdHtcclxuXHRcdFx0dGV4dDogJ1x1RDgzRFx1RENENiBcdTY1QjBcdTYyNEJcdTYzMDdcdTUzNTcnLFxyXG5cdFx0XHRwcmVmaXg6ICdndWlkZScsXHJcblx0XHRcdGNvbGxhcHNlZDogZmFsc2UsXHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0eyB0ZXh0OiAnRE5EIFx1NjAwRVx1NEU0OFx1NzNBOSBcdTI3NTQnLCBsaW5rOiAnYWJvdXQnIH0sXHJcblx0XHRcdFx0eyB0ZXh0OiAnXHU4MDRDXHU0RTFBXHU5MDA5XHU2MkU5IFx1RDgzRFx1RERFMVx1RkUwRicsIGxpbms6ICcvcnVsZS9kbmRfNXIvY2xhc3MvZ3VpZGUnIH0sXHJcblx0XHRcdFx0eyB0ZXh0OiAnXHU4RjY2XHU1MzYxXHU2MzA3XHU1MzU3IFx1RDgzRFx1RENENicsIGxpbms6ICdjaGFyYWN0ZXJfY3JlYXRpb24nIH0sXHJcblx0XHRcdFx0eyB0ZXh0OiAnXHU1RTM4XHU3NTI4XHU5QUIwXHU2Q0Q1IFx1RDgzQ1x1REZCMicsIGxpbms6ICdxdWlja19yb2xsJyB9LFxyXG5cdFx0XHRcdHsgdGV4dDogJ1x1NjI2RVx1NkYxNCBcdUQ4M0NcdURGQUQnLCBsaW5rOiAncm9sZXBsYXknIH0sXHJcblx0XHRcdFx0eyB0ZXh0OiAnXHU2MjE4XHU2NTk3IFx1MjY5NFx1RkUwRicsIGxpbms6ICdjb21iYXQnIH0sXHJcblx0XHRcdFx0eyB0ZXh0OiAnXHU1RTM4XHU4OUMxXHU5NUVFXHU5ODk4IFx1Mjc1MycsIGxpbms6ICdmYXEnIH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0ZXh0OiAnXHVEODNEXHVERDE3IFx1OEQ0NFx1NjU5OVx1N0FEOVx1OERGM1x1OEY2QycsXHJcblx0XHRcdGNvbGxhcHNlZDogZmFsc2UsXHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0eyB0ZXh0OiAnXHU3OUNEXHU2NUNGIFx1RDgzRVx1RERERCcsIGxpbms6ICdodHRwczovLzVlLmtpd2VlLnRvcC9yYWNlcy5odG1sJyB9LFxyXG5cdFx0XHRcdHsgdGV4dDogJ1x1NEUxM1x1OTU3RiBcdUQ4M0RcdURDQUEnLCBsaW5rOiAnaHR0cHM6Ly81ZS5raXdlZS50b3AvZmVhdHMuaHRtbCcgfSxcclxuXHRcdFx0XHR7IHRleHQ6ICdcdTZDRDVcdTY3MkYgXHUyNzI4JywgbGluazogJ2h0dHBzOi8vNWUua2l3ZWUudG9wL3NwZWxscy5odG1sJyB9LFxyXG5cdFx0XHRcdHsgdGV4dDogJ1x1NzI2OVx1NTRDMSBcdUQ4M0NcdURGOTInLCBsaW5rOiAnaHR0cHM6Ly81ZS5raXdlZS50b3AvaXRlbXMuaHRtbCcgfSxcclxuXHRcdFx0XHR7IHRleHQ6ICdcdTYzNkVcdTcwQjkgXHVEODNDXHVERkYwJywgbGluazogJ2h0dHBzOi8vNWUua2l3ZWUudG9wL2Jvb2suaHRtbCN4ZG1nJyB9LFxyXG5cdFx0XHRcdHsgdGV4dDogJ1x1NEUwRFx1NTE2OFx1NEU2NiBcdUQ4M0RcdURDRDYnLCBsaW5rOiAnaHR0cHM6Ly81ZWNobS5rYWdhbmd0dXlhLnRvcC8nIH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0ZXh0OiAnXHVEODNEXHVEQ0RBIFx1NjZGNFx1NTkxQVx1OEQ0NFx1NjU5OScsXHJcblx0XHRcdGNvbGxhcHNlZDogZmFsc2UsXHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ1x1NUI5OFx1NjVCOVx1OEQ0NFx1NjU5OSBcdUQ4M0RcdURDRDYnLFxyXG5cdFx0XHRcdFx0cHJlZml4OiAnb2ZmaWNpYWwnLFxyXG5cdFx0XHRcdFx0Y29sbGFwc2VkOiB0cnVlLFxyXG5cdFx0XHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHRcdFx0J2luZGV4JyxcclxuXHRcdFx0XHRcdFx0eyB0ZXh0OiAnXHU0RTA5XHU5Rjk5XHU3MjRDIFx1RDgzRFx1REMwOScsIGxpbms6ICd0aHJlZV9kcmFnb25fYW50ZScgfSxcclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAnXHU3OTNFXHU1MzNBXHU4RDQ0XHU2NTk5IFx1RDgzRVx1REQxRCBcdUQ4M0RcdURFQTcnLFxyXG5cdFx0XHRcdFx0cHJlZml4OiAnY29tbXVuaXR5JyxcclxuXHRcdFx0XHRcdGNvbGxhcHNlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHRcdCdpbmRleCcsXHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0ZXh0OiAnXHVEODNEXHVEQzY0IFx1Nzk1RVx1NUI5OCBcdTMwRkMgXHU0RkUxXHU4OUIzJyxcclxuXHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcclxuXHRcdFx0cHJlZml4OiAnaG9tZV9icmV3JyxcclxuXHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAnQUNHIFx1ODlEMlx1ODI3MiBcdUQ4M0NcdURGQUQnLFxyXG5cdFx0XHRcdFx0cHJlZml4OiAnYWNnJyxcclxuXHRcdFx0XHRcdGNvbGxhcHNlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdGl0ZW1zOiBbJ2luZGV4JywgJ21hZG9rYV9tYWdpY2EnLCAnMTk5OSddLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ1x1Njc1MVx1ODlDNCBcdUQ4M0RcdURDREMnLFxyXG5cdFx0XHRcdFx0cHJlZml4OiAnc2hpbmthbl9ob3VzZV9ydWxlJyxcclxuXHRcdFx0XHRcdGNvbGxhcHNlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0XHRcdCdpbmRleCcsXHJcblx0XHRcdFx0XHRcdHsgdGV4dDogJ1x1NTg1NFx1N0Y1N1x1NzI0QyBcdUQ4M0RcdUREMkUnLCBsaW5rOiAnaHR0cHM6Ly81ZS5raXdlZS50b3AvZGVja3MuaHRtbCMlZTUlYTElOTQlZTclYmQlOTclZTclODklOGNfdGQnIH0sXHJcblx0XHRcdFx0XHRcdCdkdW5nZW9uX21lc2hpJyxcclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAnRExDIFx1RDgzRFx1RENFNicsXHJcblx0XHRcdFx0XHRwcmVmaXg6ICdzaGlua2FuX2RsYycsXHJcblx0XHRcdFx0XHRjb2xsYXBzZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRpdGVtczogWydpbmRleCcsICdrYW1lbl9yaWRlciddLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdF0sXHJcbn0pOyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleC9ydWxlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxCYWlkdVN5bmNkaXNrXFxcXEFJXFxcXExMTVxcXFxTaXRlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGluZGV4XFxcXHJ1bGVcXFxcY3liZXJwdW5rX3JlZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleC9ydWxlL2N5YmVycHVua19yZWQudHNcIjtpbXBvcnQgeyBkZWZpbmVDb2xsZWN0aW9uIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtcGx1bWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb2xsZWN0aW9uKHtcblx0dHlwZTogJ2RvYycsXG5cdHRpdGxlOiAnXHU4RDVCXHU1MzVBXHU2NzBCXHU1MTRCXHVGRjFBXHU3RUEyJyxcblx0bGlua1ByZWZpeDogJy9ydWxlL2N5YmVycHVuay8nLFxuXHRkaXI6ICdydWxlL2N5YmVycHVuaycsXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleC9ydWxlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxCYWlkdVN5bmNkaXNrXFxcXEFJXFxcXExMTVxcXFxTaXRlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGluZGV4XFxcXHJ1bGVcXFxcYXZhdGFyX2xlZ2VuZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleC9ydWxlL2F2YXRhcl9sZWdlbmQudHNcIjtpbXBvcnQgeyBkZWZpbmVDb2xsZWN0aW9uIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtcGx1bWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb2xsZWN0aW9uKHtcblx0dHlwZTogJ2RvYycsXG5cdHRpdGxlOiAnXHU5NjREXHU0RTE2XHU3OTVFXHU5MDFBJyxcblx0bGlua1ByZWZpeDogJy9ydWxlL2F2YXRhci8nLFxuXHRkaXI6ICdydWxlL2F2YXRhcicsXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcQmFpZHVTeW5jZGlza1xcXFxBSVxcXFxMTE1cXFxcU2l0ZVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxpbmRleFxcXFxtb2R1bGVzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9CYWlkdVN5bmNkaXNrL0FJL0xMTS9TaXRlL2RvY3MvLnZ1ZXByZXNzL2luZGV4L21vZHVsZXMudHNcIjtpbXBvcnQgeyBkZWZpbmVDb2xsZWN0aW9uIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtcGx1bWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29sbGVjdGlvbih7XHJcblx0dHlwZTogJ2RvYycsXHJcblx0dGl0bGU6ICdcdTZBMjFcdTdFQzRcdTRFMDBcdTg5QzgnLFxyXG5cdGxpbmtQcmVmaXg6ICcvbW9kdWxlLycsXHJcblx0ZGlyOiAnbW9kdWxlJyxcclxuXHRzaWRlYmFyOiBbXHJcblx0XHQnbWVudS9pbmRleCcsXHJcblx0XHQnbWVudS9jb2xsZWN0aW9uJyxcclxuXHRcdHtcclxuXHRcdFx0dGV4dDogJ1x1RDgzRFx1REMwOSBcdTU5NDdcdTVFN0JcdTdDN0InLFxyXG5cdFx0XHRjb2xsYXBzZWQ6IGZhbHNlLFxyXG5cdFx0XHRpdGVtczogWydtZW51L2RuZF81cicsICdtZW51L2RhZ2dlcl9oZWFydCddLFxyXG5cdFx0fSxcclxuXHRdLFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOi9CYWlkdVN5bmNkaXNrL0FJL0xMTS9TaXRlL2RvY3MvLnZ1ZXByZXNzL2luZGV4XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxCYWlkdVN5bmNkaXNrXFxcXEFJXFxcXExMTVxcXFxTaXRlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGluZGV4XFxcXHByZXAudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0JhaWR1U3luY2Rpc2svQUkvTExNL1NpdGUvZG9jcy8udnVlcHJlc3MvaW5kZXgvcHJlcC50c1wiO2ltcG9ydCB7IGRlZmluZUNvbGxlY3Rpb24gfSBmcm9tICd2dWVwcmVzcy10aGVtZS1wbHVtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb2xsZWN0aW9uKHtcclxuXHR0eXBlOiAnZG9jJyxcclxuXHR0aXRsZTogJ1x1NTkwN1x1NTZFMlx1NjAzQlx1N0QyMlx1NUYxNScsXHJcblx0ZGlyOiAncHJlcC9tZW51JyxcclxuXHRzaWRlYmFyOiBbJ2luZGV4JywgJ2RuZF81ciddLFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOi9CYWlkdVN5bmNkaXNrL0FJL0xMTS9TaXRlL2RvY3MvLnZ1ZXByZXNzL2luZGV4XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxCYWlkdVN5bmNkaXNrXFxcXEFJXFxcXExMTVxcXFxTaXRlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGluZGV4XFxcXHByZXBfZHJhZ29uX2RlbHZlcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleC9wcmVwX2RyYWdvbl9kZWx2ZXMudHNcIjtpbXBvcnQgeyBkZWZpbmVDb2xsZWN0aW9uIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtcGx1bWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29sbGVjdGlvbih7XHJcblx0dHlwZTogJ2RvYycsXHJcblx0dGl0bGU6ICdcdTVERThcdTlGOTlcdThGRjdcdTU3Q0UnLFxyXG5cdGRpcjogJ3ByZXAvZG5kXzVyL2RyYWdvbl9kZWx2ZXMnLFxyXG5cdHNpZGViYXI6IFsnaW5kZXgnLCAnYmFrZXJzX2RvZXNudCddLFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOi9CYWlkdVN5bmNkaXNrL0FJL0xMTS9TaXRlL2RvY3MvLnZ1ZXByZXNzL2luZGV4XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxCYWlkdVN5bmNkaXNrXFxcXEFJXFxcXExMTVxcXFxTaXRlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGluZGV4XFxcXHByZXBfa2Z0Z3YudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0JhaWR1U3luY2Rpc2svQUkvTExNL1NpdGUvZG9jcy8udnVlcHJlc3MvaW5kZXgvcHJlcF9rZnRndi50c1wiO2ltcG9ydCB7IGRlZmluZUNvbGxlY3Rpb24gfSBmcm9tICd2dWVwcmVzcy10aGVtZS1wbHVtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb2xsZWN0aW9uKHtcclxuXHR0eXBlOiAnZG9jJyxcclxuXHR0aXRsZTogJ1x1OUVDNFx1OTFEMVx1NUI5RFx1NUU5M1x1NEU0Qlx1OTRBNScsXHJcblx0ZGlyOiAncHJlcC9kbmRfNXIva2Z0Z3YnLFxyXG5cdHNpZGViYXI6IFsnaW5kZXgnLCAndGhlX211cmttaXJlX21hbGV2b2xlbmNlJywgJ3JlYWNoX2Zvcl90aGVfc3RhcnMnLCAncGFydHlfYXRfcGFsaXNldF9oYWxsJ10sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6L0JhaWR1U3luY2Rpc2svQUkvTExNL1NpdGUvZG9jcy8udnVlcHJlc3MvaW5kZXhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEJhaWR1U3luY2Rpc2tcXFxcQUlcXFxcTExNXFxcXFNpdGVcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcaW5kZXhcXFxccHJlcF9zdG9ybXdyYWNrLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9CYWlkdVN5bmNkaXNrL0FJL0xMTS9TaXRlL2RvY3MvLnZ1ZXByZXNzL2luZGV4L3ByZXBfc3Rvcm13cmFjay50c1wiO2ltcG9ydCB7IGRlZmluZUNvbGxlY3Rpb24gfSBmcm9tICd2dWVwcmVzcy10aGVtZS1wbHVtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb2xsZWN0aW9uKHtcclxuXHR0eXBlOiAnZG9jJyxcclxuXHR0aXRsZTogJ1x1OThDRVx1OUFCOFx1NUM5Qlx1NEU0Qlx1OUY5OScsXHJcblx0ZGlyOiAncHJlcC9kbmRfNXIvZHJhZ29uc19vZl9zdG9ybXdyYWNrX2lzbGUnLFxyXG5cdHNpZGViYXI6IFsnaW5kZXgnXSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcQmFpZHVTeW5jZGlza1xcXFxBSVxcXFxMTE1cXFxcU2l0ZVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxpbmRleFxcXFxwcmVwX2RlYXRoc19ob3VzZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleC9wcmVwX2RlYXRoc19ob3VzZS50c1wiO2ltcG9ydCB7IGRlZmluZUNvbGxlY3Rpb24gfSBmcm9tICd2dWVwcmVzcy10aGVtZS1wbHVtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb2xsZWN0aW9uKHtcclxuXHR0eXBlOiAnZG9jJyxcclxuXHR0aXRsZTogJ1x1NkI3Qlx1NEVBMVx1NEU0Qlx1NUM0QicsXHJcblx0ZGlyOiAncHJlcC9kbmRfNXIvZGVhdGhzX2hvdXNlJyxcclxuXHRzaWRlYmFyOiBbJ2luZGV4JywgJ2RlYXRoc19ob3VzZSddLFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOi9CYWlkdVN5bmNkaXNrL0FJL0xMTS9TaXRlL2RvY3MvLnZ1ZXByZXNzL2luZGV4XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxCYWlkdVN5bmNkaXNrXFxcXEFJXFxcXExMTVxcXFxTaXRlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGluZGV4XFxcXHByZXBfY3Vyc2Vfb2Zfc3RyYWhkLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9CYWlkdVN5bmNkaXNrL0FJL0xMTS9TaXRlL2RvY3MvLnZ1ZXByZXNzL2luZGV4L3ByZXBfY3Vyc2Vfb2Zfc3RyYWhkLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29sbGVjdGlvbiB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXBsdW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbGxlY3Rpb24oe1xyXG5cdHR5cGU6ICdkb2MnLFxyXG5cdHRpdGxlOiAnXHU2NUJEXHU3Mjc5XHU2MkM5XHU1RkI3XHU3Njg0XHU4QkM1XHU1NDkyJyxcclxuXHRkaXI6ICdwcmVwL2RuZF81ci9jdXJzZV9vZl9zdHJhaGQnLFxyXG5cdHNpZGViYXI6IFsnaW5kZXgnXSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcQmFpZHVTeW5jZGlza1xcXFxBSVxcXFxMTE1cXFxcU2l0ZVxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxpbmRleFxcXFxwcmVwX2Rlc2NlbnRfaW50b19hdmVybnVzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9CYWlkdVN5bmNkaXNrL0FJL0xMTS9TaXRlL2RvY3MvLnZ1ZXByZXNzL2luZGV4L3ByZXBfZGVzY2VudF9pbnRvX2F2ZXJudXMudHNcIjtpbXBvcnQgeyBkZWZpbmVDb2xsZWN0aW9uIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtcGx1bWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29sbGVjdGlvbih7XHJcblx0dHlwZTogJ2RvYycsXHJcblx0dGl0bGU6ICdcdTU3NjBcdTUxNjVcdTk2M0ZcdTVGMTdcdTdFQjNcdTY1QUYnLFxyXG5cdGRpcjogJ3ByZXAvZG5kXzVyL2Rlc2NlbnRfaW50b19hdmVybnVzJyxcclxuXHRzaWRlYmFyOiBbJ2luZGV4J10sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6L0JhaWR1U3luY2Rpc2svQUkvTExNL1NpdGUvZG9jcy8udnVlcHJlc3MvaW5kZXhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEJhaWR1U3luY2Rpc2tcXFxcQUlcXFxcTExNXFxcXFNpdGVcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcaW5kZXhcXFxccHJlcF9kb29tZWRfc3dvcmRfY29hc3QudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0JhaWR1U3luY2Rpc2svQUkvTExNL1NpdGUvZG9jcy8udnVlcHJlc3MvaW5kZXgvcHJlcF9kb29tZWRfc3dvcmRfY29hc3QudHNcIjtpbXBvcnQgeyBkZWZpbmVDb2xsZWN0aW9uIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtcGx1bWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29sbGVjdGlvbih7XHJcblx0dHlwZTogJ2RvYycsXHJcblx0dGl0bGU6ICdcdTY3MkJcdTY1RTVcdTUyNTFcdTZFN0UnLFxyXG5cdGRpcjogJ3ByZXAvZG5kXzVyL2Rvb21lZF9zd29yZF9jb2FzdCcsXHJcblx0c2lkZWJhcjogWydpbmRleCcsICdnZW9ncmFwaHknLFxyXG5cdFx0e1xyXG5cdFx0XHR0ZXh0OiAnXHU3RUY0XHU1MTRCXHU5MEEzXHU1NkRCXHU5MEU4XHU2NkYyJyxcclxuXHRcdFx0cHJlZml4OiAnLycsXHJcblx0XHRcdGl0ZW1zOiBbJ2FjYWRlbXlfb2ZfYWR2ZW50dXJlJywgJ3ZlY25hX3Jpc2UnLCAndmVjbmFfZmFsbCcsICdsZWdhY3lfb2ZfdmVjbmEnXSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHRleHQ6ICdcdTY3MkJcdTY1RTVcdTVFN0RcdTY2OTdcdTU3MzBcdTU3REYnLFxyXG5cdFx0XHRwcmVmaXg6ICcvJyxcclxuXHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHR7IHRleHQ6ICdcdTgxNTBcdTUzMTZcdTczOEJcdTY3MUQnLCBwcmVmaXg6ICcvJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IFsncmVpZ25fb2Zfcm90JywgJ3JlaWduX29mX3JvdF9jaDUnXSB9LFxyXG5cdFx0XHRcdCd3cmF0aF9vZl96dWdndG1veScsXHJcblx0XHRcdFx0J2Jsb29kX3dhcicsXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdF0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkY6L0JhaWR1U3luY2Rpc2svQUkvTExNL1NpdGUvZG9jcy8udnVlcHJlc3MvaW5kZXhcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEJhaWR1U3luY2Rpc2tcXFxcQUlcXFxcTExNXFxcXFNpdGVcXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcaW5kZXhcXFxcYWJvdXQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0JhaWR1U3luY2Rpc2svQUkvTExNL1NpdGUvZG9jcy8udnVlcHJlc3MvaW5kZXgvYWJvdXQudHNcIjtpbXBvcnQgeyBkZWZpbmVDb2xsZWN0aW9uIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtcGx1bWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb2xsZWN0aW9uKHtcblx0dHlwZTogJ2RvYycsXG5cdHRpdGxlOiAnUm9sZSBJbml0aWF0aXZlJyxcblx0bGlua1ByZWZpeDogJy9hYm91dC8nLFxuXHRkaXI6ICdhYm91dCcsXG5cdHNpZGViYXI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiAnXHU3RUE2XHU1NkUyXHU3NkY4XHU1MTczJyxcblx0XHRcdGljb246ICdtaW5nY3V0ZTpwcmF5LWxpbmUnLFxuXHRcdFx0Y29sbGFwc2VkOiBmYWxzZSxcblx0XHRcdGl0ZW1zOiBbJ2NvbnRhY3QnLCdhcHBvaW50bWVudCcsICdwcmVwYXJhdGlvbiddLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogJ1x1OEQ0NFx1NkU5MFx1OEQ0NFx1NjU5OScsXG5cdFx0XHRpY29uOiAnaWM6YmFzZWxpbmUtZG93bmxvYWQnLFxuXHRcdFx0cHJlZml4OiAncmVmJyxcblx0XHRcdGNvbGxhcHNlZDogZmFsc2UsXG5cdFx0XHRpdGVtczogWydiZ20nLCAnc2Z4J10sXG5cdFx0fSxcblx0XSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOi9CYWlkdVN5bmNkaXNrL0FJL0xMTS9TaXRlL2RvY3MvLnZ1ZXByZXNzL2luZGV4XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxCYWlkdVN5bmNkaXNrXFxcXEFJXFxcXExMTVxcXFxTaXRlXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGluZGV4XFxcXGxvZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovQmFpZHVTeW5jZGlzay9BSS9MTE0vU2l0ZS9kb2NzLy52dWVwcmVzcy9pbmRleC9sb2cudHNcIjtpbXBvcnQgeyBkZWZpbmVDb2xsZWN0aW9uIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtcGx1bWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29sbGVjdGlvbih7XHJcblx0dHlwZTogJ3Bvc3QnLFxyXG5cdHRpdGxlOiAnXHVEODNEXHVEQ0RDIFx1NTZFMlx1OEJCMCcsXHJcblx0bGlua1ByZWZpeDogJy9sb2cvJyxcclxuXHRkaXI6ICdsb2cnLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVCxTQUFTLG1CQUFtQjtBQUM3VSxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLGtCQUFrQjs7O0FDRnVTLFNBQVMseUJBQXlCOzs7QUNBbEIsU0FBUyx3QkFBd0I7QUFFblgsSUFBTyxnQkFBUSxpQkFBaUI7QUFBQSxFQUMvQixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxZQUFZO0FBQUEsRUFDWixLQUFLO0FBQUEsRUFDTCxTQUFTO0FBQUEsSUFDUjtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ04sRUFBRSxNQUFNLGlDQUFh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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBS1osTUFBTTtBQUFBO0FBQUEsTUFDUDtBQUFBLElBQ0Q7QUFBQSxJQUlBLFNBQVM7QUFBQTtBQUFBO0FBQUEsTUFHUixTQUFTO0FBQUEsUUFDUixjQUFjO0FBQUEsVUFDYjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNEO0FBQUEsVUFDQztBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFXQSxPQUFPO0FBQUEsUUFDTixPQUFPLENBQUMsUUFBUSxPQUFPLGNBQWMsWUFBWTtBQUFBLE1BQ2xEO0FBQUE7QUFBQSxNQUdBLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXdCTCxlQUFlO0FBQUEsUUFDZCxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixXQUFXO0FBQUEsTUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWdCRDtBQUFBLEVBQ0QsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImRlZmluZUNvbGxlY3Rpb24iLCAiZGVmaW5lQ29sbGVjdGlvbiIsICJkZWZpbmVDb2xsZWN0aW9uIiwgImRlZmluZUNvbGxlY3Rpb24iLCAiZGVmaW5lQ29sbGVjdGlvbiIsICJkZWZpbmVDb2xsZWN0aW9uIiwgImRlZmluZUNvbGxlY3Rpb24iLCAiZGVmaW5lQ29sbGVjdGlvbiIsICJkZWZpbmVDb2xsZWN0aW9uIiwgImRlZmluZUNvbGxlY3Rpb24iLCAiZGVmaW5lQ29sbGVjdGlvbiIsICJkZWZpbmVDb2xsZWN0aW9uIiwgImRlZmluZUNvbGxlY3Rpb24iLCAiZGVmaW5lQ29sbGVjdGlvbiIsICJkZWZpbmVDb2xsZWN0aW9uIiwgImRlZmluZUNvbGxlY3Rpb24iLCAiZGVmaW5lQ29sbGVjdGlvbiIsICJkZWZpbmVDb2xsZWN0aW9uIiwgImRlZmluZUNvbGxlY3Rpb24iLCAiZGVmaW5lQ29sbGVjdGlvbiIsICJkZWZpbmVDb2xsZWN0aW9uIiwgImRlZmluZUNvbGxlY3Rpb24iLCAiZGVmaW5lQ29sbGVjdGlvbiIsICJkZWZpbmVDb2xsZWN0aW9uIiwgImRlZmluZUNvbGxlY3Rpb24iLCAiZGVmaW5lQ29sbGVjdGlvbiIsICJkZWZpbmVDb2xsZWN0aW9uIiwgImRlZmluZUNvbGxlY3Rpb24iLCAiZGVmaW5lQ29sbGVjdGlvbiIsICJkZWZpbmVDb2xsZWN0aW9uIl0KfQo=
