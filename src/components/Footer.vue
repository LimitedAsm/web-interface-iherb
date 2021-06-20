<template>
  <template v-if="autenticationUser">
    <footer>
      <button v-bind:class="{hover: isSchedule}" v-on:click="handleSchedule">
        <img src="../assets/date_range_white_24dp.svg" alt="">
      </button>
      <div class="separator"></div>
      <button v-bind:class="{hover: isHandbook}" v-on:click="handleHandbook">
        <img src="../assets/window_white_24dp.svg" alt="">
      </button>
      <div class="separator"></div>
      <button v-bind:class="{hover: isProfile}" v-on:click="handleProfile">
        <img src="../assets/account_circle_white_24dp.svg" alt="">
      </button>
    </footer>
  </template>  
</template>  

  <script>
  export default {
    name: "Footer",
    props: ["page"],
    emits: ["switchPage"],
    computed:{
      autenticationUser(){
        return (this.page!='Authentication' && this.page!='Registration');
      },
      isSchedule(){
        if (this.page == "Schedule"){
          return true
        }else{
          return false
        } 
      },
      isHandbook(){
        if (this.page == "Handbook"){
          return true
        }else{
          return false
        } 
      },
      isProfile(){
        if (this.page == "Profile"){
          return true
        }else{
          return false
        } 
      },
    },
    methods:{
    handleSchedule(){
      this.$emit('switchPage', "Schedule")
    },
    handleHandbook(){
      this.$emit('switchPage', "Handbook")
    },
    handleProfile(){
      this.$emit('switchPage', "Profile")
    }
  },
  
  
  }
  </script>

  <style>
  @import '../assets/Footer.css';
  </style>