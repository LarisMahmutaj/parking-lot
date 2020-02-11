import axios from "axios"

const state = {
  invoices: []
}

const getters = {
  allInvoices: state => state.invoices
}

const actions = {
  async fetchInvoices({ commit }) {
    const response = await axios.get("http://localhost:4000/invoices")

    commit("setInvoices", response.data)
  },

  async addInvoice({ commit }, invoice) {
    const response = await axios.post("http://localhost:4000/invoices", invoice)

    commit("newInvoice", response.data)
  }
}

const mutations = {
  setInvoices: (state, invoices) => {
    state.invoices = invoices
  },

  newInvoice: (state, invoice) => {
    state.invoices.push(invoice)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
