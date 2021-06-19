<template>
<div class="containerFullHeight">
  <div class='authForms'>
    <div class="manualAuth">

      <div class="pseudoInput">
      <input
            v-model="user.first_name"
            placeholder="Имя"
            type="text"
          />
      </div>

          <div class="pseudoInput">
          <input
            v-model="user.last_name"
            placeholder="Фамилия"
            type="text"
          />
      </div>

          <div class="pseudoInput">
            <input
            v-model="user.email"
            placeholder="E-mail"
            type="text"
          />
      </div>

          <div class="pseudoInput">
          <input
            v-model="user.phone"
            placeholder="Телефон"
            type="text"
          />
      </div>

        <div class="pseudoInput">
        <input v-bind:type="pass" v-model="user.password" placeholder="Пароль" id='authPassword' />
        <input type="checkbox" id='passwordToggle' name='passwordToggle' hidden>
        <label for="passwordToggle">
          
          <img v-if="pass=='password'" v-on:click="pass='text'" src="../../public/img\icons/visibility_off_black_24dp.svg" alt="show password" id='passwordToggleIcon'>
          <img v-else-if="pass=='text'" v-on:click="pass='password'" src="../../public/img\icons/visibility_black_24dp.svg" alt="show password" id='passwordToggleIcon'>

        </label>
      </div>

      <div class="authButtons">
        <button class="logInButton" v-on:click="handleRegistration">Создать аккаунт</button>
        <p>или</p>
        <button class='createAccount' v-on:click="handleAuthentication">Уже есть аккаунт</button>
      </div>
    </div>
  </div>
</div>


    <div class="message">{{ message }}</div>

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
        phone: "",
        password: "",
        first_name: "",
        last_name: "",
      },
      message: "",
      pass: "password"
    };
  },
  emits: ["switchPage"],
  methods: {
    ...mapActions(["fetchRegistration"]),
    handleAuthentication(){
      this.$emit('switchPage', "Authentication")

    },
    handleRegistration(){
      console.log(url)
      fetch(`${url.data}user`, {
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

}
</script>

<style>
@import '../assets/Authentication.css'
</style>