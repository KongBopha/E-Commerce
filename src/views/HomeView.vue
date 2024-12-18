<template>
    <main>
      <div class="container">
        <search-box/>
        <div class="menu-item">
          <menu-item/>
          <showcase/>
        </div>
        <div class="menu-content">
          <span> Features Categories</span>
          <menus :menuItems="store.groups"/>
        </div>
        <div class="category">
        <category
          v-for="(category, index) in categories"
          :key="index"
          :name="category.name"
          :productCount="category.productCount"
          :image="category.image"  
          :backgroundColor="category.color"
          :id="category.id"
        />
      </div>
      <div class="promotion">
        <promotion
          v-for="(promotion, index) in promotions"
          :key="index"
          :title="promotion.title"
          :image="promotion.image"
          :buttonText="'Shop Now'"
          :backgroundColor="promotion.color"
          :buttonColor="promotion.buttonColor"
        />
      </div>
      <div class="menu-content">
        <span>Popular Products</span>
        <menus :menuItems="store.groups"/>
      </div>
      <div class="product-store">
      <product/>
  </div>
      </div>
    </main>
    
  </template>    
<script setup>
  import { useProductStore } from '@/stores/productStore';
  import { onMounted, computed } from 'vue';
  import Category from '@/components/category.vue';
  import product from '@/components/product.vue';
  import menus from '@/components/menu_type.vue';
  import Promotion from '@/components/promotion.vue';
  import MenuItem from '@/components/MenuItem.vue';
  import SearchBox from '@/components/SearchBox.vue';
  import Showcase from '@/components/Showcase.vue';
  

// Access the store
const store = useProductStore();

// Fetch data on mount
onMounted(async () => {
  await store.fetchCategories();
  await store.fetchPromotions();
  await store.fetchProducts();
  await store.fetchGroups();
});

const categories = computed(() => store.categories);
const promotions = computed(() => store.promotions);
const products = computed(() => store.products);
const group = computed(() => store.groups);

</script>

  <style scoped>
  main {
    margin: 0 auto; 
    justify-content: center; 
    background-color: white;
  }
  .container{
    flex-direction: column;
  }
  .category {
    display: flex;
  }
  .promotion {
    display: flex;
     
    gap: 20px;
  }
  .menu-content{
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
  span{
    color:black ;
    font-weight: bold;
    font-size: large;

  }
  </style>