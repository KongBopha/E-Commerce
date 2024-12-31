<template>
  <div class="menu-container">
    <h2>Menu</h2>
    <ul class="menu-list">
      <li v-for="section in sectionPages" :key="section.sectionNumber" class="menu-item">
        <router-link
          :to="{ name: 'sectionview', params: { id: section.sectionNumber } }"
          class="page-link"
        >
          {{ section.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionPages: [
        { sectionNumber: 1, title: "Section 1" },
        { sectionNumber: 2, title: "Section 2" },
        { sectionNumber: 3, title: "Section 3" },
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

.page-link {
  text-decoration: none;
  color: #e417ff;
  transition: color 0.3s;
}

.page-link:hover {
  color: #0056b3;
}
</style>
