<template>
    <div class="index-element-nav-bar">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="0">首页</el-menu-item>
            <el-sub-menu index="1">
                <template v-slot:title>工具</template>
                <el-menu-item index="1-1">临时云盘</el-menu-item>
                <el-menu-item index="1-2">MAC软件网站</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template v-slot:title>博客</template>
                <el-menu-item index="2-1">VUE前端</el-menu-item>
                <el-menu-item index="2-2">MAC使用技巧</el-menu-item>
                <el-menu-item index="2-3">只言片语</el-menu-item>
                <el-sub-menu index="2-4">
                    <template v-slot:title>计算机相关理论</template>
                    <el-menu-item index="2-4-1">网络</el-menu-item>
                    <el-menu-item index="2-4-2">计算机组成</el-menu-item>
                    <el-menu-item index="2-4-3">嵌入式</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3" disabled>展览馆</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">个人中心</a></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
// cao element-plus的submenu，是sub-menu，官方文档给错了，也不知道什么时候改的
// const shouye = () => import ('@/App.vue');
// const wode =() => import ('@/components/wode.vue');
// import App from '@/App.vue';
// import wode from '@/components/wode.vue';
// import { ElSubMenu } from 'element-plus';
export default {
    name: 'navigator',
    components: {
        // shouye,
        // // App,
        // wode
        // ElSubMenu
    },
    data() {
        return {
            activeIndex: '0'
        };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style lang="less">
.index-element-nav-bar {
    position: absolute;
    top: 0;
    width: 100%;
    
    .el-menu {
        justify-content: flex-end;
        background: rgba(255, 255, 255, 0.7);
    }

    .el-menu--horizontal {
        border-bottom: none;
    }
}

</style>