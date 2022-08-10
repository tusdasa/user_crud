import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import UserList from '../components/UserList.vue';
import UserForm from '../components/UserForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: UserView ,
    children: [
      {
        path:"list",
        name:"userList",
        component: UserList
      },
      {
        path:"new",
        name:"userNew",
        component: UserForm
      }
    ]
  },
  {
    path: '/palyer',
    name: 'palyer',
    component: () => import('../views/TcPlayerView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
