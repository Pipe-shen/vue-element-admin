import Layout from '@/layout'

const externalRouter = {
  path: 'external-link',
  component: Layout,
  children: [
    {
      path: 'https://github.com/PanJiaChen/vue-element-admin',
      meta: { title: 'External Link', icon: 'link' }
    }
  ]
}

export default externalRouter
