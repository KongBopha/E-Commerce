<template>
  <div class="homePage">
    <div class="header-section">
      <headercomponent />
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
    </div>
    <div class="current-page-view">
      <div class="menu-section">
        <!-- SectionMenu Component -->
        <SectionMenu />
      </div>

      <div class="page-main-content">
        <!-- Main Page Content -->
        <router-view />

        <div class="input-section">
          <label>Page message</label>
          <input
            v-model="currentMessage"
            placeholder="Input your message here..."
            @keyup.enter="submitMessage"
            class="message-input"
          />
        </div>

        <div class="message-history">
          <!-- Display previous messages -->
          <div v-for="page in getPreviousPages" :key="page">
            <p v-if="messages[page]">{{ messages[page] }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-section">
      <Footercomponent />
    </div>
  </div>
</template>

<script>
import Footercomponent from "@/components/footercomponent.vue";
import headercomponent from "@/components/headercomponent.vue";
import SectionMenu from "@/components/menucomponent.vue";  

export default {
  data() {
    return {
      pageNumbers: [
        { number: 1, title: "Page 1" },
        { number: 2, title: "Page 2" },
        { number: 3, title: "Page 3" },
      ],
      messages: {},  
      currentMessage: "",  
      currentPage: null, 
    };
  },
  computed: {
    getPreviousPages() {
      const pages = [];
      for (let i = 1; i <= this.currentPage; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  components: {
    headercomponent,
    Footercomponent,
    SectionMenu,  
  },
  watch: {
    
    $route(to) {
      this.updateCurrentPage(Number(to.params.pagenumber));
    },
  },
  mounted() {
    
    this.updateCurrentPage(Number(this.$route.params.pagenumber));
  },
  methods: {
     
    updateCurrentPage(pagenumber) {
      this.currentPage = pagenumber;
      this.currentMessage = this.messages[this.currentPage] || "";
    },
    submitMessage() {

      if (this.currentMessage.trim()) {
        this.messages[this.currentPage] = `This message is from page ${this.currentPage}: ${this.currentMessage.trim()}`;
        this.currentMessage = "";  
      }
    },
  },
};
</script>

<style scoped>
.homePage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 80vh;
  background-color: rgb(61, 96, 111);
}

.header-section {
  font-size: 1.2rem;
  font-weight: bold;
  border: 1px solid #ccc;
  width: 800px;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.page-link {
  text-decoration: none;
  color: aliceblue;
  transition: color 0.3s ease;
  
}

.page-link:hover {
  color: rgb(248, 248, 248);
}

.current-page-view {
  display: flex;
  width: 800px;
  height: auto;
  border: 1px solid white;
}

.menu-section {
  width: 250px;
  border-right: 1px solid #ccc;
}

.page-main-content {
  flex: 1;
  padding: 20px;
}

.message-input {
   
  padding: 10px;
  width: 50%;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  margin-left: 70px;
}

.message-input:focus {
  outline: none;
  border-color: #3498db;
}

.message-history {
  margin-top: 20px;
}

.message-history p {
  color: #fff;
  background-color: #333;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
}
::v-deep(.router-link-active) {
    color: rgb(255, 206, 99);
    font-weight: bold;
  }

.footer-section {
  border: 1px solid #ccc;
  width: 800px;
  height: 10vh;
}
</style>
