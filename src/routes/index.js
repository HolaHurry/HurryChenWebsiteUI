// import Vue from 'vue';
// import VueRouter from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
// import Router from 'vue-router';

const Index = () => import(/* webpackChunkName: "index" */ '../views/indexPage.vue');
const PersonCenter = () => import(/* webpackChunkName: "personcenter" */ '../views/personalcenter/personIndex.vue');
const GalleryIndex = () => import(/* webpackChunkName: "galleryIndex" */ '../views/gallery/galleryIndex.vue');

// 解决编程式路由往同一地址跳转的时候会报错的问题

// Router.push = function push(location, onResolve, onReject) {
//     if (onResolve || onReject) {
//         return Router.push.call(this, location, onResolve, onReject);
//     }
//     return Router.push.call(this, location).catch(err => err);
// }

// const routerPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//     return routerPush.call(this, location).catch(err => err);
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
    {
        path: '/gallery',
        component: GalleryIndex
    },
    {
        path: '/personalcenter',
        component: PersonCenter
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;

