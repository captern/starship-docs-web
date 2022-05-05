export const data = {
  "key": "v-26f63cfe",
  "path": "/zh%20copy/",
  "title": "文档中心",
  "lang": "zh-CN",
  "frontmatter": {
    "home": false,
    "icon": "home",
    "title": "文档中心",
    "heroImage": "/logo.svg",
    "heroText": "captern",
    "heroFullScreen": true,
    "tagline": "测试内容",
    "projects": [
      {
        "icon": "project",
        "name": "项目名称",
        "desc": "项目详细描述",
        "link": "https://你的项目链接"
      },
      {
        "icon": "link",
        "name": "链接名称",
        "desc": "链接详细描述",
        "link": "https://链接地址"
      },
      {
        "icon": "book",
        "name": "书籍名称",
        "desc": "书籍详细描述",
        "link": "https://你的书籍链接"
      },
      {
        "icon": "article",
        "name": "文章名称",
        "desc": "文章详细描述",
        "link": "https://你的文章链接"
      },
      {
        "icon": "friend",
        "name": "伙伴名称",
        "desc": "伙伴详细介绍",
        "link": "https://你的伙伴链接"
      },
      {
        "icon": "/logo.svg",
        "name": "自定义项目",
        "desc": "自定义详细介绍",
        "link": "https://你的自定义链接"
      }
    ],
    "footer": "自定义你的页脚文字",
    "summary": "芯赛云文档中心 具体内容待编辑",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "http://starship-client-web-sbx.voneyun.com/micorder/zh%20copy/"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "文档中心"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale:alternate",
          "content": "en-US"
        }
      ],
      [
        "meta",
        {
          "name": "twitter:card",
          "content": "summary_large_image"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0.05,
    "words": 14
  },
  "filePathRelative": "zh copy/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
