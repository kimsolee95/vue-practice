import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
        name : 'kim',
        age: 20,
        likes : [36, 20, 49],
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
        //state.likes++;
        state.likes[payload.idx]++;
      } else if (!payload.isLikes) {
        //state.likes--;
        state.likes[payload.idx]--;
      }
    },
  }
  
})

export default store