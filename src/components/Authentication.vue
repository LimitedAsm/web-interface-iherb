<template>
<!-- <div v-show="authorizationLoading == true">
  <div id="spin"></div>
  <div id="spinBackground"></div>
</div> -->
<div class="containerFullHeight">
  <div class='authForms'>
    <div class="manualAuth">
      <form name="form" id="form" hidden v-on:submit.prevent="onSubmit"> </form>
      <div class="pseudoInput">
        <input form="form" required v-model="user.username" type="email" placeholder="Номер телефона или адрес почты" id='authLogin' />
      </div>
      <div class="pseudoInput">
        <input form="form" required v-model="user.password" v-bind:type="pass" placeholder="Пароль" id='authPassword' />
        <input type="checkbox" id='passwordToggle' name='passwordToggle' hidden>
        <label for="passwordToggle">
          <img v-if="pass=='password'" v-on:click="pass='text'" src="../../public/img\icons/visibility_off_black_24dp.svg" alt="show password" id='passwordToggleIcon'>
          <img v-else-if="pass=='text'" v-on:click="pass='password'" src="../../public/img\icons/visibility_black_24dp.svg" alt="show password" id='passwordToggleIcon'>
        </label>
      </div>
      <p class="forgotPassword"><a>Забыли пароль?</a></p>
      <div class="authButtons">
        <button form="form" submit class="logInButton" v-on:click="handleAuthorization">Войти</button>
        <p>или</p>
        <button class='createAccount' v-on:click="handleRegistration">Создать аккаунт</button>
      </div>
    </div>
  </div>
</div>
<div class="message">{{ message }}</div>
</template>

<script>
import url from '../../config.js'
import { mapMutations } from 'vuex';
export default {
  name: "Authentication",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      authorizationLoading: false,
      pass: "password",
      message: ""
    };
  },
  emits: ["switchPage"],
  methods: {
    ...mapMutations(["updateToken"]),
    handleRegistration(){
      this.$emit('switchPage', "Registration")
    },
    handleAuthorization() {
      this.fetchAuth()
    },
    
    fetchAuth() {
      fetch(`${url.data}auth/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            "username": this.user.username,
            "password": this.user.password,
          }
        )
      })
      .then(
        async (response) => {
          const token = await response.json()
          if(token){
            this.updateToken(token.token)
            this.$emit('switchPage', "Schedule")
          }
          else if(response.message == "error"){
            if (response.data.phone){
              this.message == "Данный номер телефона уже используется для другой учетной записи"
            }
            else if (response.data.email){
              this.message == "Данный почта уже используется для другой учетной записи"
            }
          }
        },
        (reject) => {
          console.log("Error: ", reject);
          this.message = "Сервер недоступен обратитесь к системному администратору"
        }
      );
    }
    
  },
  // mounted() {
  //   this.createSpiner();
  // },
};
</script>

<style scoped>
@import "../assets/Authentication.css";
</style>
