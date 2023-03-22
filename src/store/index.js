import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    showError: false,
    errorMessage: ''
  },
  getters: {
    errorMessage (state) {
      return state.errorMessage
    },
    showError (state) {
      return state.showError
    }
  },
  mutations: {
    setLoading (state, flag) {
      state.loading = flag
    },
    setErrorMessage (state, message) {
      console.log('message', message)
      state.errorMessage = message
    },
    setShowError (state, flag) {
      console.log('flag', flag)
      state.showError = flag
    }
  },
  actions: {
  },
  modules: {
  }
})
