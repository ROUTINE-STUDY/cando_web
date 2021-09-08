import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import DiaryList from './DiaryList';
import DiaryPost from './DiaryPost';
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
      path: '/diary/list',
      component: DiaryList
    },
    {
      path: '/diary/post',
      component: DiaryPost
    },
    {
      path: '/about',
      component: About
    }
  ]
});