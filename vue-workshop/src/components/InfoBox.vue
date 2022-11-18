<template>
  <div>
    <button @click="toggleClick">
      <span v-if="isVisible">Hide</span>
      <span v-else>Show</span>
    </button>
    <div v-show="isVisible">
      <ul v-for="item in items" :key="item.id">
        <li>{{ item.header }}</li>
        <li>{{ item.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface ComponentData {
  isVisible: boolean;
  items: any;
}
export default defineComponent({
  name: "InfoBox",
  data(): ComponentData {
    return {
      isVisible: true,
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
  },
});
</script>

<style scoped></style>
