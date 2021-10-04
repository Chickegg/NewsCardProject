<template>
  <div class="row2">
    <ul class="top-menu">
      <router-link to="/main">Main</router-link>
      <router-link to="/company">Company</router-link>
      <router-link to="/join">Join</router-link>
      <router-link to="/login">Login</router-link>
    </ul>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router.js';
export default {
  router,
}
</script>
<style>
.row2 {
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
@media screen and (max-width: 768) {
  .row2 {
    flex-direction: column;
  }
  .top-menu {
    flex-direction: column;
  }
  .li {
    padding: 0px 30px;
  }
}
.top-menu {
  display: flex;
  color: white;
  float: left;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  justify-content: center;
}
  
</style>