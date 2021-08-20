// import data from "@/data/users.json"

export const state = () => ({
  userData: [],
  user: {},
})

export const mutations = {
  setUserData(state, value) {
    state.userData = value
  },
  setUser(state, value) {
    state.user = value
  },
}

export const getters = {
  userList: (state) => {
    return state.userData
  },
  user: (state) => {
    return state.user
  },
}

export const actions = {
  getUserList({ commit }) {
    return this.$axios.$get('http://localhost:3000/data').then((response) => {
      commit('setUserData', response)
      return response
    })
  },
  createUserList({ commit }, data) {
    return this.$axios
      .$post('http://localhost:3000/data', data)
      .then((response) => {
        return response
      })
  },
  getUser({ commit }, id) {
    return this.$axios
      .$get(`http://localhost:3000/data/${id}`)
      .then((response) => {
        commit('setUser', response)
        return response
      })
  },
  editUser({commit}, {id, data}){
    return this.$axios
    .$put(`http://localhost:3000/data/${id}`, data)
    .then((response) => {
      return response
    })
  }
}
