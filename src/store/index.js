import { createStore } from 'vuex'
// import url from '../../config.js'

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
