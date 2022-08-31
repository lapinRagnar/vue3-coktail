import { createStore } from 'vuex'

export default createStore({
  state: {
    maVariable: 'bonjour tout le monde du state de vuex'
  },
  getters: {
    getMavariable(state){
      return state.maVariable
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
