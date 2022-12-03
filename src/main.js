import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Category from '../src/components/Category.vue'
import PostList from '../src/components/PostList.vue'
import FormCategory from '../src/components/FormCategory.vue'

const routes = [
    { path: '/category', component: Category },
    { path: '/', component: PostList },
    { path: '/category/create', component: FormCategory }
  ]

  //crear instancia del router
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })


createApp(App).use(router).mount('#app')
