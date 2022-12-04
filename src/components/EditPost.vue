<template>
    <div class="container">
        <h1>Editar Post</h1>
        <form @submit="updatePost">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="name" placeholder="Ingrese nombre del post"
                    v-model="post.data.name">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Descripcion</label>
                <input type="text" class="form-control" id="description" placeholder="Ingrese descripcion del post"
                    v-model="post.data.description">
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Categoria</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="post.data.category_id">
                    <template v-for="categoria in categorias.data">
                        <option v-bind:value="categoria.id">{{categoria.name}}</option>
                    </template>
                    
                </select>
            </div>


            <button class="btn btn-primary">Crear</button>
        </form>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'CreatePost',
    data() {
        return {
            id: this.$route.params.id,
            categorias: [],
            post:[],
            formData: {
                name: '',
                description: '',
                category_id: '',
                state: 'Publicado'
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
            this.$router.push('/')
        },

        
    }
}

</script>