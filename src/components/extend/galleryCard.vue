<template>
  <div class="gallery-card-border">
    <button @click="getAttrs()">bbbb</button>
    <wode v-bind="$attrs"></wode>
  </div>
</template>

<script>
import wode from "../wode.vue";
export default {
  name: "galleryCard",
  components: {
    wode,
  },
  data() {
    return {};
  },
  created() {},
  // 给组件传递的数据，组件不使用props接收，
  // 那么这些数据将作为子组件的HTML元素的特性，这些特性绑定在子组件的HTML根元素上
  // props: {
  //     tit: String
  // },
  methods: {
    getAttrs() {
      console.log(this.tit);
      console.log(this.$attrs["tit"]);
    },
  },
};
</script>
<style lang="less">
.gallery-card-border {
  border-radius: 0.3125rem;
  width: 100%;
  height: 18.75rem;
  margin: 1.25rem 6.25rem;
  background-color: #e6f2fc;
  box-shadow: 0rem 0rem 0.3125rem #d4e3ea;
}

.gallery-card-border:hover {
  box-shadow: 0rem 0rem 0.625rem #99d3ee;
}
</style>
