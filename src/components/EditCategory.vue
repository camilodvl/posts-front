<template>
    <div class="container">
        <h1>Editar Categoria</h1>
        <form method="POST" v-on:submit.prevent="updateCategory()">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="name" placeholder="Ingrese nombre del post"
                    v-model="categoria.data.name" required="true">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Descripcion</label>
                <input type="text" class="form-control" id="description" placeholder="Ingrese descripcion del post"
                    v-model="categoria.data.description" required="true">
            </div>


            <input type="submit" class="btn btn-primary" value="Actualizar categoria">
        </form>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'EditCategory',
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
            alert("Categoria actualizada")
            this.$router.push('/category')
        },

        
    }
}

</script>