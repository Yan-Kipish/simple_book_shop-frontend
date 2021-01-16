<template>
  <div class="container">
    <v-navbar />
    <!-- <v-book-list /> -->
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import vNavbar from '@/components/navbar/v-navbar';

export default {
  name: 'v-main',
  components: {
    vNavbar,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
