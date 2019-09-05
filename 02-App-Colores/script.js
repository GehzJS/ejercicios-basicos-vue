const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Principios de Vue',
        fondo: 'bg-primary',
        color: false,
        colores: [
            { valor: 'bg-primary' },
            { valor: 'bg-success' },
            { valor: 'bg-danger' },
            { valor: 'bg-warning' }
        ]
    },
    methods: {
        cambiarColor(color) {
            this.fondo = color.valor;
        }
    }
});