import { createStore } from 'vuex'

export default createStore({
  state: {
    maVariable: 'bonjour tout le monde du state de vuex',
    users: [
      {id: 0, name: 'lapin'},
      {id: 1, name: 'ragnar'}
    ]
  },
  getters: {
    getMavariable(state){
      return state.maVariable
    },
    getUsers(state){
      return state.users[0].name
    },
    // getters avec parametres - l'id est recu du template
    getUserAvecParametre: (state) => (id) => {
      return state.users[id].name
    }
  },
  mutations: {
    changerUserRagnar(state){
      state.users[1].name = 'beloube'
    }
  },
  actions: {
  },
  modules: {
  }
})
