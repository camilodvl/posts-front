<template>
    <div class="container d-flex justify-content-center">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><strong>Id:</strong>{{categorias.data.id}}</h5>
                <h5 class="card-title"><strong>Nombre:</strong>{{categorias.data.name}}</h5>
                <h5 class="card-title"><strong>Descripción:</strong> {{categorias.data.description}}</h5>
                <h5 class="card-title"><strong>Fecha de creación:</strong> {{categorias.data.created_at}}</h5>
                <h5 class="card-title"><strong>Fecha de actualización:</strong> {{categorias.data.updated_at}}</h5>

            </div>
            </div>

    </div>

</template>

<script>

export default {
    name: 'category',
    data() {
        return {
            id: this.$route.params.id,
            categorias: [],
        }
    },

    created() {
        fetch('http://localhost:8000/api/category/' + this.id + '/edit')
            .then(response => response.json())
            .then((data) => (this.categorias = data))
            .catch(error => console.log(error.response));
    },

}

</script>