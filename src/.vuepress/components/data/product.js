
export const computing = {
  class: "I18N.utils.product.jiSuan",
  icon: 'icon-cpu',
  localIcon: ('/assets/v4/icons/h_jisuan.svg'),
  list: [
    {
      label: "I18N.utils.product.yunFuWuQi",
      suffix: 'cloud_server',
      icon: ('/assets/icons_v2/prod_feat_8.svg'),
      background: ('/assets/images_v2/index_1.png'),
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
      icon: ('/assets/icons_v2/prod_feat_7.svg'),
      background: ('/assets/images_v2/index_2.png'),
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
      icon: ('/assets/icons_v2/prod_feat_4.svg'),
      background: ('/assets/images_v2/index_3.png'),
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
      icon: ('/assets/icons_v2/prod_feat_22.svg'),
      background: ('/assets/images_v2/index_4.png'),
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
      icon: ('/assets/icons_v2/prod_feat_14.svg'),
      background: ('/assets/images_v2/index_5.png'),
      routeName: '/product_index',
      isSelf: true,
      query: {
        suffix: 'dedicated_host'
      },
      desc: "I18N.utils.product.zhuanShuSuZhuJi2"
    }
  ]
}

export const storage = {
  class: "I18N.utils.product.cunChu",
  icon: 'icon-h-cunchu',
  localIcon: ('/assets/v4/icons/h_cunchu.svg'),
  list: [
    {
      label: "I18N.utils.product.yunYingPan",
      suffix: 'storage',
      icon: ('/assets/icons_v2/prod_icon_02.svg'),
      background: ('/assets/images_v2/index_6.png'),
      routeName: '/product_index',
      isSelf: true,
      query: {
        suffix: 'storage'
      },
      desc: "I18N.utils.product.yunYingPanShiWei"
    },
    {
      label: "I18N.utils.product.duiXiangCunChu",
      suffix: 'oss',
      icon: ('/assets/icons_v2/prod_icon_04.svg'),
      background: ('/assets/images_v2/index_7.png'),
      routeName: '/product_index',
      isSelf: true,
      query: {
        suffix: 'oss'
      },
      desc: "I18N.utils.product.duiXiangCunChuShi"
    },
    {
      label: "I18N.utils.product.wenJianCunChu",
      suffix: 'cfs',
      icon: ('/assets/icons_v2/prod_icon_01.svg'),
      background: ('/assets/images_v2/index_8.png'),
      routeName: '/product_index',
      isSelf: true,
      query: {
        suffix: 'cfs'
      },
      desc: "I18N.utils.product.wenJianCunChuShi"
    }
  ]
}

export const network = {
  class: "I18N.utils.product.wangLuo",
  icon: 'icon-h-wangluo',
  localIcon: ('/assets/v4/icons/h_wangluo.svg'),
  list: [
    {
      label: "I18N.utils.product.vPCWangLuo",
      icon: ('/assets/icons_v2/prod_feat_9.svg'),
      background: ('/assets/images_v2/index_5.png'),
      isSelf: false,
      path: '/Internet/VPC',
      desc: "I18N.utils.product.zaiVPCWang"
    },
    {
      label: "I18N.utils.product.xuNiLuYou",
      icon: ('/assets/icons_v2/prod_feat_9.svg'),
      background: ('/assets/images_v2/index_2.png'),
      isSelf: false,
      path: '/Internet/VirtualRouter',
      desc: "I18N.utils.product.xuNiWangLuoJi"
    },
    {
      label: "I18N.utils.product.vPNLianJie2",
      icon: ('/assets/icons_v2/prod_feat_11.svg'),
      background: ('/assets/images_v2/index_4.png'),
      isSelf: false,
      path: '/Internet/VPN',
      desc: "I18N.utils.product.vPNLianJie"
    },
    {
      label: "I18N.utils.product.tanXingIP",
      icon: ('/assets/icons_v2/prod_feat_3.svg'),
      background: ('/assets/images_v2/index_1.png'),
      suffix: 'elastic_ip',
      routeName: '/product_index',
      query: {
        suffix: 'elastic_ip'
      },
      isSelf: true,
      // path: '/Internet/ElasticityIP',
      desc: "I18N.utils.product.tanXingGongWangI"
    }
    // {
    //   label: 'CDN网络',
    //   icon: ('/assets/icons_v2/prod_feat_7.svg'),
    //   isSelf: true,
    //   query: {
    //   },
    //   desc: 'CDN通过遍布全国的缓存边缘节点、内部专用线路以及完善的网络路由调度机制为用户自动选择最佳网络访问路径。'
    // },
    // {
    //   label: '负载均衡',
    //   suffix: 'load_balancing',
    //   icon: ('/assets/icons_v2/prod_feat_29.svg'),
    //   isSelf: true,
    //   query: {
    //     suffix: 'load_balancing'
    //   }
    // }
  ]
}

export const security = {
  class: "I18N.utils.product.anQuan",
  icon: 'icon-yunanquan',
  localIcon: ('/assets/v4/icons/h_wangluo.svg'),
  list: [
    {
      label: "I18N.utils.product.anQuanZu",
      icon: ('/assets/icons_v2/prod_icon_03.svg'),
      background: ('/assets/images_v2/index_3.png'),
      isSelf: false,
      path: '/Security/SecurityGroup',
      desc: "I18N.utils.product.anQuanZuKeYi"
    },
    {
      label: "I18N.utils.product.fangHuoQiang",
      icon: ('/assets/icons_v2/prod_icon_03.svg'),
      background: ('/assets/images_v2/index_3.png'),
      suffix: 'firewall',
      routeName: '/product_index',
      query: {
        suffix: 'firewall'
      },
      isSelf: true,
      desc: "I18N.utils.product.tiGongOWA"
    }
  ]
}

export const blockchain = {
  class: "I18N.utils.product.quKuaiLian",
  icon: 'icon-gongyinglianziliao',
  list: [
    {
      label: "I18N.utils.product.quKuaiLianSuYuan2",
      routeName: 'solution_index',
      isSelf: true,
      query: {
        key: 'VoneTracer'
      },
      title: "I18N.utils.product.quKuaiLianSuYuan",
      desc: [
        "I18N.utils.product.chanPinSuYuanQu",
        "I18N.utils.product.wangLianKeJiYing"
      ]
    },
    {
      label: "I18N.utils.product.quKuaiLianZiZu",
      routeName: 'solution_index',
      isSelf: true,
      query: {
        key: 'VoneDAO'
      },
      title: "I18N.utils.product.ziZuZhiXieZuo2",
      desc: [
        "I18N.utils.product.ziZuZhiXieZuo"
      ]
    },
    {
      label: "I18N.utils.product.quKuaiLianJiFu",
      routeName: 'solution_index',
      isSelf: true,
      query: {
        key: 'VoneBaas'
      },
      title: "I18N.utils.product.quKuaiLianJiChu",
      desc: [
        "I18N.utils.product.wuLunNeiGeGong"
      ]
    }
  ]
}

export const idc = {
  class: "I18N.utils.product.iDCJiFang",
  icon: 'icon-IDC',
  list: [
    {
      label: "I18N.utils.product.fuWuQiTuoGuan",
      routeName: 'product_server',
      isSelf: true,
      query: {}
    }
  ]
}

export const partnerSub = [
  {
    class: "I18N.utils.product.zhaoShangHeZuo",
    localIcon: ('/assets/v4/icons/h_zhaoshang.svg'),
    list: [
      {
        label: "I18N.utils.product.shenQingLiuCheng",
        routeName: 'partner_index',
        isSelf: true,
        query: { tab: 'Merchants', id: 'ApplySec' }
      },
      {
        label: "I18N.utils.product.huoBanQuanYi",
        routeName: 'partner_index',
        isSelf: true,
        query: { tab: 'Merchants', id: 'RightsSec' }
      }
    ]
  },
  {
    class: "I18N.utils.product.jiShuHeZuo",
    localIcon: ('/assets/v4/icons/h_jishu.svg'),
    list: [
      {
        label: "I18N.utils.product.shenQingLiuCheng",
        routeName: 'partner_index',
        isSelf: true,
        query: { tab: 'Technology', id: 'ApplySec' }
      },
      {
        label: "I18N.utils.product.huoBanQuanYi",
        routeName: 'partner_index',
        isSelf: true,
        query: { tab: 'Technology', id: 'RightsSec' }
      }
    ]
  },
  {
    class: "I18N.utils.product.zhengWuHeZuo",
    localIcon: ('/assets/v4/icons/h_zhengwu.svg'),
    list: [
      {
        label: "I18N.utils.product.jiaRuZhengWuHe",
        routeName: 'partner_index',
        isSelf: true,
        query: { tab: 'Government', id: 'ApplySec' }
      },
      {
        label: "I18N.utils.product.zhengWuZhuanShuZi",
        routeName: 'partner_index',
        isSelf: true,
        query: { tab: 'Government', id: 'RightsSec' }
      }
    ]
  }
]

export const supportSub = [
  {
    class: "I18N.utils.product.wenDangYuGongJu",
    localIcon: ('/assets/v4/icons/h_wendang.svg'),
    list: [
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
      }
    ]
  },
  {
    class: "I18N.utils.product.keHuZhiChi",
    localIcon: ('/assets/v4/icons/h_kehu.svg'),
    list: [
      { label: "I18N.utils.product.shouQianZiXun" },
      { label: "I18N.utils.product.jiChuFuWu" },
      { label: "I18N.utils.product.zhuanJiaJiShuFu" }
    ]
  }
]

export const aboutSub = [
  {
    class: "I18N.utils.product.guanYuWoMen",
    localIcon: ('/assets/v4/icons/h_guanyu.svg'),
    list: [
      {
        label: "I18N.utils.product.gongSiJianJie",
        routeName: '/about_index',
        isSelf: true
      }
    ]
  },
  {
    class: "I18N.utils.product.jingXuanTuiJian",
    localIcon: ('/assets/v4/icons/h_tuijian.svg'),
    list: [
      {
        label: "I18N.utils.product.yunFuWuQi",
        routeName: '/product_index',
        isSelf: true,
        query: {
          suffix: 'cloud_server'
        }
      },
      {
        label: "I18N.utils.product.zhuanShuSuZhuJi",
        routeName: '/product_index',
        isSelf: true,
        query: {
          suffix: 'dedicated_host'
        }
      },
      {
        label: "I18N.utils.product.tanXingIP",
        routeName: '/product_index',
        isSelf: true,
        query: {
          suffix: 'elastic_ip'
        }
      }
    ]
  },
  {
    class: "I18N.utils.product.zuiXinZiXun",
    localIcon: ('/assets/v4/icons/h_zixun.svg'),
    list: [
      {
        label: "I18N.utils.product.zuiXinZiXun",
        routeName: '/news_index',
        isSelf: true
      }
    ]
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

export const customerList = [
  {
    label: "I18N.utils.product.guoJiaJiShuZhuan",
    routeName: '',
    isSelf: false,
    query: {}
  },
  {
    label: "I18N.utils.product.jingLanKeJi",
    routeName: '',
    isSelf: false,
    query: {}
  },
  {
    label: "I18N.utils.product.yiHaiJiaLi",
    routeName: '',
    isSelf: false,
    query: {}
  },
  {
    label: "I18N.utils.product.beiGeJinRong",
    routeName: '',
    isSelf: false,
    query: {}
  },
  {
    label: "I18N.utils.product.hongXingShiYe",
    routeName: '',
    isSelf: false,
    query: {}
  },
  {
    label: "I18N.utils.product.cDVXinAo",
    routeName: '',
    isSelf: false,
    query: {}
  }
]

export const aboutList = [
  {
    label: "I18N.utils.product.gongSiJianJie",
    routeName: 'about_index',
    isSelf: true,
    query: {}
  },
  {
    label: "I18N.utils.product.jiaRuWoMen",
    routeName: 'about_index',
    isSelf: true,
    query: {}
  },
  {
    label: "I18N.utils.product.lianXiWoMen",
    routeName: 'about_index',
    isSelf: true,
    query: {}
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

export const userList = [
  {
    label: "I18N.utils.product.zhangHuZhongXin",
    icon: 'icon-yonghu',
    routeName: '/UserInfo/Safe',
    isSelf: false,
    query: {}
  },
  {
    label: "I18N.utils.product.feiYongZhongXin",
    icon: 'icon-feiyongbaoxiao',
    routeName: '/Cost/Index',
    isSelf: false,
    query: {}
  },
  {
    label: "I18N.utils.product.tuiChuDengLu",
    icon: 'icon-tuichudenglu-3',
    routeName: 'logout',
    isSelf: false,
    query: {}
  }
]

export const solutionList = [
  {
    title: "I18N.utils.product.zhengFuJiGongGong2",
    titleCN: '政府及公共事业',
    titleEN: 'Government and Public Utilities',
    numBg: ('@/assets/v4/images/s_bg_1.svg'),
    img: ('@/assets/v4/images/s1.svg'),
    content: [
      { title: "I18N.utils.product.zhengFuJiGongGong", desc: "I18N.utils.product.weiShiYingShuZi" },
      { title: "I18N.utils.product.tongChouTongJianXie", desc: "I18N.utils.product.quanMianJiaQiangZheng" },
      { title: "I18N.utils.product.xianJieShunChangHu", desc: "I18N.utils.product.yiTuoJiChuShe" },
      { title: "I18N.utils.product.zhiNengJingZhunJian", desc: "I18N.utils.product.faHuiWuLianWang" }
    ]
  },
  {
    title: "I18N.utils.product.nongYeJiHuanBao2",
    titleCN: '农业及环保',
    titleEN: 'Agriculture and Environmental Protection',
    numBg: ('@/assets/v4/images/s_bg_2.svg'),
    img: ('@/assets/v4/images/s2.svg'),
    content: [
      { title: "I18N.utils.product.nongYeJiHuanBao", desc: "I18N.utils.product.shiShiShouJiBing" },
      { title: "I18N.utils.product.shengJiShengChanMo", desc: "I18N.utils.product.zaiNongYeJiHuan" },
      { title: "I18N.utils.product.shengJiGuanLiMo", desc: "I18N.utils.product.nongYeXuMuHuan" },
      { title: "I18N.utils.product.shengJiJingYingMo", desc: "I18N.utils.product.jingYingMoShiChuang" }
    ]
  },
  {
    title: "I18N.utils.product.jinRong",
    titleCN: '金融',
    titleEN: 'Financial Sector',
    numBg: ('@/assets/v4/images/s_bg_3.svg'),
    img: ('@/assets/v4/images/s3.svg'),
    content: [
      { title: "I18N.utils.product.jinRongHangYeQu", desc: "I18N.utils.product.jinNianLaiSuiZhe" },
      { title: "I18N.utils.product.jinRongJianGuanQu", desc: "I18N.utils.product.jinRongHangYeQiang" },
      { title: "I18N.utils.product.chuanTongICT2", desc: "I18N.utils.product.chuanTongICT" },
      { title: "I18N.utils.product.yeWuChuangXinQu", desc: "I18N.utils.product.suiZheYiDongHu" }
    ]
  },
  {
    title: "I18N.utils.product.jiaoYu",
    titleCN: '教育',
    titleEN: 'Education Industry',
    numBg: ('@/assets/v4/images/s_bg_4.svg'),
    img: ('@/assets/v4/images/s4.svg'),
    content: [
      { title: "I18N.utils.product.jiaoYuYouZhiJun", desc: "I18N.utils.product.jiaoYuXinXiHua" },
      { title: "I18N.utils.product.youJiBenJunHeng", desc: "I18N.utils.product.suiZheJiaoYuXin" },
      { title: "I18N.utils.product.zhiNengYinLingJiao", desc: "I18N.utils.product.daShuJuRenGong" },
      { title: "I18N.utils.product.renCaiPeiYangChan", desc: "I18N.utils.product.faZhanYiZhiYe" }
    ]
  },
  {
    title: "I18N.utils.product.yiLiaoJianKang",
    titleCN: '医疗健康',
    titleEN: 'Medical Health',
    numBg: ('@/assets/v4/images/s_bg_5.svg'),
    img: ('@/assets/v4/images/s5.svg'),
    content: [
      { title: "I18N.utils.product.xinJiShuJiaSu", desc: "I18N.utils.product.yiLiaoZuoWeiZhong" },
      { title: "I18N.utils.product.congChuanTongZhenLiao", desc: "I18N.utils.product.suiZheFenJiZhen" },
      { title: "I18N.utils.product.congYiYiYuanWei", desc: "I18N.utils.product.jieZhuYiDongZhi" },
      { title: "I18N.utils.product.congYiZhiLiaoWei", desc: "I18N.utils.product.yiLiaoFuWuCong" }
    ]
  },
  {
    title: "I18N.utils.product.zhiHuiChengShi",
    titleCN: '智慧城市',
    titleEN: 'Smart City',
    numBg: ('@/assets/v4/images/s_bg_6.svg'),
    img: ('@/assets/v4/images/s6.svg'),
    content: [
      { title: "I18N.utils.product.zhiHuiChengShiQu", desc: "I18N.utils.product.zhiHuiChengShiFa" },
      { title: "I18N.utils.product.chengShiZhiLiZhi", desc: "I18N.utils.product.suiZheRenGongZhi" },
      { title: "I18N.utils.product.gongGongFuWuTou", desc: "I18N.utils.product.yiXinXiHuaZhi" },
      { title: "I18N.utils.product.jiChuSheShiJi", desc: "I18N.utils.product.jiYuYunSheShi" }
    ]
  }
]

export default {
  product: [computing, storage, network, security],
  solution: [blockchain, idc]
}
