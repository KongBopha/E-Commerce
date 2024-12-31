<template>
  <div class="section-view">
    <p>{{ sectionTitle }}</p>
    <div>
      <label>Section message</label>
      <input
        v-model="currentMessage"
        placeholder="Input your message here..."
        @keyup.enter="submitMessage"
        class="message-input"
      />
      
    </div>
    <div class="message-history">
      <p v-for="(message, index) in messageHistory" :key="index">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionTitle: "",
      currentMessage: "",
      messageHistory: [],
    };
  },
  watch: {
    $route(to) {
      this.loadSection(Number(to.params.id));
    },
  },
  mounted() {
    this.loadSection(Number(this.$route.params.id));
  },
  methods: {
    loadSection(id) {
      this.sectionTitle = `Section ${id}`;
      this.messageHistory = [];  
    },
    submitMessage() {
      if (this.currentMessage.trim()) {
        this.messageHistory.push(`This message is from ${this.sectionTitle}: ${this.currentMessage}`);
        this.currentMessage = "";
      }
    },
  },
};
</script>

<style scoped>
.section-view {
  padding: 20px;
}

.message-input {
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: 10px;
}
label{
  font-size:  40%;
  color: #ccc;
 
}

.message-history {
  margin-top: 20px;
}
</style>
