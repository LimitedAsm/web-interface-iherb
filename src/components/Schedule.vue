<template>
<!-- <button v-on:click="switchFormat">
    <p v-if="scheduleFormat == 'day'">Расписание на неделю</p>
    <p v-else-if="scheduleFormat == 'week'">Расписание на день</p>
  </button> -->


<div v-if="scheduleFormat == 'day'" class="containerFloatHeight">
  <div class="dailyUsageInfo">
    <div class="dailyHeader mainHeader">
      Понедельник
    </div>

    <div class="dailyHeader morningHeader">
      Утром
    </div>

    <div class='dailyList'>
      <p>Solgar, Комплекс кверцетина с Ester-C Plus - <strong>перед</strong> едой</p>
      <p>Now Foods - <strong>во время</strong> еды</p>
      <p>Solgar - <strong>после</strong> еды</p>
    </div>

    <hr>

    <div class="dailyHeader middayHeader">
      Днём
    </div>

    <div class='dailyList'>
      <p>Solgar - <strong>перед</strong> едой</p>
      <p>Now Foods, кверцетин с бромелаином - <strong>во время</strong> еды</p>
      <p>Solgar - <strong>после</strong> еды</p>
    </div>
    <hr>
    <div class="dailyHeader eveningHeader">
      Вечером
    </div>
    <div class='dailyList'>
      <p>Solgar - <strong>перед</strong> едой</p>
      <p>Now Foods - <strong>во время</strong> еды</p>
      <p>Solgar - <strong>после</strong> еды</p>
    </div>
  </div>
</div>


<div v-else-if="scheduleFormat == 'week'" class="containerFloatHeight">
  <div class="weekUsageInfo">
    <button class="weekDayWrap">
    <p class="weekDay">
      Вторник
    </p>
    <p class="weekLastDay">
      Последний день курса!
    </p>
    <hr>
    <div class="weekMeds">
      <p class="weekMed">
        Solgar, Комплекс кверцетина с Ester-C Plus
      </p>
      <p class="weekMed">
        Now Foods, кверцетин с бромелаином
      </p>
    </div>
  </button>
  <div class="weekDayWrap">
      <p class="weekDay" data-lastDay='true'>
        Среда
      </p>

      <p class="weekLastDay">
        Последний день курса!
      </p>
      <hr>
      <div class="weekMeds">
        <p class="weekMed">
          Solgar, Комплекс кверцетина с Ester-C Plus
        </p>
        <p class="weekMed">
          Now Foods, кверцетин с бромелаином
        </p>
      </div>
    </div>
  </div>
</div>

  
  <!-- <div v-if="scheduleFormat == 'day'">
    <div v-if="medicaments"> 
      <div v-for="medicament in medicaments" :key="medicament">
        {{ medicament.name }}
        {{ medicament.time }}
        {{ medicament.dosa }}
      </div>
    </div>
  </div>

  <div v-else-if="scheduleFormat == 'week'">
    <div v-if="medicaments">
      <div v-for="medicament in medicaments" :key="medicament">
        {{ medicament.name }}
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "Schedule",
  data(){
    return{
      scheduleFormat: "week" 
    }
  },
  methods: {
    switchFormat(){
      if(this.scheduleFormat == "day"){
        this.scheduleFormat = "week"
      }
      else{
        this.scheduleFormat = "day"
      }
    }
  },
  computed: {
    medicaments(){
      return [{
        name: "kalifornia gold омега 3",
        time: "с утра после еды",
        dosa: "2 таблетки"
      }]
    }
  }

}
</script>

<style>
@import '../assets/Schedule.css'
</style>