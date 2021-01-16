<template>
  <div class="container-fluid">
    <v-navbar />
    <b-card-group columns class="mt-3">
      <b-card
        v-for="(book, index) in books"
        :key="index"
        :title="book.title"
        :sub-title="book.author"
      >
        <span>
          <b-card-text>{{ book.price }} грн.</b-card-text>
          <b-button variant="danger">Видалити з корзини</b-button>
        </span>
      </b-card>
    </b-card-group>
    <span class="mt-2">Сума: {{cartTotalCost}} грн.</span>
  </div>
</template>

<script>
import vNavbar from "@/components/navbar/v-navbar";

export default {
  name: "v-cart",
  components: {
    vNavbar,
  },
  /* props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    },
  }, */
  computed: {
    cartTotalCost() {
      let result = []
      if (this.books.length) {
        for (let item of this.books) {
          result.push(item.price);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
          return result;
      } else {
        return 0;
      }
    }
  },
  data() {
    return {
      books: [
        {
          title: "Оформляндія або Прогулянка в Зону",
          author: "Маркіян Камиш",
          price: 146.0,
        },
        {
          title: "Культ",
          author: "Любко Дереш",
          price: 280.0,
        },
        {
          title: "Мифы древней Греции",
          author: "Эксмо",
          price: 139.99,
        },
      ],
    };
  },
};
</script>

<style>
</style>