import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age: 20,
      likes: 30,
    }
  },
  mutations: {
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
  }

})

export default store;