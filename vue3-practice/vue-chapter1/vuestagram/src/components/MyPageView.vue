<template>
    <div style="padding : 10px">
    <h4>팔로워</h4>
    <input @input="searchName($event.target.value)" :searchWord="searchWord" placeholder="search" />
    <div v-for="(item, id) in follower" :key="id" class="post-header">
        <div class="profile" :style="`background-image:url(${item.image})`"></div>
        <span class="profile-name">{{ item.name }}</span>
    </div>
    </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs, watch } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

export default {

    name: 'myPage',
    props: {
        one : Number,
        two : Number,
    },
    setup(props) { //created hook 
        
        let follower = ref([]);
        let followerOrigin = reactive({ name : 'kim' });
        let searchWord = ref(['']);

        let {one, two} = toRefs(props);
        console.log(one.value);
        console.log(two.value);

        let store = useStore();
        console.log(store.state.name);

        watch(one , ()=>{
            console.log('one is changed');
        });

        onMounted(() => {
            axios.get('/follower.json').then((res) => {
                follower.value = res.data;
            });

            axios.get('/follower.json').then((res) => {
                followerOrigin.value = res.data;
            });
        });

        function searchName(e) {

            if (e.length != 0) {
                console.log(JSON.stringify(e));

                let resultFollower = follower.value.filter((item) => {
                    return item.name.indexOf(e) != -1
                });
                follower.value = [...resultFollower];
            } else {
                follower.value = followerOrigin;
            }
        }

        return {follower, followerOrigin, searchName, searchWord};

    },

}
</script>

<style>
</style>