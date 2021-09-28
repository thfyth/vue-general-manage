import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
	{
		path: '/admin',
		component: import('@/views/admin.vue'),
	},
	{
		path: '/user',
		component: import('@/views/user.vue'),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
const route = ['admin', 'user']
const newRouter: RouteRecordRaw[] = route.map((item) => ({
	path: `/${item}`,
	component: () => import(`@/views/${item}.vue`),
}))
console.log(newRouter)
newRouter.forEach((v: RouteRecordRaw) => {
	router.addRoute(v)
})

export default router
