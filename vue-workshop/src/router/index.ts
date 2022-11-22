import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import BookListDetails from "@/views/BookListDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/books",
  },
  {
    path: "/books",
    name: "books",
    component: HomeView,
  },
  {
    path: "/books/:isbn",
    name: "booksdetails",
    component: BookListDetails,
    props: true,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
