<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="cancelMove">Cancel</li>
    </ul>
    <ul @click="nextPageMove" class="header-button-right">
      <li v-if="step == 1 || step == 0">Next</li>
      <li v-if="step == 2" @click="publishPost">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <ContainerView :data="data" :step="step" :uploadUrl="uploadUrl" :myContent="myContent" :choosedFilter="choosedFilter"
    @write="myContent = $event" />

  <button @click="addMore">더보기</button>
  <p>나이 : {{ $store.state.age }}</p>
  <button @click="$store.commit('ageChange')">나이 change</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import ContainerView from './components/ContainerView.vue';
import data from './assets/data.js';
import axios from 'axios';

export default {

  name: 'App',
  data() {
    return {
      step: 0,
      data: data,
      moreCnt: 0,
      uploadUrl: "",
      myContent: "",
      choosedFilter: "",
    }
  },
  components: {
    ContainerView: ContainerView
  },
  methods: {

    more() {
      axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((res) => {
          console.log(res.data);
          this.data.push(res.data);
        })
        .catch
    },

    addMore() {
      if (this.moreCnt < 2) {
        this.moreCnt += 1;
      }
      let url = 'https://codingapple1.github.io/vue/more' + this.moreCnt + '.json';
      axios.get(url)
        .then((res) => {
          this.data.push(res.data);
        })
        .catch((e) => {
          console.log(e);
        })
    },

    upload(e) {

      let file = e.target.files;
      console.log(file);
      console.log(file[0].type);

      let uploadUrl = URL.createObjectURL(file[0]);
      console.log(uploadUrl);
      this.uploadUrl = uploadUrl;

      this.step++;
    },

    nextPageMove() {
      if (this.step < 2) this.step++;
      if (this.step == 2) this.step = 0;
    },

    cancelMove() {
      this.step = 0;
    },

    publishPost() {

      var myPost = {
        name: "kimsolee",
        userImage: "",
        postImage: this.uploadUrl,
        likes: 0,
        date: "",
        liked: false,
        content: this.myContent,
        filter: this.choosedFilter,
      };

      this.data.unshift(myPost);
      this.step = 0;
    },
  },
  mounted() {
    this.emitter.on('filterBtnClick', (e) => {
      this.choosedFilter = e;
    });
  },
}
</script>

<style>
/* @import 'style.css'; */

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
