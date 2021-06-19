<template>
<form name="form" id="form" hidden v-on:submit.prevent="onSubmit"></form>

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
            form="form"
            required
            v-model="user.email"
            placeholder="E-mail"
            type="email"
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
        <input form="form" v-bind:type="pass" v-model="user.password" placeholder="Пароль" id='authPassword' required/>
        <input type="checkbox" id='passwordToggle' name='passwordToggle' hidden>
        <label for="passwordToggle">
          
          <img v-if="pass=='password'" v-on:click="pass='text'" src="../../public/img\icons/visibility_off_black_24dp.svg" alt="show password" id='passwordToggleIcon'>
          <img v-else-if="pass=='text'" v-on:click="pass='password'" src="../../public/img\icons/visibility_black_24dp.svg" alt="show password" id='passwordToggleIcon'>

        </label>
      </div>

      <div class="authButtons">
        <button form="form" submit class="logInButton" v-on:click="handleRegistration">Создать аккаунт</button>
        <p>или</p>
        <button class='createAccount' v-on:click="handleAuthentication">Уже есть аккаунт</button>
      </div>
    </div>
  </div>
</div>


    <div class="message">{{ message }}</div>

</template>

<script>
import {mapMutations} from "vuex"
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
    ...mapMutations(["updateToken"]),
    // ...mapActions(["fetchRegistration"]),
    handleAuthentication(){
      this.$emit('switchPage', "Authentication")

    },
    handleRegistration(){
      console.log(url)
      fetch(`${url.data}register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            "email": this.user.email,
            "password": this.user.password,
            "first_name": this.user.first_name,
            "last_name": this.user.last_name,
            "phone": this.user.phone
          }
        )
      })
      .then(
        async (response) => {
          const responseJSON = await response.json();
          if(responseJSON.message == "success"){


            fetch(`${url.data}auth/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                {
                  "username": this.user.email,
                  "password": this.user.password,
                }
              )
            })
            .then(
              async (response) => {
                const token = await response.json()
                if(token){
                  await this.updateToken(token.token)
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