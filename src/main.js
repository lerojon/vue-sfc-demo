import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"
//引入elementUI--
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)
//引入elementUI--
//css
import "@/styles/index.scss"
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app")
