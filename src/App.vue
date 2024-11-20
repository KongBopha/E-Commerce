<template>
  <main>
    <div class="category">
      <category
        v-for="(category, index) in categories"
        :key="index"
        :name="category.name"
        :productCount="category.productCount"
        :image="category.image"  
        :backgroundColor="category.color"
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
  </main>
</template>

<script>
import { onMounted } from 'vue';
import axios from "axios";
import category from "./components/category.vue";
import promotion from "./components/promotion.vue";
import { useProductStore } from './stores/productStore';

export default {
  name: 'App',
  components: {
    category,
    promotion,
  },
  data() {
    return {
      // categories: [],
      // promotions: [],
      currentGroupName: 'Group '
    };
  },
  setup() {
    const productStore = useProductStore();
    

    // Fetch data on mount
    onMounted(() => {
      productStore.fetchCategoried();
      productStore.fetchPromotions();
      productStore.fetchGroups();
      productStore.fetchProducts();
    });

    return {
      productStore,
    };
  },
  computed: {
  categories() {
    const productStore = useProductStore();
    return productStore.getCategoriesByGroup(this.currentGroupName);
  },
},

};
</script>
<style scoped>
main {
  margin: 0 auto; 
  justify-content: center; 
}
.category {
  display: flex;
}
.promotion {
  display: flex;
   
  gap: 20px;
}
</style>