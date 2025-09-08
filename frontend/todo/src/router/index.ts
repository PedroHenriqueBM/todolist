// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../pages/taskPages/Tasks/Tasks.vue'

// importar páginas


// definir rotas
const routes = [
    { path: '/', name: 'tasks', component: Tasks },
]

// criar o router
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
