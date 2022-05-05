export const data = {
  "key": "v-2d0ad528",
  "path": "/zh/",
  "title": "Document Center",
  "lang": "zh-CN",
  "frontmatter": {
    "home": false,
    "icon": "home",
    "title": "Document Center",
    "heroImage": "/logo.svg",
    "heroText": "阿斯顿撒多",
    "tagline": "You can put your slogan here",
    "heroFullScreen": true,
    "projects": [
      {
        "icon": "project",
        "name": "project name",
        "desc": "project detailed description",
        "link": "https://your.project.link"
      },
      {
        "icon": "link",
        "name": "link name",
        "desc": "link detailed description",
        "link": "https://link.address"
      },
      {
        "icon": "book",
        "name": "book name",
        "desc": "Detailed description of the book",
        "link": "https://link.to.your.book"
      },
      {
        "icon": "article",
        "name": "article name",
        "desc": "Detailed description of the article",
        "link": "https://link.to.your.article"
      },
      {
        "icon": "friend",
        "name": "friend name",
        "desc": "Detailed description of friend",
        "link": "https://link.to.your.friend"
      },
      {
        "icon": "/logo.svg",
        "name": "custom item",
        "desc": "Detailed description of this custom item",
        "link": "https://link.to.your.friend"
      }
    ],
    "footer": "<a href=\"https://github.com/Mister-Hope\">Mr.Hope</a>",
    "copyrightText": "MIT LICENSE",
    "summary": "芯赛云文档中心 具体内容待编辑",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "http://starship-client-web-sbx.voneyun.com/micorder/zh/"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "Document Center"
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
  "filePathRelative": "zh/README.md"
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
