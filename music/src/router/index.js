import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Manage from "@/views/Manage.vue"

const routes = [
  {
    name: 'home',
    path: "/",
    component: Home
  },
  {
    name: 'about',
    path: "/about",
    conponent: About
  },
  {
    name: 'manage',
    path: "/manage-music",
    beforeEnter: (to, from, next) => {
      console.log('Manage Route Guard');
      next();
    },
    component: Manage,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/manage',
    redirect: { name: 'manage' }
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
})

router.beforeEach((to, from, next) => {
  // console.log(to, from);
  console.log('this is coming from the global guard');
  console.log(to.meta);

  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  // now we check the store.

});
export default router
