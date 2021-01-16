<template>
  <div class="v-navbar">
    <b-navbar toggleable="lg" 
              type="dark" 
              variant="info"
              sticky>
      <b-navbar-brand>Simple Book Shop</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-nav>
        <b-nav-item href="/about">Про нас</b-nav-item>
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{name: 'cart', params: {cart_data: CART}}">
            Корзина({{CART.length}})
          </b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Користувач</em>
            </template>
            <b-dropdown-item href="#" v-if="isAuthorized">Адмін-панель</b-dropdown-item>
            <b-dropdown-item href="#">Профіль</b-dropdown-item>
            <b-dropdown-item href="#">Вихід</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
/* eslint-disable */
import {mapGetters} from 'vuex';

export default {
  name: 'v-navbar',
  props: {
    
  },
  data() {
    return {
      isAuthorized: false,
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style>
</style>
