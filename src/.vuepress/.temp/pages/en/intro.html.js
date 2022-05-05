export const data = {
  "key": "v-5aa3d8ba",
  "path": "/en/intro.html",
  "title": "Intro Page",
  "lang": "en-US",
  "frontmatter": {
    "icon": "info",
    "summary": "Intro Page Place your introducation and profile here.",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "http://starship-client-web-sbx.voneyun.com/micorder/en/intro.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "Intro Page"
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
          "content": "en-US"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale:alternate",
          "content": "zh-CN"
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
    "minutes": 0.03,
    "words": 8
  },
  "filePathRelative": "en/intro.md"
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
