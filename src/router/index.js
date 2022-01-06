import Vue from "vue"
import VueRouter from "vue-router"

import PostCard from "../components/post/PostCard"
import PostDetail from "../components/post/PostDetail"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: "/", component: PostCard},
        {path: "/:id", component: PostDetail}
    ],
    mode: "history"
})