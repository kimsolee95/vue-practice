import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age: 20,
      likes: 30,
      more : {},
    }
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
    nameChange(state) {
      state.name = 'park';
    },
    ageChange(state) {
      state.age++;
    },
    likesChange(state, payload) {

      if (payload) {
        state.likes++;
      } else {
        state.likes--;
      }

    }
  },
  actions: {
    getPostData(context) {
      let url = `https://codingapple1.github.io/vue/more0.json`;
      axios.get(url).then((res) => {
        console.log(res.data);
        context.commit('setMore', res.data);
      });
    }
  }

})

export default store;