<template>
<div class="container-fluid">

    <div>
        <a href="#/post/create" class="btn btn-primary">Crear nuevo post</a>
    </div>
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Categoria</th>
      <th scope="col">Detalles</th>
      <th scope="col">Eliminar</th>
      <th scope="col">Modificar</th>
    </tr>
  </thead>
  <tbody>
    <template v-for="post in posts.data">

    <tr v-if="post.state=='Publicado'">
      <td>{{post.name}}</td>
      <td>{{post.description}}</td>
      <td>{{categorias.data.find(categoria=>categoria.id==post.category_id).name}}</td>
      <td><router-link :to="('/post/details/'+post.id)"><i class="fa-solid fa-circle-info" data-toggle="tooltip" data-placement="left" title="Detalles"></i></router-link></td>
      <td><button class="btn btn-danger" v-on:click="deletePost(post.id)"><i class="fa-solid fa-trash"></i></button></td>
      <td><router-link :to="('/post/edit/'+post.id)"><i class="fa-solid fa-pen-to-square" style="color: darkgoldenrod"></i></router-link></td>
    </tr>
    
    </template>

  </tbody>
</table>
    </div>
</div>

</template>

<script>
import axios from 'axios';

export default{

    data(){
        return{
            posts: [],
            categorias: []
        }
    },

    async created(){
        await fetch('http://localhost:8000/api/post/all')
        .then(response => response.json())
        .then((data)=> (this.posts = data))
        .then()

        await fetch('http://127.0.0.1:8000/api/category/all')
        .then(response => response.json())
        .then((data)=> (this.categorias = data))
    },
    methods:{
        deletePost(id){
            axios.delete("http://127.0.0.1:8000/api/post/"+id+"/destroy").then(id=>location.reload());
            
        }
    }
}
</script>