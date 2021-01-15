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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(book, index) in books" :key="index">
              <td>{{ book.title }}</td>
              <td>{{ book.author }}</td>
              <td>{{ book.price }} грн.</td>
              <td>
                <b-button-group>
                  <b-button variant="warning">Редагувати</b-button>
                  <b-button variant="danger">Видалити</b-button>
                </b-button-group>
              </td>
            </tr>
          </tbody>
    </table>
    <b-button variant="info" class="mt-2">Додати нову книгу</b-button>
  </div>
</template>

<script>
import vNavbar from '@/components/navbar/v-navbar';

export default {
  name: "v-admin-books",
  components: {
    vNavbar,
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
      addBookForm: {
        title: "",
        author: "",
        price: 0.0,
      },
    };
  },
};
</script>

<style>
</style>