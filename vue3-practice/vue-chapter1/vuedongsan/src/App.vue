<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <!-- <div v-for="(data, idx) in products" :key="idx">
    <h4>{{ data }}</h4>
    <p> 50만원</p>
  </div> -->

  <div>
    <h4>{{ products[0] }}</h4>
    <p> 50만원</p>
    <button @click="increaseFirst">허위매물신고</button> <span>신고 수: {{ first }}</span>
  </div>

  <div>
    <h4>{{ products[1] }}</h4>
    <p> 60만원</p>
    <button @click="increaseSecond">허위매물신고</button> <span>신고 수: {{ second }}</span>
  </div>

  <div>
    <h4>{{ products[2] }}</h4>
    <p> 70만원</p>
    <button @click="increaseThird">허위매물신고</button> <span>신고 수: {{ third }}</span>
  </div> 

</template>

<script>


export default {
  name: 'App',
  data() {
    return {

      first : 0,
      second: 0,
      third: 0,
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  methods: {

    increaseFirst() {
      this.first += 1;
    },
    increaseSecond() {
      this.second += 1;
    },
    increaseThird() {
      this.third += 1;
    },

  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
