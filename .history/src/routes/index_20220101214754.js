// import Vue from 'vue';
// import VueRouter from 'vue-router';
import { createRouter } from 'vue-router'

const Index = () => import(/* webpackChunkName: "index" */ '../App.vue');
// const PersonCenter = () => import(/* webpackChunkName: "personcenter" */ '../components/wode.vue');

// 解决编程式路由往同一地址跳转的时候会报错的问题
// const originalPush  = VueRouter.prototype.push;

// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//     if (onResolve || onReject) {
//         return originalPush.call(this, location, onResolve, onReject);
//     }
//     return originalPush.call(this, location).catch(err => err);
// }

// Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: Index
    },
    // {
    //     path: '/personalcenter',
    //     component: PersonCenter
    // }
];

const router = createRouter({
    mode: 'history',
    // history: createWebHashHistory(),
    // base: process.env.BASE_URL,
    routes
});

export default router;

