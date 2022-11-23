<template>
  <div>
    <form @submit.prevent="onSubmit" v-if="book">
      <label for="BookTitle">Title</label>
      <input
        type="text"
        v-model="book.title"
        name="BookTitle"
        id="BookTitle"
        placeholder="{{ book.title }}"
        @change="validateTitle"
      /><span v-if="errors.title">{{ errors.title }}</span>
      <label for="BookAuthor">Author</label>
      <input
        type="text"
        v-model="book.author"
        name="BookAuthor"
        id="BookAuthor"
        placeholder="{{ book.author }}"
        @change="validateAuthor"
      /><span v-if="errors.abstract">{{ errors.abstract }}</span>
      <label for="BookTAbstract">Info</label>
      <input
        type="text"
        v-model="book.abstract"
        name="BookAbstract"
        id="BookAbstract"
        placeholder="{{ book.abstract }}"
        @change="validateAbstract"
      /><span v-if="errors.author">{{ errors.author }}</span
      ><button type="submit" :disabled="isInvalid">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import type { Book } from "@/includes/type";
import { defineComponent } from "vue";
import { required, minLength } from "@/includes/validation";

interface ComponentData {
  book: null | Book;
  errors: {
    [P in keyof Partial<Book>]: string;
  };
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
      errors: {
        title: "",
        abstract: "",
        author: "",
      },
    };
  },
  computed: {
    isInvalid(): boolean {
      return Object.keys(this.errors).some(
        (val) => this.errors[val as keyof ComponentData["errors"]] !== ""
      );
    },
  },
  methods: {
    async onSubmit() {
      const response = await fetch("http://localhost:4730/books/" + this.isbn, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.book),
      });
      if (!response.ok) console.log(this.book);
    },
    validateTitle() {
      if (!required(this.book?.title ?? "")) {
        this.errors.title = "Title is required.";
      } else if (!minLength(this.book?.title ?? "", 5)) {
        this.errors.title = "The title must be at least 5 characters long.";
      } else {
        this.errors.title = "";
      }
    },
    validateAbstract() {
      if (!required(this.book?.abstract ?? "")) {
        this.errors.abstract = "Abstract is required.";
      } else if (!minLength(this.book?.abstract ?? "", 12)) {
        this.errors.abstract =
          "The abstract must be at least 12 characters long.";
      } else {
        this.errors.abstract = "";
      }
    },
    validateAuthor() {
      if (!required(this.book?.author ?? "")) {
        this.errors.author = "Author is required.";
      } else {
        this.errors.author = "";
      }
    },
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

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
button {
  margin-bottom: 1em;
}
</style>
