import Layout from '@/layout'

const themeRouter = {
  path: '/theme',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/theme/index'),
      name: 'Theme',
      meta: { title: 'Theme', icon: 'theme' }
    }
  ]
}

export default themeRouter
