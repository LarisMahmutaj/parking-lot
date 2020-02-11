import axios from "axios"

const state = {
  spots: [],
  spotDetails: {}
}

const getters = {
  allSpots: state => state.spots,
  freeSpots: state => state.spots.filter(spot => spot.status == "Free"),
  occupiedSpots: state => state.spots.filter(spot => spot.status == "Occupied"),
  spotDetails: state => state.spotDetails
}

const actions = {
  async fetchSpots({ commit }) {
    const response = await axios.get("http://localhost:4000/spots")

    commit("setSpots", response.data)
  },

  async fetchSingleSpot({ commit }, id) {
    const response = await axios.get(`http://localhost:4000/spots/${id}`)

    commit("setSpot", response.data)
  },

  async addSpot({ commit }, spot) {
    const response = await axios.post("http://localhost:4000/spots", spot)

    commit("newSpot", response.data)
  },

  async updateSpot({ commit }, updSpot) {
    const response = await axios.put(
      `http://localhost:4000/spots/${updSpot._id}`,
      updSpot
    )
    commit("updateSpot", response.data)
  }
}

const mutations = {
  setSpots: (state, spots) => {
    state.spots = spots
  },
  /* eslint-disable */
  setSpot: (state, spot) => {
    if (spot.start_time !== null) {
      var currentTime = new Date()
      var startTime = new Date(spot.start_time)
      var hours = Math.ceil(
        Math.abs(currentTime - startTime) / (60 * 60 * 1000)
      )
      spot.receipt = hours * spot.price
      spot.start_time = startTime
    } else {
      spot.receipt = 0
    }
    state.spotDetails = spot
  },

  newSpot(state, spot) {
    state.spots.push(spot)
  },

  updateSpot: (state, updSpot) => {
    state.spotDetails = updSpot
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
