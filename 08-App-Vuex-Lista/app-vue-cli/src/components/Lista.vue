<template>
    <div>
        <div class="list-group">
            <!-- [:key] Indica que se esta trabajando con objetos únicos. -->
            <button v-for="(fruta, index) of ordenarFrutas" :key="fruta.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{fruta.nombre}}
                <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
            </button>
        </div>
        <button @click="reiniciar" class="btn btn-primary btn-block">Reiniciar</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: 'Lista',
    computed: {
        ...mapState(['frutas']),
        ordenarFrutas() {
            // Se ordenan las frutas de mayor cantidad a menor.
            return this.frutas.sort((a,b)=> b.cantidad - a.cantidad);
        }
    },
    methods: {
        ...mapMutations(['aumentar', 'reiniciar'])
    },
}
</script>