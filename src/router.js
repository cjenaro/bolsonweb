import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Turismo from './views/Turismo.vue';
import Cultura from './views/Cultura.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/turismo',
      name: 'Turismo',
      component: Turismo,
    },
    {
      path: '/cultura',
      name: 'Cultura',
      component: Cultura,
    },
  ],
});
