<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank"> Vetur </a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="plus">count is: {{ count }}</button>
  <p class="my-2">
    <input class="pl-2 border border-gray-100 appearance-none focus:outline-none" type="number" v-model="number" />
    <button class="ml-2 px-2 bg-green-500 text-white rounded" @click="add">ADD</button>
  </p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from "vue";
import { counterStore } from "@/store/count";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const data = reactive({
      number: 0,
    });
    const count = computed(() => counterStore.count);

    function plus() {
      counterStore.increment();
    }

    function add() {
      counterStore.add(Number(data.number));
    }

    return { ...toRefs(data), count, plus, add };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
