<template>
  <div id="NavBar" class="NavBar">
    <div class="first-nav flex">
      <div class="logo">
        <!-- <NuxtLink :to="{ path: '/' }"> -->
          <img :src="headerTransparent ? '/logo_white.png' : '/logo_white.png'" style="width: 90px" />
        <!-- </NuxtLink> -->
      </div>
      <div class="menus flex align-center">
        <a-popover trigger="click" placement="bottomRight" overlay-class-name="header-popover" :get-popup-container="getParentNode">
          <template #content>
            <!-- <SearchPopover :search-value="searchValue" /> -->
          </template>

          <div class="title">
            <div class="search-btn flex j-space-b a-center" :class="{ 'search-btn-home': headerTransparent }">
              <a-input v-model="searchValue" 
              >
                <template #suffix>
                  <search-outlined class="search-icon" style="color: #fff" />
                </template>
              </a-input>
            </div>
          </div>
        </a-popover>
        <div class="title" >控制台</div>
        <div class="title" >备案</div>
        <!-- 消息模块 -->
        <div class="flex">
          <div class="title">消息</div>
          <div v-if="hasToken && messageUnreadTotal" class="unread-count">{{ messageUnreadTotal > 99 ? "99+" : messageUnreadTotal }}</div>
        </div>
        <!-- 下拉 app 下载模块 -->
        <a-popover placement="bottomRight" overlay-class-name="header-popover" :get-popup-container="getParentNode" @visibleChange="val => appPopActive = val">
          <template #content>
            <div class="qr-list flex">
              <div class="qr-item">
                <img src="/assets/test_qrcode.png">
                <div>Android</div>
              </div>
              <div class="qr-item">
                <img src="/assets/test_qrcode.png">
                <div>iOS</div>
              </div>
            </div>
          </template>
          <div class="title flex align-center" :class="{active: appPopActive}">
            <span>App</span>
            <caret-down-filled  class="h-dropdown-icon"/>
          </div>
        </a-popover>
        <!-- 切换语言模块 -->
        <a-popover v-if="isMounted" placement="bottomRight" overlay-class-name="header-popover" :get-popup-container="getParentNode" @visibleChange="val => langPopActive = val"
        >
          <template #content>
            <ul class="popover-user" style="min-width: 60px">
              <li v-for="(langText, key) in langMap" :key="key" class="title menu-li" @click="handleSetLang(key)">
                <span class="word-dont-break">{{ langText }}</span>
              </li>
            </ul>
          </template>
          <div class="title flex align-center" :class="{active: langPopActive}">
            <span>{{ langMap[lang] }}</span>
            <caret-down-filled class="h-dropdown-icon"/>
          </div>
        </a-popover>
        <div class="h-divider"></div>

        <!-- <div v-if="$store.state.user.getUserMsg">
          <a-icon type="loading" />
        </div> -->
        <!-- 用户登录注册模块 -->
        <div v-if="!token || !localUserMsg.userId">
          <div class="login-btn title" @click="routeTo('login', false)">登录</div>
        </div>
        <div v-if="!token || !localUserMsg.userId">
          <div class="login-btn btn-main" @click="routeTo('register', false)">注册</div>
        </div>

        <a-popover placement="bottomRight" overlay-class-name="header-popover" :get-popup-container="getParentNode" @visibleChange="val => userPopActive = val">
          <template #content>
            <ul class="popover-user" style="min-width: 60px">
              <li v-for="item in userList" :key="item.label" class="title menu-li" @click="routeTo(item.routeName, false)">
                <Icon :icon-name="item.icon" class="menu-icon"></Icon>
                <span class="word-dont-break">{{ $t(item.label) }}</span>
              </li>
            </ul>
          </template>
          <div class="title flex align-center user-info" :class="{active: userPopActive}">
            <!-- <img src="@/assets/icons_v2/user_def.png" class="user-img mr-16"> -->
            <span>{{ localUserMsg && localUserMsg.userTag }}</span>
            <down-outlined  class="h-dropdown-icon"/>
          </div>
        </a-popover>
        
      </div>
    </div>
  </div>
</template>


<script>
import Cookies from 'js-cookie'

export default ({
  data(){
    return {
      scrollTop: 0,
      langMap: {
        'zh-CN': '简体中文',
        'en-US': 'English'
      },
      isMounted: false,
      langPopActive: false,
      userPopActive: false,
      windowDocument: null
    }
  },
  computed:{
    headerTransparent() {
      return this.scrollTop <= 60
    },
    lang() {
      return this.getCookie('lang') || 'zh-CN'
    },
    token() {
      return this.getCookie('Token') || null
    },
    localUserMsg(){
      return this.getLocalStorage('wmUserInfo') ?JSON.parse(this.getLocalStorage('wmUserInfo')): null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll)
    this.isMounted = true
    this.windowDocument = window
  },
  unmounted() {
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    scroll() {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    },
    getParentNode() {
      return document.getElementById('NavBar')
    },
    getCookie(TokenName, option = {}) {
      return Cookies.get(TokenName, { ...option });
    },
    setCookie(TokenName, value, option = {}) {
      Cookies.set(TokenName, value, { expires: 1 ,...option})
    },
    removeCookie(TokenName, option = {}) {
      Cookies.remove(TokenName, { ...option });
    },
    setLocalStorage(name, value) {
      if(this.windowDocument){
        return this.windowDocument.localStorage.setItem(name, value)
      }else{
        return null
      }
      
    },
    getLocalStorage(name) {
      if(this.windowDocument){
        return this.windowDocument.localStorage.getItem(name)
      }else{
        return null
      }
    },
    remoteLocalStorage (name) {
      window.localStorage.removeItem(name)
    },
    handleSetLang(lang) {
      // his.setCookie('lang', lang, { domain: 'voneyun.com' })
      this.setCookie('lang', lang, {expires: 1})
      console.log(window.location.href)
      if(lang=== 'en-US'){
        window.location.href = window.location.href.replace('/micorder', '/micorder/en')
      }else if(lang=== 'zh-CN'){
        window.location.href = window.location.href.replace('/micorder/en', '/micorder')
      }
    },
    routeTo (path, self = true) {
      toExternalUrl({ url: path, type: '_blank' })
    },
    toExternalUrl ({ url, query = {}, storage, location = process.env.VUE_APP_OTHER_BASEURL, type = '_self', hasClientId = true })  {
      let to = location + url
      if (hasClientId) {
        const random = (Math.random() * Math.pow(10, 16) + '').substr(0, 15)
        query.clientId = random
      }

      for (const key in query) {
        if (hasOwn(query, key)) {
          const item = query[key]
          if (to.indexOf('?') > 0) {
            to += '&' + key + '=' + item
          } else {
            to += '?' + key + '=' + item
          }
        }
      }

      if (storage && hasClientId) {
        const storageStr = JSON.stringify(storage)
        const key = `storage:product:${query.clientId}`
        setSessionStorage({ [key]: storageStr }).then((res) => {
          if (res.code === 10200) {
            window.open(to, type)
          } else {
            message.warning(Vue.$t('I18N.utils.tools.huanCunShiBai'))
            window.open(to, type)
          }
        })
      } else {
        window.open(to, type)
      }
    }
  }
})
</script>

<style lang="less" scoped>
@import url('../styles/var/var.less');
@import url('../styles/var/project.less');
.NavBar{
  padding: 0;
  height: auto;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
}

.first-nav {
  
  justify-content: space-between;
  width: 100%;
  min-width: 1320px;
  box-sizing: border-box;
  height: @header_height;
  padding-left: 30px;
  line-height: @header_height;
  background: @color_main_bg;
}

.second-nav {
  width: 100%;
  min-width: 1320px;
  height: 48px;
  padding: 0 30px;
  background: #3D456C;

  &.home-nav {
    position: absolute;
    top: @header_height;
    left: 0;
    background: rgba(#1D2755, 0.55);
    z-index: 10;
  }
}

.logo {
  display: flex;
  align-items: center;
  width: 140px;
  margin-right: 50px;
  text-align: center;

  img {
    width: auto;
    transition: all 300ms;
  }
}

.unread-count {
  margin-top: 15px;
  margin-left: -8px;
  height: 16px;
  padding: 0 5px;
  line-height: 16px;
  color: white;
  font-size: 12px;
  background-color: #ff4d4f;
  border-radius: 6px;
}

.menu-item {
  position: relative;
  display: flex;
  align-items: center;
  line-height: 40px;
  color: white;
  opacity: 1;

  &:not(:last-child){
    margin-right: 50px;
  }

  .h-dropdown-icon {
    margin-left: 4px;
    font-size: 10px;
    color: white;
    transition: all .3s linear;
  }

  &:hover {
    // color: @color_hover;
    .h-dropdown-icon {
      // color: @color_hover;
      transform: rotate(180deg);
    }
    .nav-popover {
      padding: 20px 30px;
      height: auto;
      opacity: 1;
    }
  }
}

.menus {
  .title {
    padding: 0 17px;
    cursor: pointer;

    .h-dropdown-icon {
      margin-left: 4px;
      font-size: 10px;
      color: white;
      transition: all .3s linear;
    }

    .user-img {
      width: 36px;
    }

    &:hover, &.active {
      // color: @color_hover;
      .h-dropdown-icon {
        // color: @color_hover;
        transform: rotate(180deg);
      }
    }

    .search-btn {
      height: 32px;
      width: 230px;
      background: rgba(#fff, .15);
      border-radius: 4px;
      color: #999;

      .search-icon {
        font-size: 18px;
        color: #000;
      }

      // /deep/ .ant-input-affix-wrapper {
      //   background: transparent;
      //   box-shadow: none;
      //   border: none;
      //   input {
      //     color: #fff;
      //     border: none;
      //     background: transparent;
      //     box-shadow: none;
      //     &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      //       color:    #999;
      //     }
      //     &:focus {
      //       border: none;
      //       background: transparent;
      //       // border-bottom: 1px solid white !important;
      //       box-shadow: none;
      //     }
      //   }
      // }
    }

    .search-btn-home {
      color: #f1f2f1;

      .search-icon {
        color: #fff;
      }
    }

    .btn {
      display: inline-block;
      height: 32px;
      line-height: 32px;
      padding: 0 16px;
      border-radius: 4px;
      color: #fff;
      // background: @color_primary;
    }
  }
}

.popover-user {
  line-height: 2em;

  li {
    cursor: pointer;

    &:hover {
      // color: @color_hover;
    }
  }
}

.menu-li {
  margin: 4px 0;
  display: flex;
  align-items: center;

  .menu-icon {
    margin-right: 8px;
    font-size: 14px;
  }
}

.word-dont-break {
  word-break: keep-all;
}

.qr-list{
    padding: 20px;
  .qr-item{
    font-size: 12px;
    color: #666;
    text-align: center;
    &:first-child{
      margin-right: 30px;
    }
    img {
      margin-bottom: 12px;
      width: 120px;
      height: 120px;
    }
  }
}

.h-divider {
  margin-left: 17px;
  width: 1px;
  height: 18px;
  background: #D8D8D8;
}

.login-btn {
  width: 96px;
  min-width: auto;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.user-info {
  margin-left: 17px;
  padding-right: 30px;
}
</style>
