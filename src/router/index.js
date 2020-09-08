import Vue from "vue";
import VueRouter from "vue-router";
import desc from "../views/Desc.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/details",
    name: "details",
    components: desc
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
