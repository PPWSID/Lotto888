import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Toolbar from "../views/Toolbar.vue";
import RegisterView from "../views/RegisterView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "toolbar",
    component: Toolbar,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
    ],
  },
  {
    path: "/register",
    name: "user_register",
    component: RegisterView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
