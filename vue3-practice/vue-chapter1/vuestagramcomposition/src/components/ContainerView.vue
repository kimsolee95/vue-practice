<template>
  <div>
    <div v-if="step == 0">
      <PostView v-for="item in postdata" 
      :key="item" 
      :post="item"
      @click="clickPost" />
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div 
        :class="`upload-image ${this.filterItem}`" 
        :style="{ backgroundImage : `url(${uploadImage})` }">
      </div>
      <div class="filters">
        <FilterBox v-for="item in filtername" 
          :key="item"
          :filter="item"
          :uploadImage="uploadImage"
          @click="filterClick(item)">
          <template v-slot:filterName>{{ item }}</template>
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div class="upload-image" 
      :style="{ backgroundImage : `url(${uploadImage})` }">
      </div>
      <div class="write">
        <textarea @input="$emit('writeSomething', $event)" class="write-box">write!</textarea>
      </div>
    </div>
  </div>
</template>
<script>
import PostView from "./PostView.vue";
import FilterBox from "./FilterBox.vue";

export default {
  components: {
    PostView: PostView,
    FilterBox: FilterBox,
  },
  props: {
    postdata: {
      type: Array,
      required: true,
    },
    filtername: {
      type: Array,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
    uploadImage: {
      type: String,
      required: false,
    }
  },

  data() {
    return {
      filterItem: '',
      isLikesIncrease: true,
    }
  },
  methods: {
    writeSomething(e) {
      this.$emit('writeSomething', e);
    },
    filterClick(filterItem) {
      console.log(`filter ${filterItem}`);
      this.filterItem = filterItem;
    },
    clickPost() {
      console.log('clickPost=====');
      this.$store.commit('likesChange', this.isLikesIncrease);
      this.isLikesIncrease = !this.isLikesIncrease;
    }
  }


};
</script>
<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>