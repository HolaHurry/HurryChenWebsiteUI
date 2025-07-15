<template>
  <div class="dynamic-index-back-img">
    <div class="index-main-body">
      <img
        alt="HurryChen logo"
        src="../assets/images/CGYLogo.png"
        class="cgy-logo-img-style"
      />
      <!-- <div class="welcome-font">Welcome to HurryChen's Space</div> -->
      <div class="hungry-font">Stay Hungry,</div>
      <div class="foolish-font">Stay Foolish.</div>
      <div class="loading-wrapper" v-show="showLoading">
        <loading></loading>
      </div>
      <!-- <div v-show="!showLoading">
        <a class="link-font" text="点击进入" :onclick="new_opt" />
      </div> -->
    </div>
    <div class="beian">
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >您的备案号: 辽ICP备19012448号</a
      >
    </div>
  </div>
</template>

<script>
import { jsonp } from "vue-jsonp";
import Loading from "../components/extend/Loading.vue";
import requests from "@/util/request/request.js";
const BINGGETPICAPI =
  "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1";

export default {
  name: "App",
  components: {
    Loading,
  },
  data() {
    return {
      showLoading: true, // 显示loading
      imgUrl: require("../assets/images/CGYLogo.png"), // 背景图片地址,
      bingImgForBackGround: "",
      imgUpdateKey: 0,
    };
  },
  methods: {
    getPicAddr(pic) {
      console.log(pic);
      this.bingImgForBackGround = `https://cn.bing.com/${pic.data.images[0].url}`;
      this.imgUpdateKey++;
      var tempFlag = 0;
      let _this = this;
      // 尝试浏览器同频率定时器（可用于页面逐步加载）
      var timer = requestAnimationFrame(function urlMount() {
        if (tempFlag < 100) {
          tempFlag++;
          timer = requestAnimationFrame(urlMount);
        } else {
          document.querySelector(
            ".dynamic-index-back-img"
          ).style.backgroundImage = `url(${_this.bingImgForBackGround})`;
          document.querySelector(
            ".dynamic-index-back-img"
          ).style.backgroundRepeat = "no-repeat";
        }
      });
    },
    new_opt() {
      console.log("ppp");
    },
    getBingPic() {
      // this.bingImgForBackGround = "/public/24lamasia.jpg";
      // debugger;
      // this.jsonp({
      //   url: BINGGETPICAPI,
      //   key: "getPicAddr",
      //   callback: function (ret) {
      //     debugger;
      //     console.log(ret);
      //   },
      // });
      // js

      // var script = document.createElement("script");
      // script.src = `${BINGGETPICAPI}&callback=getPicAddr`;
      // debugger;
      // document.body.appendChild(script);
      requests
        .get(BINGGETPICAPI)
        .then((res) => {
          if (res.data.images) {
            console.log("22222");
            this.bingImgForBackGround = `https://cn.bing.com/${res.data.images[0].url}`;
            this.imgUpdateKey++;
            var tempFlag = 0;
            let _this = this;
            // 尝试浏览器同频率定时器（可用于页面逐步加载）
            var timer = requestAnimationFrame(function urlMount() {
              if (tempFlag < 100) {
                tempFlag++;
                timer = requestAnimationFrame(urlMount);
              } else {
                document.querySelector(
                  ".dynamic-index-back-img"
                ).style.backgroundImage = `url(${_this.bingImgForBackGround})`;
                document.querySelector(
                  ".dynamic-index-back-img"
                ).style.backgroundRepeat = "no-repeat";
                cancelAnimationFrame(timer);
              }
            });
            // document.querySelector('.dynamic-index-back-img').style.backgroundImage = `url(${this.bingImgForBackGround})`;
            // document.querySelector('.dynamic-index-back-img').style.backgroundRepeat = 'no-repeat';
          }
        })
        .catch((e) => {
          console.log(e);
          document.querySelector(
            ".dynamic-index-back-img"
          ).style.backgroundImage = `url(24lamasia.jpg)`;
          console.log(
            document.querySelector(".dynamic-index-back-img").style
              .backgroundImage
          );
        });
    },

    jsonp(setting) {
      setting.data = setting.data || {};
      setting.key = "callback";
      setting.callback = setting.callback || function () {};
      setting.data[setting.key] = "getPicAddr"; //callback="xxxxxx"
      window["getPicAddr"] = function (data) {
        debugger;
        setting.callback(data);
      };

      var script = document.createElement("script");
      var query = [];
      for (var key in setting.data) {
        query.push(key + "=" + encodeURIComponent(setting.data[key]));
      }
      script.src = setting.url + "&" + query.join("&") + "&cb=getPicAddr";
      document.head.appendChild(script);
      document.head.removeChild(script);
    },
  },
  created() {
    // window.getPicAddr = function (data) {
    //   console.log("-----");
    //   console.log(data);
    // };
    // this.getBingPic();
  },
  mounted() {
    this.showLoading = false;
    // let bgImg = new Image();
    // bgImg.src = this.imgUrl; // 获取背景图片的url
    // bgImg.onerror = () => {
    //   console.error("img onerror");
    // };
    // // 等背景图片加载成功后 去除loading
    // bgImg.onload = () => {
    //   // 如果setTimeout函数内用到了this，需要在函数外定义一个变量暂存this；
    //   // setTimeout是  延迟1000ms后，再执行函数体内的动作；
    //   var _this = this;
    //   setTimeout(function () {
    //     _this.showLoading = false;
    //   }, 1000);
    // };
  },
};
</script>

<style>
#app {
  font-family: sans-serif, Helvetica, Avenir, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1e426e;
  height: 100%;
  width: 100%;
  /* margin-top: 3.75rem; */
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
  padding: 1.25rem 2.5rem;
  border-radius: 0.625rem;
  position: relative;
  z-index: 1;
}
.welcome-font {
  /* color: #1e426e; */
  color: white;
  font-size: 60px;
  line-height: 5.75rem;
  font-weight: 900;
  /* text-shadow: 0.0625rem 0.0625rem 0.625rem white; */
}
.hungry-font {
  color: #1e426e;
  font-size: 1.5rem;
  line-height: 2.1875rem;
  font-weight: 600;
  text-shadow: 0.0625rem 0.0625rem 0.3125rem white;
}
.foolish-font {
  color: #1e426e;
  font-size: 1.5rem;
  line-height: 2.1875rem;
  font-weight: 600;
  text-shadow: 0.0625rem 0.0625rem 0.3125rem white;
}
.link-font {
  cursor: pointer;
}
.dynamic-index-back-img {
  background-size: 100% auto;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  -moz-background-size: 100% auto;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
}
.cgy-logo-img-style {
  height: 12.5rem;
}
.index-main-body {
  margin-top: 5rem;
}
.beian {
  position: fixed;
  bottom: 0.9375rem;
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
