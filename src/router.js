import Vue from 'vue';
import Router from 'vue-router';

import DetailView from './views/DetailView.vue';
import ListView from './views/ListView.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: ListView,
        details: DetailView,
        list: ListView,
      },
    },
    {
      path: '/:id',
      name: 'details',
      components: {
        default: ListView,
        details: DetailView,
        list: ListView,
      },
    },
  ],
});
