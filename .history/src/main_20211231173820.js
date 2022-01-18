// import { createApp } from 'vue'
import App from './App.vue';
import Vue from 'vue';
import requests from '@/util/request/requestIndex.js';
import less from 'less';
import MagicCheck from 'magic-check/css/magic-check.css';
// import router from './routes/index';
import './assets/css/common.less';
import './assets/css/layout.less';

// Vue.use(router);
createApp(App).mount('#app');
// new Vue({
//     router,
//     render : h => h(App)
// }).$mount('#app');
Vue.use(less);
Vue.use(MagicCheck);
Vue.use(requests);
