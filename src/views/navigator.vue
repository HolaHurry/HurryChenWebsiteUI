<template>
  <div class="index-element-nav-bar">
    <el-menu
      :default-active="defaultActiveIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
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
      <el-menu-item index="3">展览馆</el-menu-item>
      <el-menu-item index="4">个人中心</el-menu-item>
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
import { routeMap as routeMapList } from "@/js/constants/routeMap.js";
export default {
  name: "navigator",
  components: {
    // shouye,
    // // App,
    // wode
    // ElSubMenu
  },
  data() {
    return {
      defaultActiveIndex: "0",
      activeIndex: "0",
    };
  },
  watch: {
    // '$route.path': {
    //     handler(newVal) {
    //         console.log(newVal);
    //     },
    //     deep: true
    // },
    activeIndex(newVal) {
      for (var each in routeMapList) {
        if (each === newVal) {
          this.$router.push({
            path: routeMapList[each],
            query: this.getQueryParam(),
          });
        }
      }
    },
  },
  methods: {
    // key是String类型
    handleSelect(key) {
      if (key.indexOf("-") !== -1) {
        if (routeMapList[key]) {
          window.open(routeMapList[key], "_blank");
        }
      } else {
        this.activeIndex = key;
      }
    },
    getQueryParam() {
      return {
        userId: "",
        timestamp: "",
      };
    },
  },
};
</script>

<style lang="less">
.index-element-nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  .el-menu {
    justify-content: flex-end;
    background: rgba(255, 255, 255, 0.7);
  }

  .el-menu--horizontal {
    border-bottom: none;
  }

  .el-menu-item {
    font-size: 1.25rem;
    font-weight: 900;
    padding: 1.25rem;
  }

  .el-menu-item.is-active,
  .el-menu-item:hover {
    // box-shadow: none;
    border-bottom: none;
    color: var(--color-primary) !important;
  }
  .el-menu-item.is-opened {
    border-radius: 0.3125rem;
  }
  // 带二级标题箭头的 以及标题字体样式
  .el-sub-menu__title {
    font-weight: 500;
    font-size: 1.125rem;
  }
  // 不带箭头的标题样式
  .el-menu-item {
    font-size: 1.125rem;
    font-weight: 500;
  }
}
</style>
