import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // 开始页面加载进度条
  NProgress.start()

  // 设置页面title
  document.title = getPageTitle(to.meta.title)

  // 获取登陆token
  const hasToken = getToken()

  if (hasToken) {
    // 已登录，如果目标页面是登陆页，则直接重定向到首页
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // 否则，获取当前角色
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // 获取用户信息中的角色信息
          const { roles } = await store.dispatch('user/getInfo')

          // 根据角色信息生成授权的路由数组
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // 添加动态路由
          router.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // 重新登陆
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    // 没有登陆的情况下，如果是白名单内的路由，则直接跳转
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // 没有登陆，则跳转到登陆页面，并带上重定向地址
      next(`/login?redirect=${to.path}`)
      // 结束加载进度条
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 结束加载进度条
  NProgress.done()
})
