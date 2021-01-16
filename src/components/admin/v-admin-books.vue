<template>
  <div class="container-fluid">
    <v-navbar />
    <h1 class="mt-4">Книги у продажу</h1>
    <table class="table table-hover mt-3">
      <thead>
        <tr>
          <th scope="col">Назва</th>
          <th scope="col">Автор</th>
          <th scope="col">Ціна</th>
          <th scope="col">Дії</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.price }} грн.</td>
          <td>
            <b-button-group>
              <v-edit-book :Book="book" @update-booklist='fetchBooksFromAPI'/>
              <v-delete-book :Book="book" @book-deleted='onBookDeleted'/>
            </b-button-group>
          </td>
        </tr>
      </tbody>
    </table>
    <v-add-book @book-added='onBookAdded'/>
    <b-modal id="modal-deleted" size="sm" title="Видалено">
      <b-alert variant="danger" show>Запис успішно видалено.</b-alert>
      <b-alert variant="info" show>
        Якщо нічого не змінилося, перезавантажте сторінку.
      </b-alert>
      <template #modal-footer="{ok}" >
        <b-button variant="info" @click="ok()">Закрити</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import vNavbar from "@/components/navbar/v-navbar";
import VAddBook from "./v-add-book.vue";
import VEditBook from "./v-edit-book.vue";
import VDeleteBook from "./v-delete-book.vue";
import { path } from "@/scripts/api";
import axios from "axios";

export default {
  name: "v-admin-books",
  components: {
    vNavbar,
    VAddBook,
    VEditBook,
    VDeleteBook,
  },
  data() {
    return {
      showDeleted: false,
      books: [],
      addBookForm: {
        title: "",
        author: "",
        price: 0.0,
      },
    };
  },
  methods: {
    fetchBooksFromAPI() {
      //this.books = readBooks();
      axios
        .get(path)
        .then((res) => (this.books = res.data))
        .catch((error) => {
          console.error(error);
        });
      console.log(this.books);
    },
    onBookDeleted() {
      this.$bvModal.show('modal-deleted');
      this.fetchBooksFromAPI();
    },
    onBookAdded() {
      this.fetchBooksFromAPI();
    },

  },
  created() {
    this.fetchBooksFromAPI();
  },
};
</script>

<style>
</style>