<template>
  <div class="v-book-list container-fluid">
    <b-card-group columns>
      <b-card v-for="(book, index) in books" :key="index"
              :title="book.title"
              :sub-title="book.author">
        <b-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corporis tenetur, repellendus eligendi, atque quidem voluptate repellat sint laudantium animi pariatur! Accusamus, quibusdam! Vero et deleniti dolorem tempore, necessitatibus esse?
        </b-card-text>
        <span>
          <b-card-text>{{book.price}} грн.</b-card-text>
          <b-button variant="info">Додати до корзини</b-button>
        </span>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'v-book-list',
  data() {
    return {
      isAdmin: true,
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
      addBookForm: {
        title: "",
        author: "",
        price: 0.0,
      },
      message: "",
      showMessage: false,
    };
  },
  components: {},
  methods: {
    getBooks() {
      const path = "http://localhost:8000/books";
      axios
        .get(path)
        .then((res) => {
          this.books = res.data.books;
        })
        .catch((error) => {
          // eslint-отключение следующей строки
          console.error(error);
        });
    },
  },
  created() {
    //this.getBooks();
  },
};
</script>

<style scoped>
.v-book-list {
  margin-top: 15px;
}

</style>
