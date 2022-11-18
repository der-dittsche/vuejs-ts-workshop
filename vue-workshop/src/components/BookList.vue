<template>
  <div>
    <button @click="sorted = true">Sort</button>
    <table>
      <tr v-for="book in sorted ? sortedBooks : filterBook" :key="book.id">
        <td>{{ book.title }}</td>
        <td>{{ book.subtitle }}</td>
        <td>{{ book.isbn }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.publisher }}</td>
        <td>{{ book.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface book {
  id: number;
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: string;
  price: string;
  cover: string;
}

interface ComponentData {
  books: book[];
  pattern: string;
  sort: "asc" | "desc";
  sorted: boolean;
}

export default defineComponent({
  data(): ComponentData {
    return {
      books: [
        {
          id: 1,
          title: "Refactoring",
          subtitle: "Improving the Design of Existing Code, 2nd Edition",
          isbn: "978-0-13-475759-9",
          abstract: "",
          numPages: 448,
          author: "Martin Fowler",
          publisher: "Addison-Wesley Professional",
          price: "$59.99",
          cover:
            "https://www.informit.com/ShowCover.aspx?isbn=9780134757599&type=f",
        },
        {
          id: 2,
          title: "Schwobeling",
          subtitle: "The spinach with the Blub",
          isbn: "978-0-14-475759-9",
          abstract: "",
          numPages: 448,
          author: "Verona Feldbusch",
          publisher: "Dieter Bohlen",
          price: "$0.00",
          cover: "",
        },
        {
          id: 3,
          title: "A",
          subtitle: "An other Book",
          isbn: "978-0-14-434759-9",
          abstract: "",
          numPages: 448,
          author: "Anyone",
          publisher: "Someone",
          price: "$0.00",
          cover: "",
        },
        {
          id: 4,
          title: "X",
          subtitle: "X other Book",
          isbn: "978-0-14-475659-9",
          abstract: "",
          numPages: 448,
          author: "Anyone",
          publisher: "Someone",
          price: "$0.00",
          cover: "",
        },
      ],
      pattern: "",
      sort: "asc",
      sorted: false,
    };
  },
  computed: {
    filterBook(): book[] {
      return this.books.filter((book) => {
        return book.title.includes(this.pattern);
      });
    },
    sortedBooks(): book[] {
      const books = [...this.filterBook];
      books.sort((a, b) => {
        if (this.sort == "asc") {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      });
      return books;
    },
  },
});
</script>

<style>
table {
  margin-block: 3em;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}
</style>
