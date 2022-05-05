import { defineClientAppEnhance } from "@vuepress/client";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import {
  CaretUpFilled,
  CaretDownFilled,
  SearchOutlined,
  DownOutlined
} from '@ant-design/icons-vue';
import MyComponent from "./components/demo.vue";
// import SpecialLayout from "./components/Layout.vue";
export default defineClientAppEnhance((options) => {
  
  console.log(process.env.NODE_ENV);
  console.log(import.meta.env.NODE_ENV);
  console.log('aaa')
  console.log(import.meta.env);
  console.log(import.meta)
  console.log(__VUEPRESS_DEV__)
  console.log(__VUEPRESS_VERSION__)
  const { app, router, siteData } = options
  console.log(options)
  console.log(options)
  app.component("MyComponent", MyComponent);
  app.component("CaretDownFilled", CaretDownFilled)
  app.component("CaretUpFilled", CaretUpFilled)
  app.component("SearchOutlined", SearchOutlined)
  app.component("DownOutlined", DownOutlined)
  app.use(Antd)
  // app.component("SpecialLayout", SpecialLayout);
});