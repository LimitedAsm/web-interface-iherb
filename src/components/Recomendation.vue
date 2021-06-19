<template>
  <div class="productFrame" v-for="product in products" :key="product">
    <img v-bind:src="product.img">
    <p>{{ product.name }}</p>
    <p>{{ product.desc}}</p>
    <p>{{ product.course }}</p>
  </div>
</template>

<script>
export default {
  name:"Recomendation",
  computed: {
    
    products(){
      let prod = [{
        img: "../assets/1.png",
        name: "1",
        desc: "1",
        course: "1"
      },
      {
        img: "../assets/1.png",
        name: "2",
        desc: "2",
        course: "2"
      }]
      return prod
    }
  }
}
</script>

<style scoped>
@import '../assets/Recomendation.css'
</style>