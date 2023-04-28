<template>
    <div v-for="(item, idx) in data" :key="idx">
        <PostView :item="item"/>
    </div>    
</template>

<script>
import PostView from '../components/PostView.vue'

export default {

    components: {
        PostView : PostView
    },
    props: {
        data : Array
    }

}
</script>

<style>

</style>