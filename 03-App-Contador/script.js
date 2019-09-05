const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Principios de Vue',
        contador: 0
    },
    computed: {
        invertirMensaje() {
            return this.mensaje.split('').reverse().join('');
        },
        colorBarra() {
            return {
                'bg-primary': this.contador <= 25,
                'bg-success': this.contador <= 50 && this.contador > 25,
                'bg-warning': this.contador <= 75 && this.contador > 50,
                'bg-danger': this.contador > 75,
            };
        }
    }
});