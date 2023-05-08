<template>
    <div>
      <div v-if="step == 0">
      <PostView v-for="(item, idx) in data" 
        :key="idx" 
        :item="item" 
        :idx="idx"
      />
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
        <div 
        :class="[choosedFilter, `upload-image`]" 
        :style="{ backgroundImage: `url(${uploadUrl})` }">
        </div>
        <div class="filters">
            <FilterBox v-for="filter in filterData" 
            :uploadUrl="uploadUrl" 
            :item="filter" 
            :key="filter">
              <template v-slot:filtername> <!-- slot으로 전송 (html을 통째로 보이게 할 때는 이게 더 편할 수 있음) -->
                  <span>{{ filter }}</span>
              </template>
            </FilterBox>
        </div>
    </div>
    <!-- 글작성페이지 -->
    <div v-if="step == 2">
        <div :class="[choosedFilter, `upload-image`]" 
          :style="{ backgroundImage: `url(${uploadUrl})` }">
        </div>
        <div class="write">
            <textarea :myContent="myContent" 
              @input="$emit('write', $event.target.value)" 
              class="write-box">write!
          </textarea>
        </div>
    </div>
    <!-- composition api -->
    <div v-if="step == 3">
        <MyPageView :one="1" :two="2"/>
    </div>
  </div>
</template>
<script>
import PostView from './PostView.vue';
import FilterBox from './FilterBox.vue';
import MyPageView from './MyPageView.vue';
import filterData from '@/assets/filterData.js';

export default {

  components: {
    PostView : PostView,
    FilterBox : FilterBox,
    MyPageView : MyPageView,
  },
  props: {
    data : Array,
    step : Number,
    uploadUrl : String,
    myContent : String,
    choosedFilter : String,
  },
  data() {
    return {
      filterData: filterData,
    }
  },
  methods: {
    writePost() {

      let fileterAndContent = {
        myContent: this.myContent,
        filter: this.choosedFilter
      }

      this.$emit("publishPost", fileterAndContent);
    }
  },

}
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