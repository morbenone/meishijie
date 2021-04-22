import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import "./assets/publicStyle/public.css"
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

import axios from "axios";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
if(process.env.NODE_ENV !== "production") require('./mock/mock.js');
router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
    if(window.sessionStorage.data){
      next()
    }else{
      next("/login");
    }
  }else{
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
