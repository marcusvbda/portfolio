import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@views/Home')
const Contact = () => import('@views/Contact')

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Home },
	{ path: '/contact', component: Contact }
]

const router = new VueRouter({
	mode: 'history',
	routes: routes
})

export default router
