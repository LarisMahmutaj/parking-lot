import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all.js"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
