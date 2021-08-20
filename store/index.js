// import data from "@/data/users.json"

export const state = () => ({
  userData: [],
})

export const mutations = {
  setUserData(state, value) {
    state.userData = value
  },
}

export const getters = {
  userList: (state) => {
    return state.userData
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
}
