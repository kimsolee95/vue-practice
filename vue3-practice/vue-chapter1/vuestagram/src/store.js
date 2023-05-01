import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({

  state(){
    return {
        name : 'kim',
        age: 20,
        likes : [36, 20, 49],
        more: {},
    }
  },
  mutations :{
    nameChange(state) {
        state.name = 'park'
    },
    ageChange(state) {
      state.age++;
    },
    likesChange(state, payload) {
      
      if (payload.isLikes) {
        state.likes[payload.idx]++;
      } else if (!payload.isLikes) {
        state.likes[payload.idx]--;
      }
    },
    setMore(state, data) {
      state.more = data;
    }
  },
  actions: {
    getData(context) {
      axios.get('https://codingapple1.github.io/vue/more0.json')
      .then((res) => {
        console.log('res ---->' + res.data);
        context.commit('setMore', res.data);
      });
    }
  }

})

export default store