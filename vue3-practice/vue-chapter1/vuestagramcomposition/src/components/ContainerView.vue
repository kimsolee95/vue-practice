<template>
  <div>
    <PostView v-for="item in postdata" 
    :key="item"
    :post="item"
    />
  </div>
</template>
<script>
import PostView from './PostView.vue';

export default{

  components: {
    PostView: PostView
  },
  props: {
    postdata: {
      type: Array,
      required: true
    }
  }

}
</script>
<style>
</style>