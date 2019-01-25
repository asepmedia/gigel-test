import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
Vue.use(VueRouter)

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

import UpdateProfile from './pages/UpdateProfile'
import UpdatePassword from './pages/UpdatePassword'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {requiresAuth: true}
    },
    {
      path: '/profile/update',
      name: 'UpdateProfile',
      component: UpdateProfile,
      meta: {requiresAuth: true}
    },
    {
      path: '/profile/password',
      name: 'UpdatePassword',
      component: UpdatePassword,
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
});
router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  var token = localStorage.getItem('token')
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!token) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath,
          },
        });
      } else {
        next();
      }
      setTimeout(function() {
        store.commit('setLoading', false)
      }, 500)
    } else {
      next(); 
      if (token) {
        if(to.name == 'Login') {
          next({
            path: '/'
          });
        } else {
          next();
        }
      } else {
        next();
      }
      setTimeout(function() {
        store.commit('setLoading', false)
      }, 500)      
    }
  })
export default router