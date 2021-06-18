<template>
  <div v-show="this.authorizationLoading == true">
    <div id="spin"></div>
    <div id="spinBackground"></div>
  </div>
  <div class="authenticationForm">
    <div class="authenticationLable">Вход</div>
    <input
      class="login"
      v-model="user.username"
      placeholder="Логин"
      type="text"
    />
    <input
      class="password"
      v-model="user.password"
      placeholder="Пароль"
      type="password"
    />
    <button class="authenticationButton" v-on:click="handleAuthorization">
      Войти
    </button>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
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
    };
  },
  emits: ["authorizationSuccess"],
  computed: {
    message() {
      return "";
    },
  },
  methods: {
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
      console.log(target);
      new Spinner(opts).spin(target);
    },
  },
  mounted() {
    this.createSpiner();
  },
};
</script>

<style>
/* @import "../../node_modules/spin.js/spin.css"; */
</style>
