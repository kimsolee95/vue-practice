<template>
  <div class="black-bg" v-if="modalActivate == true">
    <div class="white-bg">
      <img :src="onerooms[selectedOnerooms].image">
      <h4>{{ onerooms[selectedOnerooms].title }}</h4>
      <p>{{ onerooms[selectedOnerooms].content }}</p>
      <input v-model.number="month"> <!--@input="month = $event.target.value"-->
      <p> {{ month }}개월 선택함:  {{ onerooms[selectedOnerooms].price * month }} 원</p>
      <p><button @click="$emit('closeModal')">닫기</button></p>
    </div>
  </div>    
</template>

<script>
export default {

    name: 'ModalView',
    data() {
      return {
        month : 1,
      }
    },
    watch : {
      month(e) {
        if (e > 13) {
          alert('13 이하의 값만 입력 가능합니다.');
          this.month = 1;
        }
      }
    },
    props: {
        onerooms : Array,
        selectedOnerooms: Number,
        modalActivate: Boolean,
    }

}
</script>

<style>
</style>