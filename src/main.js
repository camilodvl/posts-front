import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Category from '../src/components/Category.vue'
import PostList from '../src/components/PostList.vue'
import FormCategory from '../src/components/FormCategory.vue'
import FormPost from '../src/components/FormPost.vue'
import EditPost from '../src/components/EditPost.vue'
import EditCategory from '../src/components/EditCategory.vue'
import PostDetails from '../src/components/PostDetails.vue'
import CategoryDetails from '../src/components/CategoryDetails.vue'
import AllPost from '../src/components/AllPost.vue'

const routes = [
    { path: '/category', component: Category },
    { path: '/', component: PostList },
    { path: '/post/all', component: AllPost },
    { path: '/category/create', component: FormCategory },
    { path: '/post/create', component: FormPost },
    { path: '/post/edit/:id', component: EditPost },
    { path: '/category/edit/:id', component: EditCategory },
    { path: '/post/details/:id', component: PostDetails },
    { path: '/category/details/:id', component: CategoryDetails }
  ]

  //crear instancia del router
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })


createApp(App).use(router).mount('#app')
