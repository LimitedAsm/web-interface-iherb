<template>
  <div class="registrationForm">
    <div class="registrationLable">Регистрация</div>
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
    <button v-on:click="handleAuthorization">
      Войти
    </button>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: "",
        phoneNumber: ""
      },
    };
  },
  emits: ["registrationSuccess"],
  computed: { 
    message(){
      return ""
    }
  }
}

</script>

<style>

</style>