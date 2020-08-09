import Vue from 'vue'
import VueRouter from 'vue-router'
import moviesRouter from "./movies"
import mineRouter from "./mine"
import cinemaRouter from "./cinema"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        moviesRouter,
        mineRouter,
        cinemaRouter
    ]
})

export default router