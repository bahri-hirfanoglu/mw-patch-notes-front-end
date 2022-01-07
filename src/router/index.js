import Vue from "vue"
import VueRouter from "vue-router"

import PostCard from "../components/post/PostCard"
import PostDetail from "../components/post/PostDetail"
import Main from "../components/admin/Main"
import Login from "../components/admin/Login"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: "/", component: PostCard},
        {path: "/patch/:id", component: PostDetail},
        {path: "/login", component: Login},
        {path: "/admin", component: Main}
    ],
    mode: "history"
})