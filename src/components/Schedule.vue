<template>
<!-- <button v-on:click="switchFormat">
    <p v-if="scheduleFormat == 'day'">Расписание на неделю</p>
    <p v-else-if="scheduleFormat == 'week'">Расписание на день</p>
  </button> -->


<div v-if="scheduleFormat == 'day'" class="containerFloatHeight">
  <div class="dailyUsageInfo">
    <button v-on:click="handleSwithToWeek" class="closeDailyUsageInfo"></button>
    <div class="dailyHeader mainHeader">
      {{ day }}
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
    <button v-for="date in this.dates" :key="date" v-on:click="handleSwithToDay(date)" class="weekDayWrap">
      <p class="weekDay">
        {{ date }}
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
      day: "Сегодня",
      scheduleFormat: "day" 
    }
  },
  emits: ["switchPage"],
  computed: {
    dates(){
      let dates = []
      let today = new Date;
      dates.push("Сегодня");
      dates.push("Завтра");
      let date = today.getDay() + 2
      for(let i = 0; i < 6; i++){
        switch(date) {
          case 0: dates.push("Воскресенье");
          break
          case 1: dates.push("Понедельник");
          break
          case 2: dates.push("Вторинк");
          break
          case 3: dates.push("Среда");
          break 
          case 4: dates.push("Четверг");
          break 
          case 5: dates.push("Пятница");
          break 
          case 6: dates.push("Суббота");
          break
          default: date = date - 8 ;
        }
        date++
      }
      return dates
    },
    medicaments(){
      return [{
        name: "kalifornia gold омега 3",
        time: "с утра после еды",
        dosa: "2 таблетки"
      }]
    }
  },
  methods: {
    handleSwithToDay(day){
      this.day = day
      this.scheduleFormat = "day"
    },
    handleSwithToWeek(){
      this.day = ""
      this.scheduleFormat = "week"
    },
  },
}
</script>

<style>
@import '../assets/Schedule.css'
</style>