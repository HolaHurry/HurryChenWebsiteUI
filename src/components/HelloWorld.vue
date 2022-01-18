<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Stay Hungry,<br>
      Stay Foolish.<br>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  color: #1E426E;
}
a {
  color: #42b983;
}
</style>
