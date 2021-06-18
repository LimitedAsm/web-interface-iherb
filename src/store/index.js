import { createStore } from 'vuex'

export default createStore({
  state(){
    return {
      username: '',
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getUsername: state => {
      return state.username
    }
  }
})
