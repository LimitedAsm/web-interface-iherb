<template>
  <Header  v-if="page=='header'"></Header>
  <Authentication 
    @authorizationSuccess="authorizationSuccess"
    v-if="page=='Authentication'"
  ></Authentication>
  <Registration></Registration>
  <TestForm></TestForm>
  <Profile></Profile>
  <Schedule></Schedule>
  <Recomendation></Recomendation>
</template>

<script>
import Authentication from './components/Authentication.vue'
import Registration from './components/Registration.vue'
import Header from './components/Header.vue'
import TestForm from './components/TestForm.vue'
import Profile from './components/Profile.vue'
import Schedule from './components/Schedule.vue'
import Recomendation from './components/Recomendation.vue'
 
export default {
  name: 'App',
  components: {
    Authentication,
    Registration,
    Header,
    TestForm,
    Profile,
    Schedule,
    Recomendation,
  },
  data() {
    return {
      page: "header"
    }
  },
  methods:{
    authorizationSuccess(){
      this.page = "Main"
    }
  }
}
</script>

<style>
@import './assets/Main.css';
</style>
