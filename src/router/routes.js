import IndexView from '../views/Index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => resolve(IndexView)
  }
]

export default routes
