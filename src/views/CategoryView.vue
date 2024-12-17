<template>
  <div class="category-view">
    <SearchBox />
    <menu-item />
    <div class="content">
      <h1>{{ categoryName }}</h1>
    <div class="route-content">
      <p v-if="previousRouteName">{{ previousRouteName }} ></p>
      <p>{{ route.name }}  ></p>
    <p v-if="categoryName">{{ categoryName }}</p>
    <p v-else>Category Not Found!</p>
    </div>
  </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useProductStore } from '@/stores/productStore';
import { useRouterStore } from '@/stores/routerStore';
import MenuItem from '@/components/MenuItem.vue';
import SearchBox from '@/components/SearchBox.vue';

const route = useRoute();
const ProductStore = useProductStore();
const routerStore = useRouterStore();

const categoryId = route.params.categoryId;

const categoryName = computed(() => {
  const category = ProductStore.categories.find((cat) => cat.id === Number(categoryId));
  return category ? category.name : null;
});

 
const previousRouteName = computed(() => {
  return routerStore.previousRoute?.name || 'No Previous Page';
});
</script>

<style scoped>
.category-view {
  text-align: start;
  margin-top: 20px;
  font-family: Arial, sans-serif;
  width: 1200px;
  height: 100vh;
}
.content{
  height: 20vh;
  background-color: #faf7e1; 
  border-radius: 10px;
  border: 1px solid rgb(155, 155, 155);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding-top: 30px;
}
h1 {
  color: black;
  font-size: 40px;
  font-family: monospace;
  padding-left: 50px;
}
p{
  color:gray;
  font-family: cursive;
}
.route-content{
  display: flex;
  justify-content: start;
  gap: 10px;
  padding-left: 40px;
}

</style>
