import HomePage from "@/views/HomePage.vue";
import PageView from "@/views/PageView.vue";
import SectionView from "@/views/SectionView.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
      redirect: "/pageview/1", 
      children: [
        {
          path: "pageview/:pagenumber",
          name: "pageview",
          component: PageView,
          children: [
            {
              path: "section/:id",
              name: "sectionview",
              component: SectionView,
            },
          ],
        },
      ],
    },
  ],
});

export default router;
