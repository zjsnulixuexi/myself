import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'Register', component: () => import('./src/views/Register.vue') },
        { path: '/home', name: 'Home', component: () => import('./src/views/Home.vue') },
        { path: '/habbit', name: 'Habbit', component: () => import('./src/views/Habbit.vue') },
        { path: '/myself', name: 'Introduce', component: () => import('./src/views/Introduce.vue') },
        { path: '/works', name: 'Works', component: () => import('./src/views/Works.vue') },
    ]
})

export default router
