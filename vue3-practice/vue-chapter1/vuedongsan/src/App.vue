<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div class="black-bg" v-if="modalActivate == true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
      <button @click="modalClose">닫기</button>
    </div>
  </div>

  <!-- <div v-for="(data, idx) in products" :key="idx">
    <h4>{{ data }}</h4>
    <p> 50만원</p>
  </div> -->

  <div v-for="(item, idx) in onerooms" :key="idx">
    <img :src="item.image" class="room-img">
    <h4 @click="modalActivate = true">{{ item.title }}</h4>
    <p> {{ item.price }} 원</p>
  </div>


</template>

<script>
import data from './assets/onerooms.js';

export default {
  name: 'App',
  data() {
    return {

      modalActivate: false,
      onerooms: data,

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
    mocalOpen() {
      this.modalActivate = true;
    },
    modalClose() {
      this.modalActivate = false;
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

.room-img {
  width: 100%;
  margin-top: 40px;
}

body {
  margin: 0
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}

.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
