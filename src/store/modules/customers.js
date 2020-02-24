/* eslint-disable */
import axios from "axios"

const state = {
  customers: [],
  currentCustomer: null
}

const getters = {
  allCustomers: state => state.customers,
  currentCustomer: state => state.currentCustomer
}

const actions = {
  async fetchCustomers({ commit }) {
    const response = await axios.get("http://localhost:4000/customers")

    commit("setCustomers", response.data)
  },
  async findCustomer({ commit }, regPlate) {
    const response = await axios.get("http://localhost:4000/customers")

    const customer = response.data.filter(c => c.car_reg_plate === regPlate)

    commit("setCurrentCustomer", customer[0])
  }
  // async updateCustomer({ commit }, customer) {
  //   const response = await axios.put(
  //     `http://localhost:4000/customers/${customer._id}`,
  //     customer
  //   )

  //   commit("updateCustomer", response.data)
  // }
}

const mutations = {
  setCustomers: (state, customers) => {
    state.customers = customers
  },
  setCurrentCustomer: (state, customer) => {
    state.currentCustomer = customer
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
