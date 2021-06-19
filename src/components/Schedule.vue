<template>
  <button v-on:click="switchFormat">
    <p v-if="scheduleFormat == 'day'">Расписание на неделю</p>
    <p v-else-if="scheduleFormat == 'week'">Расписание на день</p>
  </button>
  <div v-if="scheduleFormat == 'day'">
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
  </div>
</template>

<script>
export default {
  name: "Schedule",
  data(){
    return{
      scheduleFormat: "day" 
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

</style>