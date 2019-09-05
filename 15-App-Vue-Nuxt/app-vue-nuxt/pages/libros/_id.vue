<template>
    <v-container>
        <v-layout wrap>
            <v-flex xs12>
                <h1>Posts</h1>
                <v-card class="my-3">
                    <v-card-title><h3>Título: {{post.title}}</h3></v-card-title>
                    <v-card-text>
                        <p>Descripción: {{post.body}}</p>
                        <span>Autor: {{post.autor}}</span>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn dark block color="red" to="/libros">Atras</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            post: []
        }
    },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        try {
            let datos = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
            const post = datos.data;
            let autor = await axios.get(`https://jsonplaceholder.typicode.com/users/${datos.data.userId}`);
            post.autor = autor.data.name;
            return {post};
        } catch (error) {
            return{error: error};
        } 
    },
}
</script>