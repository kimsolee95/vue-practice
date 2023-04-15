<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div v-for="(data, idx) in products" :key="idx">
    <h4>{{ data }}</h4>
    <p> 50만원</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {

      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
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
