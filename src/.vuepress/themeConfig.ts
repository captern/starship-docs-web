import { defineThemeConfig } from "vuepress-theme-hope";
import {  } from '@vuepress/bundler-vite'
import { path } from '@vuepress/utils'
// import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default defineThemeConfig({
  bundler: ({
    viteOptions: {
      envPrefix_sad: 'sadasd'
    },
    vuePluginOptions: {},
  }),
  hostname: "http://starship-client-web-sbx.voneyun.com/",
  author: {
    name: "sincere",
    url: "http://starship-client-web-sbx.voneyun.com/",
  },
  pageInfo: [
    "Author",
    "Date",
    // "Original",
    "Category",
    "Tag",
    "ReadingTime",
    "Word",
    // "PageView",
  ],
  iconPrefix: "iconfont icon-",
  logo: "/logo.svg",
  repo: "https://gitee.com/captern/starship-docs-web",
  // repo: "http://gitlab.voneyun.com/frontend/adan-core-web",
  docsDir: "demo/src",
  // blog: {
  //   medias: {
  //     Baidu: "https://example.com",
  //     Bitbucket: "https://example.com",
  //     Dingding: "https://example.com",
  //     Discord: "https://example.com",
  //     Dribbble: "https://example.com",
  //     Email: "https://example.com",
  //     Evernote: "https://example.com",
  //     Facebook: "https://example.com",
  //     Flipboard: "https://example.com",
  //     Gitee: "https://example.com",
  //     GitHub: "https://example.com",
  //     Gitlab: "https://example.com",
  //     Gmail: "https://example.com",
  //     Instagram: "https://example.com",
  //     Lines: "https://example.com",
  //     Linkedin: "https://example.com",
  //     Pinterest: "https://example.com",
  //     Pocket: "https://example.com",
  //     QQ: "https://example.com",
  //     Qzone: "https://example.com",
  //     Reddit: "https://example.com",
  //     Rss: "https://example.com",
  //     Steam: "https://example.com",
  //     Twitter: "https://example.com",
  //     Wechat: "https://example.com",
  //     Weibo: "https://example.com",
  //     Whatsapp: "https://example.com",
  //     Youtube: "https://example.com",
  //     Zhihu: "https://example.com",
  //   },
  // },

  locales: {
    
    "/": {
      // navbar: navbar.zh,
      sidebar: sidebar.zh,
      // footer: "Default footer",
      displayFooter: false,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/en/": {
      // navbar: navbar.en,
      sidebar: sidebar.en,
      // footer: "默认页脚",
      displayFooter: false,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      // 将文章加密的配置
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    // 首页微博
    // blog: {
    //   autoExcerpt: true,
    // },

    // 评论模块
    // comment: {
    //   type: "waline",
    //   serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
