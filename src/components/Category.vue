<template>

<div class="container-fluid">
  <div>
        <a href="#/category/create" class="btn btn-primary">Crear</a>
    </div>
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="categoria in categorias.data">
      <td>{{categoria.id}}</td>
      <td>{{categoria.name}}</td>
      <td>{{categoria.description}}</td>
      <td><button class="btn btn-danger" v-on:click="deleteCategory(categoria.id)"><i class="fa-solid fa-trash"></i></button></td>
      <td><router-link :to="('/category/edit/'+categoria.id)"><i class="fa-solid fa-pen-to-square" style="color: darkgoldenrod"></i></router-link></td>
    </tr>
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
            categorias: []
        }
    },

    created(){
          fetch('http://127.0.0.1:8000/api/category/all')
        .then(response => response.json())
        .then((data)=> (this.categorias = data))
    },
    methods:{
        deleteCategory(id){
            axios.delete("http://127.0.0.1:8000/api/category/"+id+"/destroy").then(id=>console.log(location.reload()));
            
        }
    }
}
</script>