<template>
  <div>
    <p :id="id">
      <span> X: {{ x }}, Y: {{ y }}</span>
    </p>

    <div v-show="isVisible">
      <div class="mousebox" @mousemove="onMouseMove"></div>
    </div>
    <button @click="toggleClick">
      <span v-if="isVisible">Hide</span>
      <span v-else>Show</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface ComponentData {
  id: string;
  x: number;
  y: number;
  isVisible: boolean;
}

export default defineComponent({
  name: "MouseData",
  data(): ComponentData {
    return {
      id: "my-id",
      x: 12,
      y: 4,
      isVisible: true,
    };
  },
  methods: {
    toggleClick() {
      this.isVisible = !this.isVisible;
    },
    onMouseMove(event: MouseEvent) {
      this.x = event.x;
      this.y = event.y;
    },
  },
});
</script>

<style>
.mousebox {
  height: 15em;
  width: 20em;
  border: 1px solid black;
  background-color: white;
}
</style>
