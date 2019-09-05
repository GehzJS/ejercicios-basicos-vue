import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        frutas: [
            { nombre: 'manzanas', cantidad: 0 },
            { nombre: 'guayabas', cantidad: 0 },
            { nombre: 'platanos', cantidad: 0 },
        ]
    },
    mutations: {
        aumentar(state, index) {
            state.frutas[index].cantidad++;
        },
        reiniciar(state) {
            for (let fruta of state.frutas) {
                fruta.cantidad = 0;
            }
        }
    },
    actions: {}
});