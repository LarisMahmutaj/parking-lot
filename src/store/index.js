import Vuex from "vuex"
import Vue from "vue"
import spots from "./modules/spots"
import invoices from "./modules/invoices"
import auth from "./modules/auth"
import customers from "./modules/customers"
//Load Vuex
Vue.use(Vuex)

//Create Store
export default new Vuex.Store({
  modules: {
    spots,
    invoices,
    auth,
    customers
  }
})
