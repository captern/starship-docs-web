import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"文档中心","icon":"home"},["/index.html","/README.md"]],
  ["v-2b719290","/clouddatabase/",{"title":"云数据库","icon":"page"},["/clouddatabase/index.html","/clouddatabase/README.md"]],
  ["v-3dc42e9d","/cloudnetwork/",{"title":"云网络"},["/cloudnetwork/index.html","/cloudnetwork/README.md"]],
  ["v-55d24ff0","/cloudstorage/",{"title":"云存储"},["/cloudstorage/index.html","/cloudstorage/README.md"]],
  ["v-b170aa20","/cloudserver/",{"title":"云主机"},["/cloudserver/index.html","/cloudserver/README.md"]],
  ["v-2d0a870d","/en/",{"title":"Document Center","icon":"home"},["/en/index.html","/en/README.md"]],
  ["v-eb0fd068","/en/clouddatabase/",{"title":"cloud database"},["/en/clouddatabase/index.html","/en/clouddatabase/README.md"]],
  ["v-2a28db09","/en/cloudnetwork/",{"title":"cloud network"},["/en/cloudnetwork/index.html","/en/cloudnetwork/README.md"]],
  ["v-4236fc5c","/en/cloudstorage/",{"title":"cloud storage"},["/en/cloudstorage/index.html","/en/cloudstorage/README.md"]],
  ["v-b2b47df8","/en/cloudserver/",{"title":"cloud server"},["/en/cloudserver/index.html","/en/cloudserver/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
