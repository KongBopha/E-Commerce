<script setup>
import { RouterView } from 'vue-router';
import category from './components/category.vue';
import promotion from './components/promotion.vue';

import hamImage from '@/assets/ham.png';
import peachImage from '@/assets/peach.png';
import kiwiImage from '@/assets/kiwi.png';
import appleImage from '@/assets/apple.png';
import snackImage from '@/assets/snack.png';
import plumImage from '@/assets/plum.png';
import tomatoImage from '@/assets/tomato.png';
import headphonesImage from '@/assets/headphones.png';
import coffeeImage from '@/assets/coffee.png';
import orangeImage from '@/assets/orange.png';
import onionImage from '@/assets/onion.png';
import strawImage from '@/assets/straw.png';
import oganicImage from '@/assets/oganic.png';

const categories = [
  { name: 'Coke & Milk', amount: '14 items', imageSrc: hamImage },
  { name: 'Peach', amount: '17 items', imageSrc: peachImage },
  { name: 'Organic Kiwi', amount: '21 items', imageSrc: kiwiImage },
  { name: 'Red Apple', amount: '68 items', imageSrc: appleImage },
  { name: 'Snack', amount: '34 items', imageSrc: snackImage },
  { name: 'Black Plum', amount: '25 items', imageSrc: plumImage },
  { name: 'Vegetables', amount: '65 items', imageSrc: tomatoImage },
  { name: 'Headphones', amount: '33 items', imageSrc: headphonesImage },
  { name: 'Cake & Milk', amount: '54 items', imageSrc: coffeeImage },
  { name: 'Orange', amount: '63 items', imageSrc: orangeImage },
];

const promotions = [
  {
    description: "Everyday Fresh & Clean with Our Products",
    btnText: "Show Now",
    imageSrc: onionImage,
  },
  {
    description: "Make your Breakfast Healthy and Easy",
    btnText: "Show Now",
    imageSrc: strawImage,
  },
  {
    description: "The best Organic Products Online",
    btnText: "Show Now",
    imageSrc: oganicImage,
  },
];

const colors_card = ['#D4FBD4', '#FFDDC1', '#D1E8E2', '#FFD3D3', '#FFF2C2',
                    '#F8E3FE', '#FAE2E2', '#FFF2C2', '#FFD3D3', '#FFF2C2'];

const colors_promo = ['#FFF2C2', '#FFD3D3', '#D1E8E2'];
const colors_btn = ['#04B94A', '#04B94A', '#F0C312'];
</script>

<template>
  <main>
    <div class="category">
      <category
        v-for="(category, index) in categories"
        :key="index"
        :imageSrc="category.imageSrc"
        :name="category.name"
        :amount="category.amount"
        :backgroundColor="colors_card[index % colors_card.length]"
      />
    </div>
    <div class="promotion">
      <promotion
        v-for="(promotion, index) in promotions"
        :key="index"
        :description="promotion.description"
        :imageSrc="promotion.imageSrc"
        :buttonText="promotion.btnText"
        :backgroundColor="colors_promo[index % colors_promo.length]"
        :buttonColor="colors_btn[index % colors_btn.length]"
      />
    </div>
  </main>
  <RouterView />
</template>

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
