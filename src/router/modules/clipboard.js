import Layout from '@/layout'

const clipboardRouter = {
  path: '/clipboard',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/clipboard/index'),
      name: 'ClipboardDemo',
      meta: { title: 'Clipboard', icon: 'clipboard' }
    }
  ]
}

export default clipboardRouter
