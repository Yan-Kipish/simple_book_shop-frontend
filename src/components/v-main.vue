<template>
  <div class="container">
    <v-navbar />
    <v-book-list />
  </div>
</template>

<script>
/* eslint-disable */
import vNavbar from '@/components/navbar/v-navbar';
import vBookList from '@/components/v-book-list';

export default {
  name: 'v-main',
  components: {
    vNavbar,
    vBookList,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
