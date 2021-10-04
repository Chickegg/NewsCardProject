<template>
  <body>
    <company-page-search/>
    <company-page-bar/>
    <div id="company_page">
      <company-page-user-companys :UserCompanys="UserCompanys"></company-page-user-companys>
      <company-page-total-companys :companys="companys"></company-page-total-companys> 
    </div>
  </body>
</template>

<script src="./company_scripts/company.js"></script>

<style>
  body {
    width: 100%;
    height: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  ul {
    list-style-type: none;
    float: left;
    justify-content: center;
    margin: 5px auto;
    padding: 0;
  }
  li {
    text-decoration: none;
    color: black;
    padding-right: 60px;
    width: 150px;
    font-size: 15px;
    font-weight: bold;
    display: inline;
  }
</style>