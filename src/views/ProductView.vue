<template>
    <div class="Product-details">
        <div class="img-product">
            <div class="big-img">
              
            </div>
        </div>
        <div class="small-img">
        </div>
        <div class="product-info"></div>
        <h1 v-if="productName"> {{productName}}</h1>
        <h1 v-else>Product Not Found!</h1>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useProductStore } from '@/stores/productStore';

const route = useRoute();
const ProductStore = useProductStore();


const productId = route.params.productId;  


const productName = computed(()=>{
    const product = ProductStore.products.find(cat => cat.id=== Number(productId)); 
    return product ? product.name : null;
});
</script>

<style scoped>
.img-product{
    width: 70px;
    height: 40vh;
    object-fit: contain;

}
h1{
    color: black;
    font-size: larger;
    font-weight: bolder;
}
</style>