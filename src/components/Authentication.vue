<template>
<div v-show="authorizationLoading == true">
  <div id="spin"></div>
  <div id="spinBackground"></div>
</div>

<!-- <div class="containerFullHeight">
  <div class='authForms'>
    <div class="manualAuth">
      <div class="pseudoInput">
        <input type="text" placeholder="Номер телефона или адрес почты" id='authLogin' />
      </div>

      <div class="pseudoInput">
        <input type="password" placeholder="Пароль" id='authPassword' />
        <input type="checkbox" id='passwordToggle' name='passwordToggle' hidden>
        <label for="passwordToggle">
          <img src="../assets/visibility_off_black_24dp.svg" alt="show password" id='passwordToggleIcon'>
        </label>
      </div>
      <p class="forgotPassword"><a>Забыли пароль?</a></p>
      <div class="authButtons">
        <button class="logInButton" v-on:click="handleAuthorization">Войти</button>
        <p>или</p>
        <button class='createAccount' v-on:click="handleRegistration">Создать аккаунт</button>
      </div>
    </div>
  </div>
</div> -->

<div class="containerFullHeight">
  <div class='authForms'>
    <div class="manualAuth">
      <div class="pseudoInput">
        <input type="text" placeholder="Номер телефона или адрес почты" id='authLogin' />
      </div>

      <div class="pseudoInput">
        <input v-bind:type="pass" placeholder="Пароль" id='authPassword' />
        <input type="checkbox" id='passwordToggle' name='passwordToggle' hidden>
        <label for="passwordToggle">
          
          <img v-if="pass=='password'" v-on:click="pass='text'" src="../../public/img\icons/visibility_off_black_24dp.svg" alt="show password" id='passwordToggleIcon'>
          <img v-else-if="pass=='text'" v-on:click="pass='password'" src="../../public/img\icons/visibility_black_24dp.svg" alt="show password" id='passwordToggleIcon'>

        </label>
      </div>
      <p class="forgotPassword"><a>Забыли пароль?</a></p>
      <div class="authButtons">
        <button class="logInButton" v-on:click="handleAuthorization">Войти</button>
        <p>или</p>
        <button class='createAccount' v-on:click="handleRegistration">Создать аккаунт</button>
      </div>
    </div>
  </div>
</div>

<div class="message">{{ message }}</div>
</template>

<script>
// import $ from "jquery"
import { Spinner } from "spin.js";
export default {
  name: "Authentication",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      authorizationLoading: false,
      pass: "password"
    };
  },
  emits: ["switchPage"],
  computed: {
    message() {
      return "";
    },
  },
  methods: {
    handleRegistration(){
      this.$emit('switchPage', "Registration")
    },
    handleAuthorization() {
      this.authorizationLoading = true;
      this.createSpiner();
      this.authorizationLoading = false;
    },
    createSpiner() {
      const opts = {
        lines: 13, // The number of lines to draw
        length: 25, // The length of each line
        width: 8, // The line thickness
        radius: 35, // The radius of the inner circle
        scale: 1, // Scales overall size of the spinner
        corners: 1, // Corner roundness (0..1)
        speed: 1, // Rounds per second
        rotate: 0, // The rotation offset
        animation: "spinner-line-fade-quick", // The CSS animation name for the lines
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: "black", // CSS color or array of colors
        fadeColor: "transparent", // CSS color or array of colors
        top: "50%", // Top position relative to parent
        left: "50%", // Left position relative to parent
        shadow: "0 0 1px transparent", // Box-shadow for the lines
        className: "spinner", // The CSS class to assign to the spinner
        position: "absolute", // Element positioning
      };
      const target = document.getElementById("spin");
      new Spinner(opts).spin(target);
    },
  },
  mounted() {
    this.createSpiner();
    // let navMenu = $('#navMenu');
    // $('#navButton').change(function(){
    //   navMenu.slideToggle(500, function() {
    //     $('.navItem').fadeToggle()
    //   })
    // })

    // $('#passwordToggle').change(function() {
    //   if($(this).prop('checked')===true) {
    //     $('#authPassword').prop('type', 'text')
    //     $('#passwordToggleIcon').prop('src', '../assets/visibility_black_24dp.svg')
    //   } else {
    //     $('#authPassword').prop('type', 'password')
    //     $('#passwordToggleIcon').prop('src', '../assets/visibility_off_black_24dp.svg')
    //   }
    // })

  },
};
</script>

<style scoped>
@import "../assets/Authentication.css";
</style>
