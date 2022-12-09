<template>
    <div class="container">
        <h1>Registrar Categoria</h1>
    <form method="POST" v-on:submit.prevent="createCategory()">
  <div class="form-group">
    <label for="nombre">Nombre</label>
    <input type="text" class="form-control" id="name" placeholder="Ingrese nombre de la categoria" v-model="formData.name" required="true">

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Descripcion</label>
    <input type="text" class="form-control" id="description" placeholder="Ingrese descripcion de la categoria" v-model="formData.description" required="true">
  </div>
  <input type="submit" class="btn btn-primary" value="Crear">
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
            .catch(error => {console.log(error.response)});
            alert("Categoria creado");
            this.$router.push('/category');
        }
    }
}

</script>