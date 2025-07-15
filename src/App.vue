<template>
  <div>
    <navigator></navigator>
    <router-view />
  </div>
</template>

<script>
import navigator from "./views/navigator.vue";
export default {
  name: "App",
  components: {
    navigator,
  },
};
</script>
<style></style>
