import Layout from '@/layout'

const iconRouter = {
  path: '/icon',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/icons/index'),
      name: 'Icons',
      meta: { title: 'Icons', icon: 'icon', noCache: true }
    }
  ]
}

export default iconRouter
