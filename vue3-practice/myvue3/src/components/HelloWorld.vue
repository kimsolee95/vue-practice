<template>
  <!-- <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p> -->

  <p>줄임말과 원래말 입력하기</p>
  <input type="text" v-bind:value="abbr" />
  <input type="text" v-model="normal" />
  
  <hr />

  <abbr v-bind:title="normal">{{ abbr }}</abbr>

</template>

<script>
import { ref } from 'vue'

export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  // data() {
  //   return {
  //     count: 0
  //   }
  // }

//Composition API

  setup() {
   
    const abbr = ref('DOPT');
    const normal = ref('Project Team')

    return {
      abbr,
      normal,
    }
  },

}
</script>
