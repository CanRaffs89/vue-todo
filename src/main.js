import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import About from './views/About.vue'
import Home from './views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})

createApp(App).use(router).mount('#app')
