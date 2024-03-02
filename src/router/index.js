import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import store from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  store.dispatch("auth/checkUserToken");
  store.dispatch("user/checkUser");
  
  let token = localStorage.getItem("eva-hts-token");
  if (to.name !== "login" && !token) next("/login");

  if (to.name === "login" && token) next("/");

  next();
});

export default router;
