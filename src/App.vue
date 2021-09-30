<template>
  <img alt="HurryChen logo" src="./assets/images/CGYLogo.png" height="200">
  <navigator></navigator>
  <hello-world msg="Welcome to HurryChen's Space"/>
  <div class="loading-wrapper" v-show="showLoading">
    <loading></loading>
  </div>
  <div v-show="!showLoading">
    <a class="link-font" text="点击进入" :onclick="new_opt"/>
  </div>
  <!-- <cgy-check-box></cgy-check-box> -->
  <!-- <div>
    <input class="magic-checkbox" type="checkbox" checked="checked">
    <label >Checked</label>
  </div> -->
</template>

<script>
import navigator from './views/navigator.vue';
import HelloWorld from './components/HelloWorld.vue';
import Loading from './components/extend/Loading.vue';

export default {
  name: 'App',
  components: {
    navigator,
    HelloWorld,
    Loading
  },
  data() { 
    return {
      showLoading: true, // 显示loading
      imgUrl: require('./assets/images/CGYLogo.png')  // 背景图片地址
    }
  },
  methods: {
    new_opt() {
      console.log('点击事件');
    }
  },
  mounted () {
    let bgImg = new Image();
    bgImg.src = this.imgUrl; // 获取背景图片的url
    bgImg.onerror = () => {
      console.log('img onerror');
    }
    // 等背景图片加载成功后 去除loading
    bgImg.onload = () => {
      // 如果setTimeout函数内用到了this，需要在函数外定义一个变量暂存this；
      // setTimeout是  延迟1000ms后，再执行函数体内的动作；
      var _this = this;
      setTimeout(function() {
        _this.showLoading = false;
      }, 1000);
    }
  }
}
</script>

<style>
#app {
  font-family: sans-serif, Helvetica, Avenir, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1E426E;
  margin-top: 60px;
}
.loading-wrapper {
  /* Loading时整个页面背景 */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.login-wrapper {
  /* 整个页面 */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.login-wrapper img {
  position: absolute;
  z-index: 1;
}
.login {
    padding: 20px 40px;
    border-radius: 10px;
    position: relative;
    z-index: 1;
} 
</style>
