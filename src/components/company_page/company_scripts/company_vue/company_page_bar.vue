<template>
  <div class="row2">
    <ul class="top-menu">
      <li><a class="menus">Home</a></li>
      <li><a class="menus">Company</a></li>
      <li><a class="menus">Mypage</a></li>
      <li><a class="menus">Logout</a></li>
    </ul>
  </div>
</template>

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
