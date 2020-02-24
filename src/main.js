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
import * as firebase from "firebase"

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyDhbFhkpzPbxTCpyLeTZMGzXr1f0J5s8BQ",
  authDomain: "parking-lot-25c58.firebaseapp.com",
  databaseURL: "https://parking-lot-25c58.firebaseio.com",
  projectId: "parking-lot-25c58",
  storageBucket: "parking-lot-25c58.appspot.com",
  messagingSenderId: "906531513783",
  appId: "1:906531513783:web:53536bb5afa3044334b432",
  measurementId: "G-09JWRRL04S"
}

firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(async user => {
  await store.dispatch("fetchUser", user)
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
