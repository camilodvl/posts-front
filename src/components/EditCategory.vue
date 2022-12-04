<template>
    <div class="container">
        <h1>Registrar Post</h1>
        <form @submit="updateCategory">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="name" placeholder="Ingrese nombre del post"
                    v-model="categoria.data.name">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Descripcion</label>
                <input type="text" class="form-control" id="description" placeholder="Ingrese descripcion del post"
                    v-model="categoria.data.description">
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
            categoria:[],
        }
    },

    created(){
        fetch('http://localhost:8000/api/category/'+this.id+'/edit')
        .then(response => response.json())
        .then((data)=> (this.categoria = data))
        .catch()
    },

    methods: {
        updateCategory() {
            axios.put('http://localhost:8000/api/category/'+this.id+'/update', this.categoria.data)
            .catch(error => console.log(error.response));
            this.$router.push('/category')
        },

        
    }
}

</script>