import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: ()=>import('../views/Home/'),
            redirect: {
                name: 'hot'
            },
            children: [
                {
                    path: '',
                    name: 'hot',
                    component: ()=>import('../views/Home/base/Hot.vue')
                }, {
                    path: 'dress',
                    name: 'dress',
                    component: ()=>import('../views/Home/base/Dress.vue')
                }, {
                    path: 'departmentstore',
                    name: 'departmentstore',
                    component: ()=> import('../views/Home/base/Departmentstore.vue')
                }, {
                    path: 'mom',
                    name: 'mom',
                    component: ()=> import('../views/Home/base/Mon.vue')
                }, {
                    path: 'phone',
                    name: 'phone',
                    component: ()=> import('../views/Home/base/Phone.vue')
                }, {
                    path: 'shoesag',
                    name: 'shoeBag',
                    component: ()=> import('../views/Home/base/ShoeBag.vue')
                }, {
                    path: 'appliance',
                    name: 'appliance',
                    component: ()=>import('../views/Home/base/Appliance.vue')
                }, {
                    path: 'food',
                    name: 'food',
                    component: ()=>import('../views/Home/base/food.vue')
                }, {
                    path: 'mixbox',
                    name: 'mixbox',
                    component: ()=>import('../views/Home/base/mixbox.vue')
                }, {
                    path: 'underwear',
                    name: 'underwear',
                    component: ()=>import('../views/Home/base/underwear.vue')
                }
            ]
        },
        {
            path: '/recomend',
            component: ()=>import('../views/Recomend/')
        },
        {
            path: '/search',
            component: ()=>import('../views/Search/')
        },
        {
            path: '/chat',
            component: ()=>import('../views/chat/')
        },
        {
            path: '/user',
            component: ()=>import('../views/User/')
        },
    ]
})