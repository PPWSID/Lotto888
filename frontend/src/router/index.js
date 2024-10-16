import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Toolbar from "../views/Toolbar.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/Login/SignUpView.vue";
import SignInView from "../views/Login/SignInView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import TaskView from "../views/TaskView.vue";
import Swal from "sweetalert2";

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
        meta: { requiresAuth: true },
      },
      {
        path: "/projects",
        name: "projects",
        component: ProjectsView,
        meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
  // check if route requires auth
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      // proceed to the route
      next();
    } else {
      // redirect to login
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to login first!",
        confirmButtonText: "OK",
      }).then(() => {
        next({ name: "login_signin" });
      });
    }
  } else {
    next();
  }
});

export default router;
