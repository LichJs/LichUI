import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: 'h5kh', // process.env.BASE_URL,
  routes: [
    /**
     * 将根目录路由重定向到/index.htm路由上.
     */
    {
      path: '/',
      redirect: '/index.htm',
    },

    /**
     *  首页路由.
     */
    {
      path: '/index.htm',
      name: 'home',
      meta: { title: '开户引导页' },
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

router.beforeEach( (to, from, next) => {
  if ( to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
