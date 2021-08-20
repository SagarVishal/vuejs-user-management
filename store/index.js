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
    }
}

export const actions = {
    getUserList({ commit}) {
    
        return this.$axios
          .$get("https://raw.githubusercontent.com/Vishalsag/vuejs-user-management/master/data/users.json")
          .then((response) => {
            commit("setUserData", response);    
            return response;
          });
      },
}