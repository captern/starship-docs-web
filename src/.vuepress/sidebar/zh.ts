import { defineSidebarConfig } from "vuepress-theme-hope";

export const zh = defineSidebarConfig({
  "/": [
    "",
    // "home",
    "cloudserver/",
    "cloudstorage/",
    "cloudnetwork/",
    "clouddatabase/",
    // "slide",
    // {
    //   icon: "creative",
    //   text: "Guide",
    //   collapsable: true,
    //   prefix: "guide/",
    //   link: "guide/",
    //   children: ["page", "markdown", "disable", "encrypt"],
    // },
    // {
    //   text: "Articles",
    //   icon: "note",
    //   link: "guide/",
    //   prefix: "posts/",
    //   children: [
    //     {
    //       text: "Articles 1-4",
    //       icon: "note",
    //       collapsable: true,
    //       prefix: "article/",
    //       children: ["article1", "article2", "article3", "article4"],
    //     },
    //     {
    //       text: "Articles 5-12",
    //       icon: "note",
    //       children: [
    //         {
    //           text: "Articles 5-8",
    //           icon: "note",
    //           collapsable: true,
    //           prefix: "article/",
    //           children: ["article5", "article6", "article7", "article8"],
    //         },
    //         {
    //           text: "Articles 9-12",
    //           icon: "note",
    //           children: ["article9", "article10", "article11", "article12"],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
});
