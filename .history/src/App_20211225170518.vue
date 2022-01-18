<template>
  <div class="dynamic-index-back-img">
    <navigator></navigator>
    <div class="index-main-body">
      <img alt="HurryChen logo" src="./assets/images/CGYLogo.png" class="cgy-logo-img-style">
      <div class="welcome-font">Welcome to HurryChen's Space</div>
      <!-- <span class="welcome-font">Welcome to HurryChen's Space</span> -->
      <div class="hungry-font">Stay Hungry,</div>
      <div class="foolish-font">Stay Foolish.</div>
      <div class="loading-wrapper" v-show="showLoading">
        <loading></loading>
      </div>
      <div v-show="!showLoading">
        <a class="link-font" text="点击进入" :onclick="new_opt"/>
      </div>
    </div>
    <!-- <cgy-check-box></cgy-check-box> -->
    <!-- <div>
      <input class="magic-checkbox" type="checkbox" checked="checked">
      <label >Checked</label>
    </div> -->
  </div>
</template>

<script>
import navigator from './views/navigator.vue';
// import HelloWorld from './components/HelloWorld.vue';
import Loading from './components/extend/Loading.vue';
import requests from '@/util/request/request.js';
const BINGGETPICAPI = '/bingTool/HPImageArchive.aspx?format=js&idx=0&n=1';

export default {
  name: 'App',
  components: {
    navigator,
    // HelloWorld,
    Loading
  },
  data() { 
    return {
      showLoading: true, // 显示loading
      imgUrl: require('./assets/images/CGYLogo.png'),  // 背景图片地址,
      bingImgForBackGround: '',
      imgUpdateKey: 0
    }
  },
  methods: {
    new_opt() {
      console.log('点击事件');
    },
    getBingPic() {
      requests.get(BINGGETPICAPI).then(res => {
        if (res.data.images) {
          this.bingImgForBackGround = `https://cn.bing.com/${res.data.images[0].url}`;
          this.imgUpdateKey++;
          document.querySelector('.dynamic-index-back-img').style.backgroundImage = `url(${this.bingImgForBackGround})`;
          document.querySelector('.dynamic-index-back-img').style.backgroundRepeat = 'no-repeat';
        }
      });
    }
  },
  created() {
    this.getBingPic();
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
  height: 100%;
  width: 100%;
  /* margin-top: 60px; */
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
.welcome-font {
  color: #1E426E;
  font-size: 36px;
  line-height: 80px;
  font-weight: 900;
  text-shadow: 1px 1px 10px white;
}
.hungry-font {
  color: #1E426E;
  font-size: 24px;
  line-height: 35px;
  font-weight: 600;
  text-shadow: 1px 1px 5px white;
}
.foolish-font {
  color: #1E426E;
  font-size: 24px;
  line-height: 35px;
  font-weight: 600;
  text-shadow: 1px 1px 5px white;
}
.dynamic-index-back-img {
  background-size: 100% auto;
  -moz-background-size: 100% auto;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
}
.cgy-logo-img-style {
  height: 200px;
}
.index-main-body {
  margin-top: 60px;
}
</style>
