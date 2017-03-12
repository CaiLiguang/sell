import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  mode: 'history',
  routes: [
    {
      path: '/',
      component: pages('home')
    }
  ]
});

function pages(name) {
  return function(resolve) {
    require(['../pages/' + name + '/' + name + '.vue'], resolve);
  };
};