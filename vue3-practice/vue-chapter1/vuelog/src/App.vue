<template>



  <router-link to="/">홈페이지</router-link>
  <hr/>
  <router-link to="/list">목록</router-link>

  <router-view :item="blog"></router-view>
  <!-- <ListView
  v-for="(item, idx) in blog"
  :key="idx"
  v-bind:item="item"
  /> -->

</template>

<script>
// import ListView from './components/ListView.vue';
import blogInfo from './assets/blog.js';

export default {
  name: 'App',
  data() {
    return {
      blog : blogInfo,
    }
  },
  // components: {
  //   ListView: ListView,
  // }
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
