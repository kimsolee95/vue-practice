import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age: 20
    }
  },
  mutations: {
    nameChange(state) {
      state.name = 'park';
    },
    ageChange(state) {
      state.age++;
    }
  }

})

export default store;