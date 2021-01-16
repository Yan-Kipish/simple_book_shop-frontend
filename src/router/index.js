import Vue from 'vue';
import Router from 'vue-router';
import VMain from '@/components/v-main';
import VAdminBooks from '@/components/admin/v-admin-books';
import VAbout from '@/components/v-about';
import VCart from '@/components/cart/v-cart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: VMain,
    },
    {
      path: '/admin',
      name: 'AdminBooks',
      component: VAdminBooks,
    },
    {
      path: '/about',
      name: 'About',
      component: VAbout,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: VCart,
    }
  ],
  mode: 'history',
});
