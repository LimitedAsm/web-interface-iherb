<template>
  <div class="testIner" v-for="question in questions" :key="question">
    <input type="radio">{{ question }}
  </div>
  <button v-on:click="step++">Далее</button>
</template>

<script>
export default {
  name: "TestForm",
  data(){
    return {
      allQuestions: [[1],[2],[3]],
      step: 1
    }
  },
  computed: {
    questions(){
      return this.allQuestions[this.step - 1]
    }
  }
}
</script>

<style scoped>
@import '../assets/TestForm.css'
</style>