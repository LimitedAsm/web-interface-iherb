<template>
  <p>{{ username() }}</p>
  <button :click="handlePassTest">Пройти тест</button>
  <button>Изменить пароль</button>

</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "Profile",
  data(){
    return{
      
    }
  },
  emits: ["switchPage"],
  computed: {
    username(){
      return this.getUsername
    }
  },
  methods: {
    ...mapGetters(["getUsername"]),
    handlePassTest(){
      this.$emit('switchPage', "TestFrom")
    }
  }
}
</script>

<style>

</style>