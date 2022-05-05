

export const computing = {
  class: "I18N.utils.product.jiSuan",
  icon: 'icon-cpu',
  // localIcon: require('@assets/v4/icons/h_jisuan.svg'),
  localIcon: '',
  list: [
    {
      label: "I18N.utils.product.yunFuWuQi",
      suffix: 'cloud_server',
      // icon: require('@assets/icons_v2/prod_feat_8.svg'),
      // background: require('@assets/images_v2/index_1.png'),
      routeName: '/product_index',
      isSelf: true,
      query: {
        suffix: 'cloud_server'
      },
      desc: "I18N.utils.product.tongGuoXuNiHua"
    },
    {
      label: "I18N.utils.product.gPUYunFu",
      suffix: 'gpu_cloud_server',
      // icon: require('@assets/icons_v2/prod_feat_7.svg'),
      // background: require('@assets/images_v2/index_2.png'),
      routeName: '/product_index',
      isSelf: true,
      query: {
        suffix: 'gpu_cloud_server'
      },
      desc: "I18N.utils.product.gPUYunZhu"
    },
    {
      label: "I18N.utils.product.luoJinShuFuWu2",
      suffix: 'bare_metal_server',
      // icon: require('@assets/icons_v2/prod_feat_4.svg'),
      // background: require('@assets/images_v2/index_3.png'),
      routeName: '/product_index',
      isSelf: true,
      query: {
        suffix: 'bare_metal_server'
      },
      desc: "I18N.utils.product.luoJinShuFuWu"
    },
    {
      label: "I18N.utils.product.gPULuoJin2",
      suffix: 'gpu_bare_metal_server',
      // icon: require('@assets/icons_v2/prod_feat_22.svg'),
      // background: require('@assets/images_v2/index_4.png'),
      routeName: '/product_index',
      isSelf: true,
      query: {
        suffix: 'gpu_bare_metal_server'
      },
      desc: "I18N.utils.product.gPULuoJin"
    },
    {
      label: "I18N.utils.product.zhuanShuSuZhuJi",
      suffix: 'dedicated_host',
      // icon: require('@assets/icons_v2/prod_feat_14.svg'),
      // background: require('@assets/images_v2/index_5.png'),
      routeName: '/product_index',
      isSelf: true,
      query: {
        suffix: 'dedicated_host'
      },
      desc: "I18N.utils.product.zhuanShuSuZhuJi2"
    }
  ]
}
export const hotProductList = [
  ...computing.list.slice(0, 4),
  {
    label: "I18N.utils.product.yunYingPan",
    routeName: '/product_index',
    isSelf: true,
    query: {
      suffix: 'storage'
    }
  }
]

// 友情链接
export const friendsLink = [
  {
    label: 'VoneTracer',
    dontTranslate: true,
    url: 'https://www.vonetracer.com/#/login'
  },
  {
    label: 'VoneDAO',
    dontTranslate: true,
    url: 'https://www.vonedao.com/home'
  },
  {
    label: 'VoneBaaS',
    dontTranslate: true,
    url: 'http://www.vonechain.com/web/product/vonebaas'
  }
]
// 支持与服务
export const supportsLink = [
  {
    label: "I18N.utils.product.yongHuCaoZuoZhi",
    isSelf: true,
    routeName: '/help_index',
    query: { tab: 'guide' }
  },
  {
    label: "I18N.utils.product.changJianWenTi",
    isSelf: true,
    routeName: '/help_index',
    query: { tab: 'faq' }
  },
  { label: "I18N.utils.product.shouQianZiXun" },
  { label: "I18N.utils.product.jiChuFuWu" },
  { label: "I18N.utils.product.zhuanJiaJiShuFu" }
]
// 支持与服务
export const aboutLink = [
  {
    label: "I18N.utils.product.gongSiJianJie",
    routeName: '/about_index',
    isSelf: true
  },
  { label: "I18N.utils.product.shouQianZiXun" },
  {
    label: "I18N.utils.product.zuiXinZiXun",
    routeName: '/news_index',
    isSelf: true
  }
]
export const footerProduct = [
  {
    class: "I18N.utils.product.reMenChanPin",
    list: hotProductList
  },
  {
    class: "I18N.utils.product.youQingLianJie",
    list: friendsLink
  },
  {
    class: "I18N.utils.product.zhiChiYuFuWu",
    list: supportsLink
  },
  {
    class: "I18N.utils.product.liaoJieXinSaiYun",
    list: aboutLink
  }
]