import {createRouter, createWebHashHistory} from 'vue-router'
import MainView from '../views/HomePage.vue'
import SignUpView from '../views/SignUpView.vue'
import ContactUs from "@/views/ContactUs";
import LogIn from "@/views/LogIn";
import AddPost from "@/views/AddPost";
import APost from "@/views/APost";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView,
    beforeEnter: async (to, from, next) => {
      let authResult = true //await auth.authenticated();
      if (!authResult) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/contact",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/apost/:id",
    name: "APost",
    component: APost,
    beforeEnter: async (to, from, next) => {
      let authResult = true//await auth.authenticated();
      if (!authResult) {
        next("/login");
      } else {
        next();
      }
    },
  },
    //Add a guard
  {
    path: "/addpost",
    name: "AddPost",
    component: AddPost,
    beforeEnter: async (to, from, next) => {
      let authResult = true;//await auth.authenticated();
      if (!authResult) {
        next("/login");
      } else {
        next();
      }
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
