<template>
  <router-view></router-view>
</template>

<script lang="ts">
export default defineComponent({
  name: "App",
});
</script>

<style>
:root {
  --animate-duration: 0.75s !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
