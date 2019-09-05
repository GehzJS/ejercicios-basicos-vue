Vue.component('padre', {
    template: // html
        `
    <div class="p-5 bg-dark text-center">
        <h1 class="text-white mb-5">Componente padre {{numero}}</h1>
        <!-- Se manda un dato al componente hijo. (Por v-bind). -->
        <hijo></hijo>
        <button @click="aumentar" class="btn btn-warning btn-block mt-5"> + </button>
    </div>
    `,

    // [mapState] Sirve para traer variables de la instancia de Vuex al componente actual.
    computed: {
        ...Vuex.mapState(['numero'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar'])
    },
});