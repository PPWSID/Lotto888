import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Toolbar from "../views/Toolbar.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
