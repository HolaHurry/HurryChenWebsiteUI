import { createApp } from 'vue'
import App from './App.vue';
import Vue from 'vue';
import less from 'less';
import MagicCheck from 'magic-check/css/magic-check.css';
import './assets/css/common.less';

createApp(App).mount('#app');
Vue.use(less);
Vue.use(MagicCheck);


