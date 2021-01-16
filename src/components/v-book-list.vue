<template>
  <div class="v-book-list container-fluid mt-3">
    <b-alert v-model="showDismissibleAlert" variant="warning" dismissible
      >Увага! Ви вже додали цю книгу до корзини.</b-alert
    >
    <b-card-group columns>
      <b-card
        v-for="book in BOOKS"
        :key="book.id"
        :title="book.title"
        :sub-title="book.author"
      >
        <b-card-text>{{ book.description }}</b-card-text>
        <span>
          <b-card-text>{{ book.price }} грн.</b-card-text>
          <b-button variant="info" @click="addToCart(book)">
            Додати до корзини
          </b-button>
        </span>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios";
import { path } from "@/scripts/api";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-book-list",
  data() {
    return {
      showDismissibleAlert: false,
    };
  },
  computed: {
    ...mapGetters(["BOOKS", "CART"]),
  },
  methods: {
    ...mapActions(["FETCH_BOOKS_FROM_API", "ADD_TO_CART"]),

    addToCart(book) {
      if (this.CART.includes(book)) {
        this.showDismissibleAlert = true;
      } else {
        this.ADD_TO_CART(book);
      }
    },
  },
  mounted() {
    this.FETCH_BOOKS_FROM_API();
  },
};
</script>

<style>
</style>
