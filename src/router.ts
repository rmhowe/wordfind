import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import Puzzle from './views/Puzzle.vue';
import Settings from './views/Settings.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'puzzle',
      path: '/puzzles/:id',
      component: Puzzle,
      props: true
    },
    {
      name: 'settings',
      path: '/settings',
      component: Settings
    }
  ]
});
