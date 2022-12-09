<template>
    <div class="container">
        <h1>Editar Post</h1>
        <form method="POST" v-on:submit.prevent="updatePost()" >
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="name" placeholder="Ingrese nombre del post"
                    v-model="post.data.name" required="true">
            </div>
            <div class="form-group">
                <label for="descr">Descripcion</label>
                <input type="text" class="form-control" id="descr" placeholder="Ingrese descripcion del post"
                    v-model="post.data.description" required="true">
            </div>
            <div class="form-group">
                <label for="category">Categoria</label>
                <select class="form-control" id="category" v-model="post.data.category_id" required="true">
                    <template v-for="categoria in categorias.data">
                        <option v-bind:value="categoria.id">{{categoria.name}}</option>
                    </template>
                    
                </select>
            </div>

            <div class="form-group">
                <label for="state">Estado</label>
                <select class="form-control" id="state" v-model="post.data.state" required="true">
 
                    <option v-bind:value="'Publicado'">Publicado</option>
                    <option v-bind:value="'No Publicado'">No Publicado</option>

                    
                </select>
            </div>


            <input type="submit" class="btn btn-primary" value="Actualizar">
        </form>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'EditPost',
    data() {
        return {
            id: this.$route.params.id,
            categorias: [],
            post:[],
            formData: {
                name: '',
                description: '',
                category_id: '',
                state: ''
            }
        }
    },

    created(){
        fetch('http://localhost:8000/api/post/'+this.id+'/edit')
        .then(response => response.json())
        .then((data)=> (this.post = data))
        .catch()

        fetch('http://127.0.0.1:8000/api/category/all')
        .then(response => response.json())
        .then((data)=> (this.categorias = data))
    },

    methods: {
        updatePost() {
            axios.put('http://localhost:8000/api/post/'+this.id+'/update', this.post.data)
            .catch(error => console.log(error.response));
            alert("Post Actualizado");
            this.$router.push('/');
            
        },

        
    }
}

</script>