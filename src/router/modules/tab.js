import Layout from '@/layout'

const tabRouter = {
  path: '/tab',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/tab/index'),
      name: 'Tab',
      meta: { title: 'Tab', icon: 'tab' }
    }
  ]
}

export default tabRouter
