// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//创建一个全局的实例用于传值，
//vue原型临时增加属性并把对象赋值给他，所有vue对象都会具备该属性
import LuffyHeader from './components/common/LuffyHeader.vue';
Vue.component(LuffyHeader.name, LuffyHeader)
// import axios from 'axios';
// https://unpkg.com/axios/dist/axios.min.js
import '../static/global/index.css'
import * as api from './restful/api'
//导入滑动认证页面
import '../static/global/gt.js'


Vue.prototype.$https = api


// es2015 module
import VueCookies from 'vue-cookies'
// default options config: { expires: '1d', path: '/', domain: '', secure: '', sameSite: 'Lax' , partitioned: false}
Vue.use(VueCookies, { expires: '7d' })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />',
  mounted() {
    // console.log(this.$store.state); // 检查 Vue 实例中是否能访问到 store  
  }
})  
