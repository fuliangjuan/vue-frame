import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = ()=>import('../views/Home/')
const Recomend = ()=>import('../views/Recomend/')
const Search = ()=>import('../views/Search/')
const Chat = ()=>import('../views/chat/')
const User = ()=>import('../views/User/')
const Hot = ()=>import('../views/Home/base/Hot.vue')
const Dress = ()=>import('../views/Home/base/Dress.vue')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            redirect: {
                name: 'hot'
            },
            children: [
                {
                    path: '',
                    name: 'hot',
                    component: Hot
                },
                {
                    path: '/home/dress',
                    name: 'dress',
                    component: Dress
                }
            ]
        },
        {
            path: '/recomend',
            component: Recomend
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/chat',
            component: Chat
        },
        {
            path: '/user',
            component: User
        },
    ]
})