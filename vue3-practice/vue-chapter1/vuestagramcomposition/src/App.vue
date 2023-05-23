<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <ContainerView 
  :postdata="postdata"
  :filtername="filtername"
  :step="step"
  :uploadImage="uploadImage"
  @writeSomething="writeSomething"
  />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import ContainerView from './components/ContainerView.vue';
import postdata from '@/assets/postdata.js';
import filtername from '@/assets/filtername.js';

export default {
  name: "App",
  data() {
    return {
      postdata: postdata,
      filtername: filtername,
      addCnt: 0,
      step: 0,
      uploadImage: "",
      uploadText: "",
      clickedFilter: ""
    }
  },
  components: {
    ContainerView: ContainerView
  },
  mounted() {
    this.emitter.on('filterChoose', (e) => {
      this.clickedFilter = e;
    })
  },
  methods: {
    more() {

      if (this.addCnt >= 2) return; 

      let url = `https://codingapple1.github.io/vue/more${this.addCnt}.json`;
      axios.get(url)
      .then((res) => {
        this.postdata.push(res.data);
        this.addCnt++;
      })
    },
    upload(e) {
      let file = e.target.files;
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.uploadImage = url;
      this.step++;
    },
    publish() {
      let publishedData = {
        name: "Kim solee",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImage,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.uploadText,
        filter: this.clickedFilter
      };
      postdata.unshift(publishedData);
      this.step = 0;
    },
    writeSomething(e) {
      console.log(e);
      this.uploadText = e.target.value;
    },
  },
};
</script>

<style>
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
