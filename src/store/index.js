import { createStore } from 'vuex'
import url from '../../config.js'

export default createStore({
  state(){
    return {
      username: '',
      re: '',
    }
  },
  mutations: {
    datf(state, re){
      state.re = re
    }
  },
  actions: {
    fetchRegistration(context, email, password, uuid, first_name, last_name){
      fetch(`${url}user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            "email": email,
            "password": password,
            "first_name": first_name,
            "last_name": last_name,
            "uuid": uuid,
          }
        )
      })
      .then(
        async (response) => {
          console.log(response)
          let responseJSON = await response.json()
          context.commit("datf",responseJSON)
        },
        (reject) => {
          console.log("Error: ", reject);
          context.commit(
            "updateMessage",
            "Сервер недоступен обратитесь к системному администратору"
          );
        }
      );

    }
    
    
  },
  getters: {
    getUsername: state => {
      return state.username
    }
  }
})
