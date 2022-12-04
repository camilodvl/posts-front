<template>
    <div class="container">
        <h1>Registrar Categoria</h1>
    <form @submit="createCategory">
  <div class="form-group">
    <label for="nombre">Nombre</label>
    <input type="text" class="form-control" id="name" placeholder="Ingrese nombre de la categoria" v-model="formData.name">

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Descripcion</label>
    <input type="text" class="form-control" id="description" placeholder="Ingrese descripcion de la categoria" v-model="formData.description">
  </div>
  <button class="btn btn-primary">Crear</button>
</form>
    </div>
   
</template>

<script>
import axios from 'axios';

export default{
    name: 'CreateCategory',
    data(){
        return{
            formData:{
                name: '',
                description: ''
            }
        }
    },
    methods: {
        createCategory(){
            axios.post('http://localhost:8000/api/category/store', this.formData)
        }
    }
}

</script>