<template>
  <div>
    <b-button
      variant="warning"
      @click="initEditModal"
    >
      Редагувати
    </b-button>

    <b-modal
      :id="'editBookModal-' + String(Book.id)"
      title="Редагувати книгу"
      ok-disabled
      cancel-disabled
      @hidden="reset"
    >
      <b-form-group
        id="bookTitleGroup"
        label="Найменування"
        label-for="bookTitle"
      >
        <b-form-input
          id="bookTitle"
          v-model="cachedBook.title"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="bookAuthorGroup" label="Автор" label-for="bookAuthor">
        <b-form-input
          id="bookAuthor"
          v-model="cachedBook.author"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="bookPriceGroup" label="Вартість" label-for="bookPrice">
        <b-form-input
          id="bookPrice"
          v-model="cachedBook.price"
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
          v-model="cachedBook.description"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <template #modal-footer v-if="!isSaveSuccess">
          <b-button variant="secondary" @click="reset">Скинути</b-button>
          <b-button variant="warning" @click="save">Зберегти</b-button>
      </template>
      <template #modal-footer="{ok}" v-else>
        <b-alert variant="success" show>
          Запис успішно оновлено на сервері.
        </b-alert>
        <b-alert variant="info" show>
          Якщо нічого не змінилося, перезавантажте сторінку.
        </b-alert>
        <b-button variant="info" @click="ok()">Закрити</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {updateBook} from '@/scripts/api'

export default {
  name: "v-edit-book",
  props: {
    Book: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isSaveSuccess: false,
      cachedBook: { ...this.Book },
    };
  },
  methods: {
    save() {
      updateBook(this.cachedBook);
      this.isSaveSuccess = true;
      this.$emit('update-booklist');
    },
    reset() {
      this.cachedBook = { ...this.Book };
    },
    initEditModal() {
      this.isSaveSuccess = false;
      this.$bvModal.show('editBookModal-' + String(this.Book.id))
    }
  },
};
</script>

<style>
</style>
