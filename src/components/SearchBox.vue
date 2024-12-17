<template>
    <div class="navbar">
      <!-- Logo Section -->
      <div class="logo">
        <img src="/images/logo.png" alt="Logo">
        <span>Organic Mart & Grocery</span>
      </div>
  
      <!-- Search Box -->
      <div class="search-box">
        <select v-model="selectedCategory">
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
        <input v-model="searchQuery" type="text" placeholder="Search for items">
        <button @click="search"><i>&#128269;</i></button>
      </div>
  
      <!-- Icons Section -->
      <div class="icons">
        <div @click="goToAccount"><i>&#128100;</i>Account</div>
        <div @click="goToCompare"><i>&#128065;</i>Compare</div>
        <div @click="goToWishlist"><i>&#9825;</i>Wishlist</div>
        <div @click="goToCart"><i>&#128722;</i>Cart</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: "All Categories",
        searchQuery: "",
        categories: ["All Categories", "Fruits", "Vegetables", "Dairy"],
      };
    },
    methods: {
      search() {
        console.log(`Searching for: ${this.searchQuery} in ${this.selectedCategory}`);
      },
      goToAccount() {
        console.log("Navigating to Account");
      },
      goToCompare() {
        console.log("Navigating to Compare");
      },
      goToWishlist() {
        console.log("Navigating to Wishlist");
      },
      goToCart() {
        console.log("Navigating to Cart");
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
  
  .logo {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #5DAE49;
  }
  
  .logo img {
    height: 60px;
    width: 100%;
    object-fit: contain;
    margin-right: 10px;
  }
  
  .search-box {
    flex: 1;
    margin: 0 20px;
    display: flex;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .search-box select {
    border: none;
    padding: 10px;
    background-color: #f9f9f9;
  }
  
  .search-box input {
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
  }
  
  .search-box button {
    background-color: #5DAE49;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
  }
  
  .icons {
    display: flex;
    align-items: center;
  }
  
  .icons div {
    margin-left: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .icons div i {
    margin-right: 5px;
  }
  
  .icons div:hover {
    color: #5DAE49;
  }
  </style>
  