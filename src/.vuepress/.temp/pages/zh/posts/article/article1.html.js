export const data = {
  "key": "v-49b141fe",
  "path": "/zh/posts/article/article1.html",
  "title": "Article 1",
  "lang": "zh-CN",
  "frontmatter": {
    "icon": "edit",
    "date": "2022-01-01T00:00:00.000Z",
    "category": [
      "CategoryA"
    ],
    "tag": [
      "tag A",
      "tag B"
    ],
    "summary": "Article 1 Heading 2 Here is the content. Heading 3 Here is the content.",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "http://starship-client-web-sbx.voneyun.com/micorder/zh/posts/article/article1.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "Article 1"
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
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "tag A"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "tag B"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2022-01-01T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Heading 2",
      "slug": "heading-2",
      "children": [
        {
          "level": 3,
          "title": "Heading 3",
          "slug": "heading-3",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 0.05,
    "words": 14
  },
  "filePathRelative": "zh/posts/article/article1.md"
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