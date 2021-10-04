<template>
  <body>
    <div class="row1">
      <div class="search">
        <input type="text" placeholder="검색어 입력" />
        <button>검색</button>
      </div>
    </div>
    <router-component></router-component>
  </body>
</template>

<script>
import RouterComponent from "./routers/router.vue";

export default {
  name: "App",
  components: {
    RouterComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@media screen and (max-width: 768) {
  .row2 {
    flex-direction: column;
  }
  .top-menu {
    flex-direction: column;
  }
  .ul a {
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
ul {
  list-style-type: none;
  float: left;
  justify-content: center;
  margin: 5px auto;
  padding: 0;
}
ul a {
  text-decoration: none;
  color: black;
  padding-right: 60px;
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  display: inline;
}
#Card_News {
  height: 80vh;
  background: whitesmoke;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.card {
  background: #fff;
  border-radius: 4px;
  display: inline-block;
  height: 300px;
  margin: 30px;
  width: 300px;
  border: 1px solid;
}

</style>
