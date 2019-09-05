// Instancia de Vue.
const app = new Vue({

    // [ el ] Indica el elemento del HTML que será administrado por Vue.
    el: '#app',

    // [ data ] Almacena todos los datos que se usarán en el componente actual.
    data: {
        titulo: 'Principios de Vue',
        frutas: [
            { nombre: 'manzanas', cantidad: 10 },
            { nombre: 'platanos', cantidad: 20 },
            { nombre: 'guayabas', cantidad: 0 }
        ],
        nuevaFruta: '',
        total: 0
    },

    // [ methods ] Contiene todos las funciones que se usarán en el componente actual.
    methods: {
        agregarFruta() {

            // [ push ] Agrega nuevos elementos a un objeto o arreglo.
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            });
            this.nuevaFruta = '';
        }
    },

    // [ computed ] Contiene todas las funciones que se ejecutan automáticamente.
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
});