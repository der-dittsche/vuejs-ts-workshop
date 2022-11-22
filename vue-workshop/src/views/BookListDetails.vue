<template>
  <div v-if="book">
    <h1>{{ book.title }}</h1>
    <p>{{ book.subtitle }}</p>
  </div>
</template>

<script lang="ts">
import type { Book } from "@/includes/type";
import { defineComponent } from "vue";

interface ComponentData {
  book: null | Book;
}

export default defineComponent({
  props: {
    isbn: {
      type: String,
      required: true,
    },
  },
  data(): ComponentData {
    return {
      book: null,
    };
  },
  watch: {
    isbn: {
      handler() {
        fetch("http://localhost:4730/books/" + this.isbn)
          .then((response) => response.json())
          .then((data) => (this.book = data));
      },
      immediate: true,
    },
  },
});
</script>

<style scoped></style>
