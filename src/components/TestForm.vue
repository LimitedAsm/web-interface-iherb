<template>
<div class="mainTestIner">
  <p class="testQuesion">{{ question.question }}?</p>
  <div class="testIner" v-for="answer in answers" :key="answer">
    <input required v-model="chosenAnswer" v-bind:value="answer.name"  name="ansver" class="testRadio" type="radio">
    <p class="testAnsver">{{ answer.name }}</p>
  </div>
  <!-- <div v-if="type == 'input'">
    <div class="pseudoInput"><input name="ansver" type="text"></div>
  </div> -->
  <button class="testButton" v-on:click="stepsOverflow">Далее</button>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import url from '../../config.js'
export default {
  name: "TestForm",
  data(){
    return {
      chosenAnswer: '',
      question: {},
      lastQuestion: false
    }
  },
  computed:{
    answers(){
      console.log(this.question.answers)
      return this.question.answers
    },
    questionID(){
      if(this.question){
        return this.question.id
      }
      return 0
    },
    ansverID(){
      this.question.answers.forEach(element => {
        console.log(element)
        if (element.name == this.chosenAnswer){
          console.log(element)
          return (element.id)
        }
      });
      return 0
    }
  },
  emits: ["switchPage"],
  methods: {
    ...mapGetters(["getToken"]),
    stepsOverflow(){
      this.fetchQuestion()
    },
    fetchQuestion(){
      let fetchUrl
      console.log(this.questionID)
      console.log(this.answerID)
      if(this.questionID == 0){
        fetchUrl = `${url.data}get-question/`
      }
      else{
        fetchUrl = `${url.data}get-question/?question_id=${this.questionID}&answer_id=${this.answerID}`
      }
      fetch(fetchUrl, {
        method: 'GET',
        headers: {
          Authorization: "Token " + this.getToken(),
        },
      })
      .then(
        async (response) => {
          const responsJSON = await response.json();
          this.question = responsJSON
          console.log(responsJSON)
          if(this.lastQuestion == true){
            this.$emit('switchPage', "Recomendation");
          }
          else if(responsJSON.isFinal == true){
            this.lastQuestion = true;
          } 
        },
        (reject) => {
          console.log("Error: ", reject);
          this.message = "Сервер недоступен"
        }
      );
    }
  },
  async created(){
   await fetch(`${url.data}get-question/`, {
      method: 'GET',
      headers: {
        Authorization: "Token " + this.getToken(),
      },
    })
    .then(
      async (response) => {
        const responsJSON = await response.json();
        this.question = responsJSON
        console.log(this.question)
        console.log(responsJSON)
        if(this.lastQuestion == true){
          this.$emit('switchPage', "Recomendation");
        }
        else if(responsJSON.isFinal == true){
          this.lastQuestion = true;
        } 
      },
      (reject) => {
        console.log("Error: ", reject);
        this.message = "Сервер недоступен"
      }
    );
  }
}



</script>

<style scoped>
@import '../assets/TestForm.css';
/* @import '../assets/materialize.min.css'; */
</style>