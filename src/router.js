import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Accommodation from './views/Accommodation.vue';
import Activities from './views/Activities.vue';
import Information from './views/Information.vue';
import Food from './views/Food.vue';


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
      path: '/accommodation',
      name: 'Accommodation',
      component: Accommodation,
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities,
    },
    {
      path: '/info',
      name: 'Information',
      component: Information,
    },
    {
      path: '/food',
      name: 'Food',
      component: Food,
    },
  ],
});
