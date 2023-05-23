<template>
  <div class="filter-item" 
    :class="`${filter}`" 
    :style="{ backgroundImage: `url(${uploadImage})` }"
    @click="chooseFilter"
  ></div> 
</template>
<script>
export default {

  props: {
    filter: {
      type: String,
      required: true,
    },
    uploadImage: {
      type: String,
      required: true,
    }
  },

  methods: {
    chooseFilter() {
      console.log('click===?', this.filter);
      this.emitter.emit('filterChoose', this.filter);
    }
  }

}
</script>
<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>
