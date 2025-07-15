<template>
  <div class="content">
    <template v-for="(item, index) in contents" :key="index">
      <div class="content-title-place">
        <span class="title-span">{{ item.title }}</span>
        <span class="place-span">{{ item.place }}</span>
      </div>
    </template>
  </div>
  <button @click="getAttrs()">unknown function</button>
</template>

<script>
import exper_dl_json from "../../public/static/profile/exper_dl.json";
export default {
  name: "wode",
  data() {
    return {
      contents: [],
    };
  },
  created() {
    this.getContent();
  },
  mounted() {},
  methods: {
    getContent() {
      let json = JSON.parse(JSON.stringify(exper_dl_json));
      this.contents.push(json);
    },
    getAttrs() {
      console.log(this.$attrs["tit"]);
    },
  },
};
</script>

<style scoped>
.content-title-place {
  width: auto;
  display: flex;
  justify-content: space-between;
}
.title-span {
  padding: 0.625rem;
  padding-left: 1.25rem;
}
.place-span {
  padding: 0.625rem;
  padding-right: 1.25rem;
}
</style>
