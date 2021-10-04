import { createWebHistory, createRouter } from "vue-router";

import MainPage from '../components/main_page/main_page.vue';
import CompanyPage from '../components/company_page/company_page.vue'
import JoinPage from "../components/join_page/join_page.vue";
import LoginPage from "../components/login_page/login_page.vue";

const routes = [
  { path: '/main', component: MainPage} ,
  { path: '/company', component: CompanyPage} ,
  { path: '/join', component: JoinPage} ,
  { path: '/login', component: LoginPage} ,

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router