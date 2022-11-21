<template>
  <div>
    <p :id="id">
      <span> X: {{ x }}, Y: {{ y }}</span>
    </p>

    <div v-show="isVisible">
      <div
        class="mousebox"
        v-bind:class="{ mouseboxboder: isActive }"
        @mousemove="onMouseMove"
      ></div>
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
  isActive: boolean;
}

export default defineComponent({
  name: "MouseData",
  data(): ComponentData {
    return {
      id: "my-id",
      x: 12,
      y: 4,
      isVisible: true,
      isActive: true,
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
  watch: {
    x(newValue: number): void {
      if (newValue > 150) {
        alert("150");
      }
    },
    y(newValue: number, oldValue: number): void {
      if (newValue < oldValue && oldValue > 300) {
        alert("y over 300");
        this.y = 0;
      }
    },
  },
});
</script>

<style scoped>
.mousebox {
  height: 15em;
  width: 20em;
  background-color: white;
}
.mouseboxboder {
  border: 1px solid black;
}
</style>
