import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue'
import Login from '../pages/LoginPage.vue'
import Register from '../pages/SignUpPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('accessToken')) {
            next('/login')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router