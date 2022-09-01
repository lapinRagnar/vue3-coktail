import { createStore } from 'vuex'

export default createStore({
  state: {
    maVariable: 'bonjour tout le monde du state de vuex',
    users: [
      {id: 0, name: 'lapin'},
      {id: 1, name: 'ragnar'}
    ],
    notifDisplay: false
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
    },
    getNotif: (state) => {
      return state.notifDisplay 
    }
  },
  mutations: {
    changerUserRagnar(state, payload){
      state.users[1].name = payload.name 
    },
    displayNotif(state, display){
      state.notifDisplay = display
    }
  },
  actions: {
    modify(context, payload){
      console.log(context)
      context.commit('changerUserRagnar', {name: payload.name})
    }
  },
  modules: {
  }
})
