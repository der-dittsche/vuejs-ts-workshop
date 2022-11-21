<template>
  <div>
    <button @click="toggleClick">
      <span v-if="isVisible">Hide</span>
      <span v-else>Show</span>
    </button>

    <div v-show="isVisible" v-bind:class="{ box: isVisible, border: isActive }">
      <ul v-for="item in items" :key="item.id">
        <li>
          <div v-bind:class="{ red: isActive }">{{ item.header }}</div>
        </li>
        <li>
          <div v-bind:class="{ blue: isActive }">{{ item.text }}</div>
          <div v-bind:class="{ green: isActive }">{{ item.text }}</div>
        </li>
      </ul>
      <button @click="toggleColor">Color</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface ComponentData {
  isVisible: boolean;
  items: any;
  isActive: boolean;
}
export default defineComponent({
  name: "InfoBox",
  data(): ComponentData {
    return {
      isVisible: true,
      isActive: true,
      items: [
        {
          id: 1,
          header: "Artikel1",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, officia non pariatur dicta error odit officiis necessitatibus earum sed quaerat totam dolorum reiciendis nobis quam commodi tempora voluptatibus est adipisci",
        },
        {
          id: 2,
          header: "Artikel2",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, officia non pariatur dicta error odit officiis necessitatibus earum sed quaerat totam dolorum reiciendis nobis quam commodi tempora voluptatibus est adipisci",
        },
        {
          id: 3,
          header: "Artikel3",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, officia non pariatur dicta error odit officiis necessitatibus earum sed quaerat totam dolorum reiciendis nobis quam commodi tempora voluptatibus est adipisci",
        },
      ],
    };
  },
  methods: {
    toggleClick() {
      this.isVisible = !this.isVisible;
    },
    toggleColor(event) {
      this.isActive = !this.isActive;
    },
  },
});
</script>

<style scoped>
.box {
  display: inline-block;
  background-color: gray;
  border: 3px solid transparent;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.green {
  background-color: green;
}

.border {
  border: 3px solid black;
}
</style>
