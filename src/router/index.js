import Vue from 'vue';
import Router from 'vue-router';
import VMain from '@/components/v-main';
import VAdminBooks from '@/components/admin/v-admin-books';
import VAbout from '@/components/v-about';
import VCart from '@/components/cart/v-cart';
import VBookList from '@/components/v-book-list';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: VBookList,
    },
    {
      path: '/admin',
      name: 'admin-books',
      component: VAdminBooks,
    },
    {
      path: '/about',
      name: 'about',
      component: VAbout,
    },
    {
      path: '/cart',
      name: 'cart',
      component: VCart,
      props: true,
    }
  ],
  mode: 'history',
});
