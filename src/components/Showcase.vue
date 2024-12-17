<template>
    <div class="showcase">
      <div class="showcase-content">
        <h1>Don't miss amazing grocery deals</h1>
        <p>Sign up for the daily newsletter</p>
        <form @submit.prevent="subscribe">
          <input 
            type="email" 
            v-model="email" 
            placeholder="Your email address" 
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div class="showcase-image">
        <img src="/images/home.png" alt="Grocery deals" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ShowcaseComponent",
    data() {
      return {
        email: "",
      };
    },
    methods: {
      subscribe() {
        alert(`Subscribed with email: ${this.email}`);
        this.email = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .showcase {
    display: flex;
    height: 50vh;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #faf7e1; 
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .showcase-content {
    max-width: 100%;
    height: auto;
  }
  
  .showcase-content h1 {
    font-size: 2.8rem;
    margin-bottom: 10px;
    color: #333;
    width: 450px;
    font-weight: bold;
    font-family: cursive;
  }
  
  .showcase-content p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #555;  
  }
  
  .showcase-content form {
    display: flex;
    gap: 10px;
  }
  
  .showcase-content input {
    flex: 1;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .showcase-content button {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #28a745; /* Green */
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .showcase-content button:hover {
    background-color: #218838;
  }
  
  .showcase-image img {
    width: 40%;
    height: 100%;
    border-radius: 10px;
    margin-left: 500px;

  }
  </style>
  