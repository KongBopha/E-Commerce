import HomeView from '@/views/HomeView.vue'
import { useRouterStore } from '@/stores/routerStore';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/homeview'
  },
  {
    path: '/homeview',
    component: () => import("../views/HomeView.vue" ),
    name: 'Home'
  },
  {
    path: "/categories/:categoryId", 
    name: "category", 
    component: () => import("../views/CategoryView.vue"),
    props: true,  
  },
  {
    path: "/products/:productId",
    name: "product",
    component: () => import("../views/ProductView.vue"),
    props: true, 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  const routerStore = useRouterStore();
  routerStore.setPreviousRoute(from); 
  next();
});
export default router
