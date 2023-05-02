<template>
    <div style="padding : 10px">
    <h4>팔로워</h4>
    <input @input="searchName($event.target.value)" v-model="searchWord" placeholder="search" />
    <div v-for="(item, id) in state.follower" :key="id" class="post-header">
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
        
        const state = reactive({
            follower: [],
            followerOrigin: [],
        });

        // let follower = ref([]);
        // let followerOrigin = reactive({}); 
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
                // follower.value = res.data;
                // followerOrigin.value = res.data;
                state.follower = res.data;
                state.followerOrigin = res.data;
            });

        });

        function searchName(e) {

            if (searchWord.value !== null) {
                console.log("e 확인 -->",  e);
                console.log("searchWord.value 확인-->", searchWord.value);

                let resultFollower = state.follower.filter((item) => {
                    return item.name.indexOf(e) != -1
                });
                state.follower = [...resultFollower];
            }
            
            if (searchWord.value === '') {
                state.follower = state.followerOrigin;
            }
            
        }

        return {state, searchName, searchWord}; //follower, followerOrigin,

    },

}
</script>

<style>
</style>