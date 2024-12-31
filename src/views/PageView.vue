
<template>
  <div class="page-view">
    <p>Welcome to Page {{ $route.params.pagenumber }}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.page-view {
  font-size: 2rem;
  color: #ffffff;
  margin-top: 20px;
  text-indent: 50px;

}
</style>

