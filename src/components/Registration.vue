<template>
  <div class="registrationForm">
    <div class="registrationLable">Регистрация</div>
    <input
      v-model="user.first_name"
      placeholder="Имя"
      type="text"
    />
    <input
      v-model="user.last_name"
      placeholder="Фамилия"
      type="text"
    />
    <input
      v-model="user.emaile"
      placeholder="e-mail"
      type="text"
    />
    <input
      class="password"
      v-model="user.password"
      placeholder="Пароль"
      type="password"
    />
    <button v-on:click="handleAuthorization">
      Войти
    </button>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
import url from '../../config.js'
export default {
  name: "Registration",
  data() {
    return {
      user: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
      },
      message: ""
    };
  },
  emits: ["switchPage"],
  methods: {
    ...mapActions(["fetchRegistration"]),
    handleAuthorization(){
      fetch(`${url}user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            "email": this.email,
            "password": this.password,
            "first_name": this.first_name,
            "last_name": this.last_name,
            "uuid": this.last_name, ///??????
          }
        )
      })
      .then(
        async (response) => {
          console.log(response);
          if(response.message == "success"){
            this.$emit('switchPage', "TestForm")
          }
          else if(response.message == "error"){///???
            this.message = response; 
          }
        },
        (reject) => {
          console.log("Error: ", reject);
          this.message = "Сервер недоступен обратитесь к системному администратору"
        }
      );
    }
  }
}

</script>

<style>

</style>