<template>
  <div class="container-fluid">
    <div v-if="cart_data.length">
      <b-card-group columns class="mt-3">
        <b-card
          v-for="(book, index) in cart_data"
          :key="index"
          :title="book.title"
          :sub-title="book.author"
        >
          <span>
            <b-card-text>{{ book.price }} грн.</b-card-text>
            <b-button variant="danger" @click="deleteFromCart(index)">Видалити з корзини</b-button>
          </span>
        </b-card>
      </b-card-group>
      <span class="mt-2">Сума: {{CART_TOTAL}} грн.</span>
    </div>
    <div class="container mt-2" v-else>
      <h1>Корзина поки порожня =)</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "v-cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    ...mapGetters(["CART_TOTAL"]),
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>