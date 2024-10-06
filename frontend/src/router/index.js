import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Toolbar from "../views/Toolbar.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";
import SignInView from "../views/SignInView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import TaskView from "../views/TaskView.vue";

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
      {
        path: "/dashboard",
        name: "dashboard",
        component: HomeView,
      },
      {
        path: "/chat",
        name: "chat",
        component: HomeView,
      },
      {
        path: "/calendar",
        name: "calendar",
        component: HomeView,
      },
      {
        path: "/tasks",
        name: "tasks",
        component: TaskView,
      },
      {
        path: "/projects",
        name: "projects",
        component: ProjectsView,
      },
    ],
  },
  {
    path: "",
    name: "login",
    component: LoginView,
    children: [
      {
        path: "/signup",
        name: "login_signup",
        component: SignUpView,
      },
      {
        path: "/signin",
        name: "login_signin",
        component: SignInView,
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
