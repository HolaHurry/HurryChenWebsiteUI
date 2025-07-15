import { createApp } from "vue";
import App from "./App.vue";
// import Vue from 'vue';
import requests from "@/util/request/requestIndex.js";
import less from "less";
// import MagicCheck from 'magic-check/css/magic-check.css';
import router from "./routes/index";
import "./assets/css/common.less";
import "./assets/css/layout.less";
import proxy from "./config/ajaxHook";
// import i18n from "./i18n/i18n";

// createApp(App).mount('#app');
// Vue.use(router);

const app = createApp(App);
app
  .use(
    router,
    less,
    requests,
    proxy
    // (key, value) => i18n.(key, value),
  )
  .mount("#app");

// 常用找服务器命令：
// find / -name express
// /home/hurrychen-webui: npm run start  启动项目
// node装到了/usr目录下，docker装到了默认的应该是/usr/bin下
// nginx 默认安装到了/usr/local目录，
// nginx需要的pcre在/usr安装的，但是自己映射到别的地方去了
// ngingx 启动；  pwd：/usr/local/nginx/sbin   ./nginx -s reload
// 进程里找 ps -ef | grep nginx        ps -rf | grep nginx  正在运行的
// 项目文件都在 /home  下面
// /home/hurychenwebui  下面有Dockerfile 和 nginx.conf
// 打docker镜像： docker build -t 你需要的镜像名:标签名 .    结尾有个点

// nginx 配置在/usr/local/nginx   不在项目目录下

// vue3使用element UI 需要使用element-plus 而且引入的时候不能直接目录找，得指定到node-modules里，如‘../../node_modules/element-plus/lib/locale’

// 备案 <a href="https://beian.miit.gov.cn/" target="_blank">辽ICP备19012448号-1</a>
