<template>
  <div 
    @click="fire" 
    :class="[item, `filter-item`]" 
    :style="{ backgroundImage: `url(${uploadUrl})` }"
  >
    <slot name="filtername"></slot> <!-- 전송된 slot 이 보일 곳 -->
  </div>
</template>

<script>
export default {

    // name : 'filterbox',
    props : {
      uploadUrl : String,
      item : String,
    },
    data() {
      return {
        msg : 'filter filter',
        // item: '',
      }
    },
    methods : {
      fire() {
        this.emitter.emit('filterBtnClick', this.item);
      }
    }

}
</script>

<style>
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