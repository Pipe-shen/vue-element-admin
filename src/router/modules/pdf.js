import Layout from '@/layout'

const pdfRouter = {
  path: '/pdf',
  component: Layout,
  redirect: '/pdf/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/pdf/index'),
      name: 'PDF',
      meta: { title: 'PDF', icon: 'pdf' }
    },
    {
      path: 'download',
      component: () => import('@/views/pdf/download'),
      hidden: true
    }
  ]
}

export default pdfRouter
