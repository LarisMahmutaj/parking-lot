import Vuex from "vuex"
import Vue from "vue"
import spots from "./modules/spots"

//Load Vuex
Vue.use(Vuex)

//Create Store
export default new Vuex.Store({
  modules: {
    spots
  }
})
