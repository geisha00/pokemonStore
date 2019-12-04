import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/login.vue'
import store from './store'
import logOut from './views/logOut.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        necesitaAuth: true,
      },

    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/logOut',
      name: 'logOut',
      component: logOut,
    },
    {
      path: '/detalle/:pokemon?',
      name: 'detalle',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Detalle.vue'),
      meta: {
        necesitaAuth: true,
      },

    }

  ]
});

router.beforeEach((to, from, next) => {
  console.log('[router]To:', to.meta, to.name);
  const estoyLogeado = store.state.auth.isLogged;
  console.log('estoy logeado');
  if (to.meta.necesitaAuth === true && !estoyLogeado) {
    next({ name: 'login' });
  } else {
    next();
  }
  //next();

});
export default router;