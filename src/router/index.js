import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/store'  // Add this line
import LoginForm from '@/components/LoginForm.vue'
import UserList from '@/components/UserList.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginForm
    },
    {
        path: '/users',
        name: 'InternalUsers',
        component: UserList
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.getters.isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router