<template>
  <div class="load-container">
    <div class="load"></div>
    <div class="text">加载中Hurry...</div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.load-container .load {
  /* Loading方块 */
  width: 3.75rem;
  height: 3.75rem;
  background-color: #1e426e;
  margin: 3.125rem auto;
  animation: rotateplane 1s infinite ease-in-out;
}

.load-container .text {
  text-align: center;
}

@keyframes rotateplane {
  0% {
    transform: perspective(7.5rem) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(7.5rem) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(7.5rem) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>
