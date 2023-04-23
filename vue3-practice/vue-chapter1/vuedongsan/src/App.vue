<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <DiscountView/>

  <!-- <div class="start" :class="{end : modalActivate}"> -->
  <transition name="fade">
    <ModalView 
      @closeModal="modalActivate = false"
      :onerooms="onerooms" 
      :selectedOnerooms="selectedOnerooms" 
      :modalActivate="modalActivate"
    />
  </transition>
  <!-- </div> -->

  <!-- <div v-for="(item, idx) in onerooms" :key="idx">
    <img :src="item.image" class="room-img">
    <h4 @click="modalActivate = true; selectedOnerooms=idx">{{ item.title }}</h4>
    <p> {{ item.price }} 원</p>
  </div> -->

  <CardView v-for="(item, idx) in onerooms"
    @openModal="modalActivate = true; selectedOnerooms = $event" 
    :key="idx" 
    :item="item" 
    :modalActivate="modalActivate" 
  />

</template>

<script>
import data from './assets/onerooms.js';
import DiscountView from './components/DiscountView.vue';
import ModalView from './components/ModalView.vue';
import CardView from './components/CardView.vue';

export default {
  name: 'App',
  data() {
    return {

      selectedOnerooms: 0,
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
    DiscountView : DiscountView,
    ModalView : ModalView,
    CardView : CardView,
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

.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity : 1
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
