import Vue from 'vue';
import Router from 'vue-router';
import VMain from '@/components/v-main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: VMain,
    },
  ],
  mode: 'history',
});
