import Layout from '@/layout'

const tabRouter = {
  path: '/cms',
  component: Layout,
  redirect: '/cms/index',
  alwaysShow: true, // will always show the root menu
  name: 'Cms',
  meta: {
    title: 'Cms',
    icon: 'lock',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/cms/index'),
      name: 'IndexCms',
      meta: { title: 'IndexCms', icon: 'page' }
    },
    {
      path: 'topic',
      component: () => import('@/views/cms/topic/index'),
      name: 'TopicCms',
      meta: { title: 'TopicCms', icon: 'page' }
    },
    {
      path: 'post',
      component: () => import('@/views/cms/post/index'),
      name: 'PostCms',
      meta: { title: 'PostCms', icon: 'page' }
    }
  ]
}

export default tabRouter
