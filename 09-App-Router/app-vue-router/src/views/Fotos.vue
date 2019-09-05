<template>
    <div>
        <h3>Galería de fotos</h3>
        <foto></foto>
        <!-- Se indica el nombre de la ruta y después se le pasan los parámetros. -->
        <router-link :to="{name: 'foto', params: {id: foto}}"
        v-for="(foto, index) of fotos" :key="index">
            <button class="btn btn-primary mx-3">Foto {{foto}}</button>
        </router-link>
        <button @click="irAnterior" class="btn btn-warning mx-3">Anterior</button>
        <button @click="irInicio" class="btn btn-success mx-3">Inicio</button>
        <button @click="irSiguiente" class="btn btn-warning mx-3">Siguiente</button>
    </div>
</template>

<script>
import Foto from '@/components/Foto.vue'

export default {
    components: {
        Foto
    },
    data() {
        return {
            fotos: [1, 2, 3]
        }
    },
    methods: {
        irInicio() {
            this.$router.push('/');
        },
        irAnterior() {
            this.$router.go(-1);
        },
        irSiguiente() {
            this.$router.go(1);
        }
    },
}
</script>
