<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "Profile",
  data(){
    return{
      
    }
  },
  methods: {
    ...mapGetters(["getUsername"])
  }
}
</script>

<style>

</style>