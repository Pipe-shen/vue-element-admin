import Vue from 'vue'
import Router from 'vue-router'

// import Layout from '@/layout'
/* Router Modules */
// 所有系统的通用路由
import constantRoutes from './modules/constant'
import async from './modules/async'

Vue.use(Router)
/**
 * 异步路由
 * TODO 单独一个文件管理
 * 根据用户角色权限来动态加载
 */
export const asyncRoutes = async

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
