import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import About from './About';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/about',
      component: About
    }
  ]
});