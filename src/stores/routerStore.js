import { defineStore } from 'pinia';

export const useRouterStore = defineStore('routerStore', {
  state: () => ({
    previousRoute: null,
  }),
  actions: {
    setPreviousRoute(route) {
      this.previousRoute = route;
    },
  },
});
