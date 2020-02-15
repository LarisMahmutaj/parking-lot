/*eslint-disable*/
import axios from "axios"

const state = {
  user: {
    loggedIn: false,
    isAdmin: false,
    data: null
  }
}

const getters = {
  getUser: state => {
    return state.user
  }
}

const actions = {
  fetchUser: async ({ commit }, user) => {
    commit("setLoggedIn", user !== null)
    if (user) {
      commit("setUser", {
        displayName: user.displayName,
        email: user.email
      })

      const response = await axios.get("http://localhost:4000/admins")
      const admins = response.data
      const admin = admins.filter(a => a.admin_id === user.uid)
      console.log(admin)
      commit("setAdmin", admin.length !== 0)
    } else {
      commit("setUser", null)
    }
  },
  clearUser: ({ commit }) => {
    commit("userClear")
  }
}

const mutations = {
  setLoggedIn: (state, value) => {
    state.user.loggedIn = value
  },
  setUser: (state, data) => {
    state.user.data = data
  },
  setAdmin: (state, value) => {
    state.user.isAdmin = value
  },
  userClear: state => {
    state.user.data = null
    state.user.isLoggedIn = false
    state.user.isAdmin = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
