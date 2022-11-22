<template>
  <div v-show="isVisible"></div>
  <div v-if="a"></div>
  <div v-else-if="b"></div>
  <div v-else=""></div>
  <div :about=""></div>
  <div @click="toggle"></div>
  <div v-html="<span></span>"></div>
  <div v-once="a"></div>
</template>

<script lang="ts">
interface ComponentData {
  a: string;
  b: string;
  isVisible: Boolean;
}

export default defineComponent({
  name: "HalloWelt",
  data(): ComponentData {
    return {
      a: "value",
      b: "value",
      isVisible: false,
    };
  },
  methods: {
    toggle() {
        isVisible = !isVisible,
    },
  },
  components: {
    New,
  },
});
</script>
