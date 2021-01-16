<template>
  <div>
    <b-button variant="danger" @click="showDeleteDialog">Видалити</b-button>
  </div>
</template>

<script>
import {deleteBook} from '@/scripts/api'

export default {
  name: "v-delete-book",
  props: {
    Book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    showDeleteDialog() {
      this.$bvModal.msgBoxConfirm('Ви впевнені у видаленні цієї книги?', {
        title: 'Підтвердження видалення',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'Так',
        cancelTitle: 'Ні',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          if(value) {
            this.deleteBook(); 
            this.$emit('book-deleted');
          }
        })
        .catch(err => {console.log(err);});
    },
    deleteBook() {
      deleteBook(this.Book);
    },
  },
};
</script>

<style>
</style>
