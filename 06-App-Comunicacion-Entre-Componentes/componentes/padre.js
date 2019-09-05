Vue.component('padre', {
    template: // html
        `
    <div class="p-5 bg-dark text-center">
        <h1 class="text-white mb-5">Componente padre {{numeroPadre}}</h1>
        <!-- Se manda un dato al componente hijo. (Por v-bind). -->
        <hijo :numero="numeroPadre" @numeroHijo="numeroPadre = $event"></hijo>
        <button @click="numeroPadre++" class="btn btn-danger btn-block mt-5"> + </button>
    </div>
    `,
    data() {
        return {
            numeroPadre: 1
        };
    },
});