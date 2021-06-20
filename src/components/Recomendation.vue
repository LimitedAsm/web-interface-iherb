<template>
<div class="containerFloatHeight">
    <div class="catalog">
      <div class="catalogHeader">
        Каталог
      </div>
      <div class='catalogWrap'>
        <div class="catalogProdCard">
          <div class="mainInfo">
            <!-- <img src="./8.jpg" alt="8.jpg"> -->
            <hr>
            <div class="shopDesc">
              <p class="prodMainName">Protocol for Life Balance</p>
              <p class="prodSecondaryName">NAC N-ацетил-цистеин, 600 мг, 100 вегетарианских капсул</p>
              <div class="prodPrice">
                <p class="prodFullPrice">1,509.55</p>
                <p class="prodPartPrice">15.10/штука</p>
              </div>
            </div>
          </div>
        </div>
        <div class="catalogProdCard">
          <div class="mainInfo">
            <!-- <img src="./10.jpg" alt="8.jpg"> -->
            <hr>
            <div class="shopDesc">
              <p class="prodMainName">Now Foods</p>
              <p class="prodSecondaryName">кверцетин с бромелаином, 120 растительных капсул</p>
              <div class="prodPrice">
                <p class="prodFullPrice">1,353.84</p>
                <p class="prodPartPrice">11.28/штука</p>
              </div>
            </div>
          </div>
        </div>
        <div class="catalogProdCard">
          <div class="mainInfo">
            <!-- <img src="./8.jpg" alt="8.jpg"> -->
            <hr>
            <div class="shopDesc">
              <p class="prodMainName">Protocol for Life Balance</p>
              <p class="prodSecondaryName">NAC N-ацетил-цистеин, 600 мг, 100 вегетарианских капсул</p>
              <div class="prodPrice">
                <p class="prodFullPrice">1,509.55</p>
                <p class="prodPartPrice">15.10/штука</p>
              </div>
            </div>
          </div>
        </div>
        <div class="catalogProdCard">
          <div class="mainInfo">
            <!-- <img src="./10.jpg" alt="8.jpg"> -->
            <hr>
            <div class="shopDesc">
              <p class="prodMainName">Now Foods</p>
              <p class="prodSecondaryName">кверцетин с бромелаином, 120 растительных капсул</p>
              <div class="prodPrice">
                <p class="prodFullPrice">1,353.84</p>
                <p class="prodPartPrice">11.28/штука</p>
              </div>
            </div>
          </div>
        </div>
        <div class="catalogProdCard">
          <div class="mainInfo">
            <!-- <img src="./8.jpg" alt="8.jpg"> -->
            <hr>
            <div class="shopDesc">
              <p class="prodMainName">Protocol for Life Balance</p>
              <p class="prodSecondaryName">NAC N-ацетил-цистеин, 600 мг, 100 вегетарианских капсул</p>
              <div class="prodPrice">
                <p class="prodFullPrice">1,509.55</p>
                <p class="prodPartPrice">15.10/штука</p>
              </div>
            </div>
          </div>
        </div>
        <div class="catalogProdCard">
          <div class="mainInfo">
            <!-- <img src="./10.jpg" alt="8.jpg"> -->
            <hr>
            <div class="shopDesc">
              <p class="prodMainName">Now Foods</p>
              <p class="prodSecondaryName">кверцетин с бромелаином, 120 растительных капсул</p>
              <div class="prodPrice">
                <p class="prodFullPrice">1,353.84</p>
                <p class="prodPartPrice">11.28/штука</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>


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