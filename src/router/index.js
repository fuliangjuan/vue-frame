import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = ()=>import('../views/Home/')
const Recomend = ()=>import('../views/Recomend/')
const Search = ()=>import('../views/Search/')
const Chat = ()=>import('../views/chat/')
const User = ()=>import('../views/User/')
const Hot = ()=>import('../views/Home/base/Hot.vue')
const Dress =()=>import('../views/Home/base/Dress.vue')
const DepartmentStore = ()=> import('../views/Home/base/Departmentstore.vue')
const Mom = ()=> import('../views/Home/base/Mon.vue')
const Phone = ()=> import('../views/Home/base/Phone.vue')
const ShoeBag = ()=> import('../views/Home/base/ShoeBag.vue')
const Appliance = ()=>import('../views/Home/base/Appliance.vue')

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
                }, {
                    path: '/home/dress',
                    name: 'dress',
                    component: Dress
                }, {
                    path: 'departmentstore',
                    name: 'departmentstore',
                    component: DepartmentStore
                }, {
                    path: 'mom',
                    name: 'mom',
                    component: Mom
                }, {
                    path: 'phone',
                    name: 'phone',
                    component: Phone
                }, {
                    path: 'shoesag',
                    name: 'shoeBag',
                    component: ShoeBag
                }, {
                    path: 'appliance',
                    name: 'appliance',
                    component: Appliance
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