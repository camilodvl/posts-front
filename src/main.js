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
    { path: '/category', component: Category },//Todas las categorias
    { path: '/', component: PostList }, // todos los post con state = Publicado
    { path: '/post/all', component: AllPost }, //todos los post
    { path: '/category/create', component: FormCategory }, //formulario de creacion de categoria
    { path: '/post/create', component: FormPost }, // formulario de creacion de post
    { path: '/post/edit/:id', component: EditPost }, //Formularo de edicion de post
    { path: '/category/edit/:id', component: EditCategory }, //Formulario de edicion de categorias
    { path: '/post/details/:id', component: PostDetails }, // Detalles del post
    { path: '/category/details/:id', component: CategoryDetails } // detalles de la categora
  ]

  //crear instancia del router
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })


createApp(App).use(router).mount('#app')
