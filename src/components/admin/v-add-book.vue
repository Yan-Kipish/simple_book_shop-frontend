<template>
  <div>
    <b-button 
      variant="info" 
      class="mt-2" 
      @click="initAddModal"
    >Додати нову книгу
    </b-button>

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
      <template #modal-footer v-if='!isAdded'>
        <b-button variant="success" @click="addBook">Зберегти</b-button>
      </template>
      <template #modal-footer="{ok}" v-else>
        <b-alert variant="success" show>Запис успішно додано</b-alert>
        <b-alert variant="info" show>
          Якщо нічого не змінилося, перезавантажте сторінку.
        </b-alert>
        <b-button variant="info" @click="ok()">Закрити</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {createBook} from '@/scripts/api'

export default {
  data() {
    return {
      isAdded: false,
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
      createBook(this.addBookForm);
      this.isAdded = true;
      this.$emit('book-added');
    },
    initAddModal() {
      this.addBookForm = {
        title: "",
        author: "",
        price: 0.0,
        description: "",
      };
      this.isAdded = false;
      this.$bvModal.show('addBookModal');
    }
  },
};
</script>

<style>
</style>