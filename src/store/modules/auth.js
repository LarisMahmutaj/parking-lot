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
        uid: user.uid,
        displayName: user.displayName,
        email: user.email
      })

      const response = await axios.get("http://localhost:4000/admins")
      const admins = response.data
      if (admins.length === 0) {
        var u = {
          admin_id: user.uid,
          username: user.displayName,
          email: user.email
        }

        await axios.post("http://localhost:4000/admins", u)

        commit("setAdmin", true)
      } else {
        const admin = admins.filter(a => a.admin_id === user.uid)
        commit("setAdmin", admin.length !== 0)
      }
    } else {
      commit("setUser", null)
    }
  },
  clearUser: ({ commit }) => {
    commit("userClear")
  }
  // makeAdmin: async ({ commit }, user) => {
  //   var u = {
  //     admin_id: user.uid,
  //     username: user.displayName,
  //     email: user.email
  //   }
  //   await axios.post("http://localhost:4000/admins", u)
  // }
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
