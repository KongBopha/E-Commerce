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
import axios from "axios";
import category from "./components/category.vue";
import promotion from "./components/promotion.vue";

export default {
  components: {
    category,
    promotion,
  },
  data() {
    return {
      categories: [],
      promotions: [],
    };
  },
  mounted() {
    this.fetchCategories();
    this.fetchPromotions();
  },
  methods: {
    fetchCategories() {
      axios
        .get("http://localhost:3000/api/categories")
        .then((result) => {
          this.categories = result.data;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    fetchPromotions() {
      axios
        .get("http://localhost:3000/api/promotions")
        .then((result) => {
          this.promotions = result.data;
        })
        .catch((error) => {
          console.error("Error fetching promotions:", error);
        });
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
