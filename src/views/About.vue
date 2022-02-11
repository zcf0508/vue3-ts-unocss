<template>
  <div class="animate__animated animate__fadeInUp">
    <HelloWorld msg="This is About" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "About",
  components: {
    HelloWorld,
  },
});
</script>
