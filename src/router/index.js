import Vue from "vue"
import VueRouter from "vue-router"
import Layout from "@/layout/layout.vue"
Vue.use(VueRouter)
const routerMap = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/views/home/index"),
        name: "home",
        meta: { title: "Home", icon: "home", affix: true },
      },
    ],
  },
]

export default new VueRouter({
  routes: routerMap,
})
