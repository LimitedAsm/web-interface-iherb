<template>
  <Header></Header>
  <Authentication 
    @switchPage="switchPage"
    v-if="page=='Authentication'"
  ></Authentication>
  <Registration 
    @switchPage="switchPage"
    v-if="page=='Registration'"
  ></Registration>
  <TestForm v-if="page=='TestForm'"></TestForm>
  <Profile v-if="page=='Profile'"></Profile>
  <Schedule v-if="page=='Schedule'"></Schedule>
  <Recomendation v-if="page=='Recomendation'"></Recomendation>
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
      page: "Authentication"
    }
  },
  methods:{
    switchPage(page){
      this.page = page
    }
  }
}
</script>

<style>
@import './assets/Main.css';
</style>
