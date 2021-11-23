import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './components/stepOne/main.vue'
import stepTwo from './components/stepTwo/main.vue'

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        name:'home',
        component: home
    },
    {
        path: '/step2',
        name:'stepTwo',
        component: stepTwo
    }
]

export default new VueRouter({
    mode: "history",
    routes,
})