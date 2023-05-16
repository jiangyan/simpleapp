import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token = null
    }
  },
  actions: {
    setToken({commit}, token) {
      commit('setToken', token)
    },
    clearToken({commit}) {
      commit('clearToken')
    }
  },
  getters: {
    token: state => state.token,
    isAuthenticated: state => !!state.token
  }
})
