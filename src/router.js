import Vue from "vue";
import VueRouter from "vue-router";
import About from "./views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/participant-info",
    name: "Info",
    component: () => import(/* webpackChunkName: "Info" */ "./views/Info.vue")
  },
  {
    path: "/scanner",
    name: "Scanner",
    component: () =>
      import(/* webpackChunkName: "Scanner" */ "./views/Scanner.vue")
  },
  {
    path: "/results",
    name: "Results",
    component: () =>
      import(/* webpackChunkName: "signIn" */ "./views/Results.vue")
  },
  {
    path: "*",
    name: "Default",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
