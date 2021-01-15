<template>
  <div>
    <b-button variant="info" class="mt-2" v-b-modal.addBookModal
      >Додати нову книгу</b-button
    >

    <b-modal id="addBookModal" title="Додати книгу" ok-disabled cancel-disabled>
      <b-form-group
        id="bookTitleGroup"
        label="Найменування"
        label-for="bookTitle"
      >
        <b-form-input
          id="bookTitle"
          v-model="addBookForm.title"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="bookAuthorGroup" label="Автор" label-for="bookAuthor">
        <b-form-input
          id="bookAuthor"
          v-model="addBookForm.author"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="bookPriceGroup" label="Вартість" label-for="bookPrice">
        <b-form-input
          id="bookPrice"
          v-model="addBookForm.price"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="bookDescriptionGroup"
        label="Короткий опис"
        label-for="bookDescription"
      >
        <b-form-textarea
          id="bookDescription"
          v-model="addBookForm.description"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      addBookForm: {
        title: "",
        author: "",
        price: 0.0,
        description: "",
      },
    };
  },
  methods: {
    addBook() {
      const path = "http://localhost:8000/books";
      axios
        .post(path, this.addBookForm)
        .then((response) => alert(response.data));
    },
  },
};
</script>

<style>
</style>