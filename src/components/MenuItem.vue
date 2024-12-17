<template>
  <div class="navbar">
    <!-- Menu Section -->
    <div class="menu">
      <button class="menu-button">Browse All Categories</button>
      <div class="menu-items">
        <div v-for="menuItem in menuItems" :key="menuItem.name" class="menu-item">
          {{ menuItem.name }}
          <span v-if="menuItem.submenu" class="dropdown-arrow">&#9660;</span>
          <div v-if="menuItem.submenu" class="submenu">
            <div
              v-for="subItem in menuItem.submenu"
              :key="subItem"
              class="submenu-item"
            >
              {{ subItem }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Support Section -->
    <div class="support">
      <img src="/images/support_icon.png">
      <div class="support-item" style="display:flex ; flex-direction: column; width: 220px;">
        <strong>1900 - 8888</strong>
        <span style="color: gray; font-size: smaller;">24/7 Support Center</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: "Hot Deals" },
        { name: "Home" },
        { name: "Food", submenu: ["Vegetables", "Fruits", "Meat"] },
        { name: "Drinks" },
        { name: "Cookies" },
        { name: "Meat & Seafood", submenu: ["Chicken", "Fish", "Beef"] },
        { name: "Bakery" },
      ],
    };
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

.menu {
  display: flex;
  align-items: center;
  flex: 1;
}

.menu-button {
  padding: 10px 15px;
  background-color: #5dae49;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.menu-items {
  display: flex;
}

.menu-item {
  position: relative;
  margin: 0 15px;
  cursor: pointer;
  color: #333;
}

.menu-item:hover > .submenu {
  display: block;
}

.dropdown-arrow {
  margin-left: 5px;
  font-size: 12px;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.submenu-item {
  padding: 10px 15px;
  white-space: nowrap;
  cursor: pointer;
}

.submenu-item:hover {
  background-color: #f9f9f9;
}

.support {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
}

.support strong {
  font-size: 18px;
  color: #5dae49;
}
.support img{
  width: 100%;
  height: 30px;
  object-fit: contain;
  margin-right: -35px;
}
</style>
