<template>
    <v-container>
        <v-layout wrap>
            <v-flex xs12>
                <h1>Posts</h1>
                <v-card v-for="(articulo, index) of articulos" :key="index" class="my-3">
                    <v-card-title><h3>Título: {{articulo.title}}</h3></v-card-title>
                    <v-card-text>
                        <p>Descripción: {{articulo.body}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn dark block color="green" :to="`/libros/${index+1}`">Ver</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            articulos: []
        }
    },
    async created() {
        try {
            let datos = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
            this.articulos = datos.data;
        } catch (error) {
            console.log(error);
        }
    },
}
</script>