import { createApp } from 'vue'
import App from './App.vue';
import Vue from 'vue';
import requests from '@/util/request/requestIndex.js';
import less from 'less';
import MagicCheck from 'magic-check/css/magic-check.css';
import router from './routes/index';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
import './assets/css/common.less';
import './assets/css/layout.less';
// import { ElButton, ElMenu, ElSubmenu, ElMenuItem } from 'element-plus';

// Vue.use(ElementPlus);
createApp(App).mount('#app');
// Vue.use(ElButton);
// Vue.use(ElMenu);
// Vue.use(ElMenuItem);
// Vue.use(ElSubmenu);
Vue.use(less);
Vue.use(MagicCheck);
Vue.use(requests);
Vue.use(router);
