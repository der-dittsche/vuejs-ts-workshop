<template>
  <div class="mainc">
    <BookList />
  </div>
</template>

<script lang="ts">
import BookList from "@/components/BookList.vue";
import { defineComponent } from "vue";

interface ComponentData {}

export default defineComponent({
  name: "App",
  components: { BookList },
  data(): ComponentData {
    return {};
  },
});
</script>

<style>
.mainc {
  margin: 3em;
  padding-block: 3em;
  background-color: beige;
}
</style>
