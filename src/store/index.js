import { createStore } from 'vuex'
// import url from '../../config.js'

export default createStore({
  state(){
    return {
      username: '',
      token: ''
    }
  },
  mutations: {
    updateToken(state, token){
      state.token = token
    }
  },
  actions: {
    // changeToken(context,token){
    //   context.commit("updateToken", token)
    // }
  },
  getters: {
    getUsername: state => {
      return state.username
    },
    getToken: state => {
      return state.token
    }
  }
})
