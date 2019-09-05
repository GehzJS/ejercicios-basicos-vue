Vue.component('hijo', {
    template: // html
        `
        <div class="p-3 bg-warning text-center">
            <h4 class="text-white">Componente hijo {{numero}}</h4>
            <button @click="disminuir(2)" class="btn btn-dark btn-block mt-5"> - </button>
            <table v-if="cursos != []" class="table table-striped table-dark mt-4">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Curso</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="curso of cursos">
                    <th scope="row">{{curso.id}}</th>
                    <td>{{curso.nombre}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,

    // [mapState] Sirve para traer elementos de la instancia de Vuex al componente actual.
    computed: {
        ...Vuex.mapState(['numero', 'cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['disminuir']),
        ...Vuex.mapActions(['obtenerCursos'])
    },
    mounted() {
        this.obtenerCursos();
    }
});