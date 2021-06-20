<template>
  <div class="containerFloatHeight">
    <div class="recomended">
      <div class="recomendedHeader">
        Рекомендуем вам к приобретению следующие товары:
      </div>
      <div class="prodCard">
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
        <div class="prodDesc">
          Описание:
          <p>С селеном и молибденом</p>
          <p>Поддерживает клеточное здоровье</p>
          <p>Без ГМО</p>
          <p>Пищевая добавка</p>
        </div>
        <div class="prodUseInstruction">
          Принимать по 1 капсуле 2 раза в день или в соответствии с рекомендациям врача.
        </div>
      </div>
      <div class="prodCard">
        <div class="mainInfo">
          <!-- <img src="./huerga/10.jpg" alt="8.jpg"> -->
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
        <div class="prodDesc">
          Описание:
          <p>Баланс иммунной системы</p>
          <p>Способствует сезонному укреплению иммунитета</p>
          <p>Пищевая добавка</p>
          <p>Подходит для вегетарианцев и веганов</p>
          <p>Кошерный продукт</p>
          <p>Общее состояние здоровья</p>
          <p>Семейное предприятие, основанное в 1968 году</p>
          <p>Произведено на предприятии, имеющем регистрацию надлежащей производственной практики (GMP)</p>
        </div>
        <div class="prodUseInstruction">
          Принимать по 2 капсулы 2–3 раза в день за 20 минут до еды. Людям с чувствительным пищеварением рекомендуется принимать капсулы во время еды.
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