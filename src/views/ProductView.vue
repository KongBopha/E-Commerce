<template>
    <div class="product-view">
     <div class="header-section">
        <SearchBox/>
        <menu-item/> 
        </div>
    <div class="product-container">
         <!-- Product Images Section -->
    <div class="product-images">
      <div class="main-image">
        <img v-if="currentImage" :src="currentImage" alt="Main Product Image" />
        <p v-else>No Image Available</p>
      </div>

      <!-- Thumbnails  -->
      <div class="variant-images">
        <img
          v-for="(image, index) in allImages"
          :key="index"
          :src="image"
          alt="Product Variant"
          @click="setCurrentImage(image)"
          class="variant-thumbnail"
        />
      </div>
    </div>
      <!-- Product Details -->
      <div class="product-details">
        <h1>{{ productName }}</h1>
        <p class="product-description">
        {{ productDescription }}
      </p>
        <div class="product-price">
          <span class="original-price" v-if="productPrice">
            Original Price: ${{ productPrice }}
          </span>
          <span class="discounted-price" v-if="discountedPrice">
            Discounted Price: ${{ discountPrice }}
          </span>
        </div>
        <div class="cart-section">
          <button @click="addToCart" class="add-to-cart">
            {{ toggleQuantity ? 'Cancel' : 'Add to Cart' }}
          </button>
          <div v-if="toggleQuantity" class="quantity-section">
            <button @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
            <span class="quantity">{{ quantity }}</span>
            <button
              @click="increaseQuantity"
              :disabled="quantity >= productStock"
            >
              +
            </button>
          </div>
  
          <p class="stock-info" v-if="productStock > 0">
            Available Stock: {{ productStock }}
          </p>
          <p class="out-of-stock" v-else>Out of Stock</p>
        </div>
      </div>
    </div>
</div>
  </template>
 <script setup>
 import { useRoute } from 'vue-router';
 import { ref, computed } from 'vue';
 import { useProductStore } from '@/stores/productStore';
 import SearchBox from '@/components/SearchBox.vue';
 import MenuItem from '@/components/MenuItem.vue';

 
 // Route and Store Setup
 const route = useRoute();
 const ProductStore = useProductStore();
 const productId = Number(route.params.productId);
 
 // Fetch product details
 const product = computed(() =>
   ProductStore.products.find((item) => item.id === productId)
 );
 
 const productName = computed(() => product.value?.name || 'Product Not Found');
 const productPrice = computed(() => product.value?.price || null);
 const productStock = computed(() => {
  const instock = product.value?.instock ?? 0;  
  const countSold = product.value?.countSold ?? 0;  
  return instock - countSold;
});

 // Static Descriptions Mapping
const productDescriptions = {
    1: 'Fresh and juicy mangoes, bursting with tropical flavor and perfect for summer enjoyment.',
    2: 'Golden corn on the cob, sweet and tender, ideal for grilling or boiling.',
    3: 'Fresh and tangy oranges, packed with vitamin C to boost your immune system.',
    4: 'Vibrant peppers, crisp and flavorful, perfect for adding a kick to your meals.',
    5: 'Zesty lemons, full of tartness, perfect for seasoning, drinks, and desserts.',
    6: 'Premium Waygu beef, known for its marbling and rich, tender texture.',
    7: 'Fresh tuna, packed with omega-3 fatty acids and perfect for sushi or grilling.',
    8: 'Juicy beef cuts, tender and flavorful, ideal for steaks or grilling.',
    9: 'Tender and juicy pork, perfect for a variety of delicious dishes.',
    10: 'Fresh garlic, aromatic and flavorful, essential for cooking and seasoning.'

};

// Get the product description based on productId
const productDescription = ref(productDescriptions[productId] || 'Description Not Available');

// Static Images Mapping
const staticImagesMap = {
    1: ['/proimages/mango.jpg', '/staticImages/mango1.jpg', '/staticImages/mango2.jpg'],
    2: ['/proimages/corn.jpg', '/staticImages/corn1.jpeg', '/staticImages/corn2.jpg'],
    3: ['/proimages/orange.jpg', '/staticImages/orange1.jpg', '/staticImages/orange2.jpg'],
    4: ['/proimages/pepper.png', '/staticImages/pepper2.jpg', '/staticImages/pepper1.png'],
    5: ['/proimages/lemon.png', '/staticImages/lemon1.png', '/staticImages/lemon2.jpg'],
    6: ['/proimages/waygu.png', '/staticImages/waygu1.jpg', '/staticImages/waygu2.jpg'],
    7: ['/proimages/tuna.jpg', '/staticImages/tuna1.jpg', '/staticImages/tuna2.jpg'],
    8: ['/proimages/beef.jpg', '/staticImages/beef1.jpg', '/staticImages/beef2.jpg'], 
    9: ['/proimages/pork.jpg', '/staticImages/pork1.jpg', '/staticImages/pork2.jpg'],
    10: ['/proimages/garlic.png', '/staticImages/garlic1.jpg', '/staticImages/garlic2.jpg']


};

// Use the  static image as the default  image
const allImages = ref(staticImagesMap[productId] || []);
const currentImage = ref(allImages.value[0]);

// Function to Update  Image on Thumbnail Click
const setCurrentImage = (image) => {
  currentImage.value = image;
};
 

 const discountPercent = ref(10);  
 const discountPrice = computed(() => {
   if (!productPrice.value || !discountPercent.value) return null;
   const discountAmount = (productPrice.value * discountPercent.value) / 100;
   return (productPrice.value - discountAmount).toFixed(2);
 });
 
 const quantity = ref(1);  
 const toggleQuantity = ref(false);  
  
 const increaseQuantity = () => {
   if (quantity.value < productStock.value) {
     quantity.value++;
   }
 };
 
 const decreaseQuantity = () => {
   if (quantity.value > 1) {
     quantity.value--;
   }
 };
 
 
 const addToCart = () => {
   toggleQuantity.value = !toggleQuantity.value;
   if (!toggleQuantity.value) {
     quantity.value = 1; 
   }
 };
 </script>
<style scoped>
.product-view{
    display: flex;
    flex-direction: column;
}
.header-section{
  text-align: start;
  margin-top: 20px;
  font-family: Arial, sans-serif;
  width: 1200px;
}
.product-container {
  display: flex;
  gap: 20px;
  padding: 50px;
  
}

.product-images {
  flex: 1;
  text-align: center;
}

.main-image img {
  width: 600px;
  height: 300px;  
  object-fit: cover; 
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
}

.variant-images {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.variant-thumbnail {
  width: 70px;
  height: 70px;  
  object-fit: cover;  
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s;
}

.variant-thumbnail:hover {
  transform: scale(1.1);
}

/* Product Details Section */
.product-details {
  flex: 1;
}

.product-details h1 {
  font-size: 24px;
  color: #333;
}

.product-description {
  margin-top: 10px;
  color: #666;
}

.product-price {
  font-size: 20px;
  color: #38a169;
  margin-top: 10px;
}

.add-to-cart {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #38a169;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #2f855a;
}
.quantity-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.quantity-section button {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background-color: #f7f7f7;
  cursor: pointer;
  border-radius: 5px;
}

.quantity-section button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.quantity {
  font-size: 16px;
  font-weight: bold;
}

.stock-info {
  margin-top: 10px;
  color: #38a169;
}

.out-of-stock {
  margin-top: 10px;
  color: #e53e3e;
}
</style>
