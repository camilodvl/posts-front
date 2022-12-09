<template>
    <div class="container d-flex justify-content-center">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><strong>Id:</strong>{{post.data.id}}</h5>
                <h5 class="card-title"><strong>Nombre:</strong>{{post.data.name}}</h5>
                <h5 class="card-title"><strong>Descripción:</strong> {{post.data.description}}</h5>
                <h5 class="card-title"><strong>Estado:</strong> {{post.data.state}}</h5>
                <h5 class="card-title"><strong>Id Categoria:</strong> {{post.data.category_id}}</h5>
                <h5 class="card-title"><strong>Fecha de creación:</strong> {{post.data.created_at}}</h5>
                <h5 class="card-title"><strong>Fecha de actualización:</strong> {{post.data.updated_at}}</h5>

            </div>
            </div>

    </div>

</template>

<script>

export default {
    name: 'PostDetails',
    data() {
        return {
            id: this.$route.params.id,
            categorias: [],
            post: []
        }
    },

    created() {
        fetch('http://localhost:8000/api/post/' + this.id + '/edit')
            .then(response => response.json())
            .then((data) => (this.post = data))
            .then((data)=> console.log(data))
            .catch()

        fetch('http://127.0.0.1:8000/api/category/all')
            .then(response => response.json())
            .then((data) => (this.categorias = data))
    },

}

</script>