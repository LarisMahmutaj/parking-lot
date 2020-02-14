const state = {
  user: {
    loggedIn: false,
    data: null
  }
}

const getters = {
  getUser: state => {
    return state.user
  }
}

const actions = {
  fetchUser: ({ commit }, user) => {
    commit("setLoggedIn", user !== null)
    if (user) {
      commit("setUser", {
        displayName: user.displayName,
        email: user.email
      })
    } else {
      commit("setUser", null)
    }
  }
}

const mutations = {
  setLoggedIn: (state, value) => {
    state.user.loggedIn = value
  },
  setUser: (state, data) => {
    state.user.data = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
