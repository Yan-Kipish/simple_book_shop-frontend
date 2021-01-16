<template>
  <div class="v-book-list container-fluid mt-3">
    <b-card-group columns>
      <b-card v-for="book in books" :key="book.id"
              :title="book.title"
              :sub-title="book.author">
        <b-card-text>{{book.description}}</b-card-text>
        <span>
          <b-card-text>{{book.price}} грн.</b-card-text>
          <b-button variant="info">Додати до корзини</b-button>
        </span>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from 'axios';
import {path} from '@/scripts/api';

export default {
  name: 'v-book-list',
  data() {
    return {
      books: [],
    };
  },
  components: {},
  methods: {
    getBooks() {
      axios
        .get(path)
        .then((res) => { this.books = res.data; })
        .catch((error) => { console.error(error); });
    },
  },
  created() {
    this.getBooks();
  },
};
</script>

<style>

</style>
