import { defineHopeConfig } from "vuepress-theme-hope";
import { path } from "@vuepress/utils";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/docs/",
  dest: "./dist/docs",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    [
      'script', {type: 'text/javascript', src: '/docs/js/text.js'}
    ],
    [
      'script', {type: 'text/javascript', src: '//cdn.bootcss.com/jquery/3.4.1/jquery.min.js'}
    ]
  ],

  
  locales: {
    "/": {
      // lang: "en-US",
      // title: "sincere",
      // description: "sincere markdown center",
      lang: "zh-CN",
      title: "芯赛云",
      description: "芯赛云 文档中心",
    },
    "/en/": {
      lang: "en-US",
      title: "sincere",
      description: "sincere markdown center",
      
    },
  },

  themeConfig,
  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    "@theme-hope/components/PageFooter": path.resolve(
      __dirname,
      "./components/Footer.vue"
    ),
    "@theme-hope/module/navbar/components/Navbar": path.resolve(
      __dirname,
      "./components/Header.vue"
    ),
  },
});
