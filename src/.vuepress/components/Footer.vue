<template>
  <footer class="footer">
    <div class="main-container">
      <div class="footer-content flex">
        <div class="flex flex-1">
          <div v-for="(item, index) in footerProduct" :key="index" class="flex-1">
            <p class="t-title mb-16 title">{{ formateMsg(item.class) }}</p>
            <ul class="menu-list">
              <li v-for="(link, lIndex) in item.list" :key="lIndex" class="t-text">
                <div v-if="link.isSelf">
                  <a v-if="link.routeName" :to="{ path: link.routeName, query: link.query }">
                    {{ link.dontTranslate ? link.label : formateMsg(link.label) }}
                  </a>
                  <span v-else>{{ link.dontTranslate ? link.label : formateMsg(link.label) }}</span>
                </div>
                <a v-else-if="link.url" :href="link.url" target="_blank">{{ link.dontTranslate ? link.label : $t(link.label) }}</a>
                <div v-else :class="{pointer: link.path}" @click="to(link)">
                  {{ link.dontTranslate ? link.label : formateMsg(link.label) }}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="qr-code-wrap">
          <p class="t-title mb-16">联系我们</p>
          <div class="contact-info flex align-center">
            <img src="/assets/v4/icons/icon_phone.svg" class="icon-phone" />
            <span>400-895-6366</span>
          </div>
          <img src="/assets/v4/icons/logo.svg" class="logo" />
        </div>
      </div>
      <div class="copyright">
        <span>{{ formateMsg('I18N.components.Footer.banQuanSuoYouC') }}</span>
        <span class="pl-8">{{ formateMsg('I18N.components.Footer.huICPBei') }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
import {formateMsg} from './utils/formate'
import {footerProduct} from './data/footer'
export default ({
  data() {
    return {
      footerProduct
    }
  },
  methods: {
    to(item) {
      if (!item.path) { return }
      toExternalUrl({ url: item.path, type: "_blank", location: '' })
    },
    replace(string){
      console.log(string)
      return string? string.replace('I18N.components.Footer.', '') : ''
    },
    formateMsg(string){
      return formateMsg(string)
    }

  }
})
</script>


<style lang="less" scoped>
@import url('../styles/var/var.less');
@import url('../styles/var/project.less');
.footer {
  position: relative;
  bottom: 0;
  z-index: 999999;
  color: white;
  background-color: @color_main_bg;
  .footer-content {
    padding: 50px 0 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    .t-title {
      color: white;
    }
    .t-text {
      color: rgba(255, 255, 255, 0.8);
    }
    .mt-12 {
      margin-top: 12px;
    }
    .mb-12 {
      margin-bottom: 12px;
    }
    .menu-list {
      li {
        margin-bottom: 8px;
        &:hover {
          color: @color_hover;
        }
      }
    }
    .qr-code-wrap {
      padding: 0 80px;
      border-left: 1px solid rgba(255, 255, 255, 0.25);
      .contact-info {
        margin-right: 30px;
        .icon-phone {
          width: 20px;
          margin-right: 12px;
        }
      }
      .logo {
        width: 150px;
        margin-top: 50px;
      }
    }
  }
  .copyright {
    line-height: 60px;
  }
}
</style>
