import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/a",
    name: "ListingA",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/ListingA.vue"),
  },
  {
    path: "/b",
    name: "ListingB",
    component: () =>
      import(/* webpackChunkName: "homeB" */ "../views/ListingB.vue"),
  },
  {
    path: "/c",
    name: "ListingC",
    component: () =>
      import(/* webpackChunkName: "homeC" */ "../views/ListingC.vue"),
  },
  {
    path: "/a/:id",
    name: "ProfileA",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/ProfileA.vue"),
  },
  {
    path: "/b/:id",
    name: "ProfileB",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profileB" */ "../views/ProfileB.vue"),
  },
  {
    path: "/c/:id",
    name: "ProfileC",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profileB" */ "../views/ProfileC.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
