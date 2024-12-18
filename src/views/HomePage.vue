<template>
    <div class="homePage">
      <div class="header-section">
        <headercomponent />
      </div>
      <div class="page-content">
        <router-link
          v-for="page in pageNumbers"
          :key="page.number"                
          :to="{ name: 'pageview', params: { pagenumber: page.number } }"
          class="page-link"
        >
          {{ page.title }}
        </router-link>
      </div>
      <div class="current-page-view">
        <div class="menu-section">
            <Menucomonent/>
        </div>
        <div class="current-page"> </div>
        <router-view />
      </div>
      <div class="footer-section"> 
        <Footercomponent/>
      </div>
    </div>
  </template>
  
  <script>
  import Footercomponent from '@/components/footercomponent.vue';
import headercomponent from '@/components/headercomponent.vue';
import Menucomonent from '@/components/menucomonent.vue';
  
  export default {
    data() {
      return {
        pageNumbers: [
          { number: 1, title: "Page 1" },
          { number: 2, title: "Page 2" },
          { number: 3, title: "Page 3" },
        ],
      };
    },
    components: {
      headercomponent,
      Footercomponent,
      Menucomonent
    },
  };
  </script>
  
  <style scoped>
  .homePage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: auto;
    height: 70vh;

  }
  .header-section {
    font-size: 1.2rem;
    font-weight: bold;
    border: 1px solid #ccc;
    width: 700px;
    height: 10vh;
    position: relative;
  }
  .page-content {
    display: flex;
    position: absolute;
    gap: 15px;
    margin-bottom: 500px;
    margin-left: 400px;

  }
  .page-link {
    text-decoration: none;
    color: black;
    transition: color 0.3s ease;
  }
  .page-link:hover {
    color: rgb(248, 248, 248);
  }
  .current-page-view {
    font-size: 1.5rem;
    font-weight: bold;
    color: gray;
    display: flex;
    width: 700px;
    height: 40vh;
    border:1px solid white;

  }
  .menu-section{

  }
  ::v-deep(.router-link-active) {
    color: red;
    font-weight: bold;
  }
  .footer-section{
    border: 1px solid #ccc;
    width: 700px;
    height: 10vh;
  }
  </style>
  