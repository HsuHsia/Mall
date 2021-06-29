import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Car = () => import('../views/car/Car')
const Profile = () => import('../views/profile/Profile')

// 安装插件
Vue.use(VueRouter)

// 创建
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/shopcar',
    component: Car
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导出
export default router