Vue.component('hijo', {
    template: // html
        `
        <div class="p-3 bg-danger text-center">
            <h4 class="text-white">Componente hijo {{numero}}</h4>
            <button @click="numero--" class="btn btn-dark btn-block mt-5"> - </button>
        </div>
    `,
    // [props] Es un arreglo que recibe distintos datos de otros componentes.
    props: ['numero'],

    // Se actualiza el valor recibido del padre cada vez que se modifica desde el hijo.
    updated() {
        console.log(this.numero);
        this.$emit('numeroHijo', this.numero);
    }
});