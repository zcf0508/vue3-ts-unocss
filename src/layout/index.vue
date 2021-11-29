<template>
  <img class="mx-auto" alt="Vue logo" src="@/assets/logo.png" />
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/home" class="inline-block mr-8">
      <div class="inline-block align-middle mr-2">
        <home-icon class="h-4 w-4 m-0"></home-icon>
      </div>
      <span>Go to Home</span>
    </router-link>

    <router-link to="/about">
      <div class="inline-block align-middle mr-2">
        <light-bulb-icon class="h-4 w-4 m-0"></light-bulb-icon>
      </div>
      <span>Go to About</span></router-link
    >
  </p>
  <router-view></router-view>
</template>

<script lang="ts">
import { HomeIcon } from "@heroicons/vue/outline";
import { LightBulbIcon } from "@heroicons/vue/outline";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
  components: {
    HomeIcon,
    LightBulbIcon,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
