<template>
<div class="mainTestIner">
  <p class="testQuesion">{{question}}</p>
  <div v-if="type == 'radio'">
    <div class="testIner" v-for="ansver in ansvers" :key="ansver">
      <input name="ansver" class="testRadio" type="radio">
      <p class="testAnsver">{{ ansver }}</p>
    </div>
  </div>
  <div v-if="type == 'input'">
    <div class="pseudoInput"><input name="ansver" type="text"></div>
  </div>
  <button class="testButton" v-on:click="stepsOverflow">Далее</button>
</div>
</template>

<script>
export default {
  name: "TestForm",
  data(){
    return {
      questions: [{
          question:"Укажите ваш пол",
          ansvers: ["Мужчина", "Женчина"],
          type: "radio"
        },
        {
          question:"Укажите ваш вес",
          ansvers: [],
          type: "input"
        }],
      step: 0
    }
  },
  emits: ["switchPage"],
  computed: {
    question(){
      return this.questions[this.step].question
    },
    ansvers(){
      return this.questions[this.step].ansvers
    },
    type(){
      return this.questions[this.step].type
    },

  },
  methods: {
    stepsOverflow(){
      this.step++
      if (this.step >= this.questions.length){
        this.$emit('switchPage', "Recomendation");
      }
    }
  }

}
</script>

<style scoped>
@import '../assets/TestForm.css';
/* @import '../assets/materialize.min.css'; */
</style>