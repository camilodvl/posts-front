<template>
    <div class="container">
        <h1>Registrar Post</h1>
        <form method="POST" v-on:submit.prevent="createPost()">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="name" placeholder="Ingrese nombre del post"
                    v-model="formData.name" required="true">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Descripcion</label>
                <input type="text" class="form-control" id="description" placeholder="Ingrese descripcion del post"
                    v-model="formData.description" required="true">
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Categoria</label>
                <select class="form-control" id="category" v-model="formData.category_id" required="true">
                    <template v-for="categoria in categorias.data">
                        <option v-bind:value="categoria.id">{{categoria.name}}</option>
                    </template>
                    
                </select>
            </div>

            <div class="form-group">
                <label for="exampleFormControlSelect1">Estado</label>
                <select class="form-control" id="state" v-model="formData.state" required="true">
 
                        <option v-bind:value="'Publicado'">Publicado</option>
                        <option v-bind:value="'No Publicado'">No Publicado</option>

                    
                </select>
            </div>


            <input type="submit" class="btn btn-primary" value="Crear">
        </form>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'CreatePost',
    data() {
        return {
            categorias: [],
            formData: {
                name: '',
                description: '',
                category_id: '',
                state: ''
            }
        }
    },

    created(){
        fetch('http://127.0.0.1:8000/api/category/all')
        .then(response => response.json())
        .then((data)=> (this.categorias = data))
    },

    methods: {
        createPost() {
            axios.post('http://localhost:8000/api/post/store', this.formData)
            .catch(error => {console.log(error.response)});
            alert("Registro creado");
            this.$router.push('/');
        }
    }
}

</script>