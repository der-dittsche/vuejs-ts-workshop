```vue
<template>
  <div v-bind></div>
  <div v-on></div>
  <div v-if></div>
  <div v-else></div>
  <div v-if-else></div>
  <div v-html></div>
  <div @click></div>
  <div v-once></div>
  <div v-show></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface ComponentData {
  a: string;
  b: string;
}

export default defineComponent({
  name: "Hallo",
  data(): ComponentData {
    return {
      a: "a",
      b: "b",
    };
  },
  methods: {},
  components: {
    New,
  },
});
</script>
