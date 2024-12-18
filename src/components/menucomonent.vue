<template>
    <div class="menu-container">
      <h2>Menu</h2>
      <ul class="menu-list">
        <li v-for="section in sections" :key="section.id" class="menu-item">
          {{ section.title }}
        </li>
      </ul>
  
      <!-- Section Table
      <div class="table-section">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="table-row"
        >
          {{ section.title }}
        </div> -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sections: [
          { id: 1, title: "Section 1" },
          { id: 2, title: "Section 2" },
          { id: 3, title: "Section 3" },
          { id: 4, title: "Section 4" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .menu-container {
    border: 1px solid #ccc;
    width: 250px;
    padding: 5px;
    box-sizing: border-box;
    
  }
  
  .menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
    font-weight: bold;
    
  }
  
  .menu-item {
    padding: 10px;
    text-align: center;
  }
/*   
  .table-row {
    padding: 10px;
    text-align: center;
    border: 1px solid #ccc;
    background-color: #f8f8f8;
    font-weight: bold;
  }
  
  .table-row:hover {
    background-color: #e6e6e6;
    cursor: pointer; */

  </style>
  