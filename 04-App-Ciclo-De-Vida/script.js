// 1. Instancia de Vue.
const app = new Vue({

    // 2. Antes de crear el componente.
    beforeCreate() {
        console.log('Antes de crear el componente');
    },

    // 3. Después de crear el componente.
    created() {
        console.log('Después de crear el componente');
    },

    // 4. Antes de montar el componente al DOM.
    beforeMount() {
        console.log('Antes de montar el componente al DOM');
    },

    // 5. Después de montar el componente al DOM.
    mounted() {
        console.log('Después de montar el componente al DOM');
    },

    // 6. Al detectar un cambio.
    beforeUpdate() {
        console.log('Al detectar un cambio');
    },

    // 7. Después de realizar un cambio.
    updated() {
        console.log('Después de realizar un cambio');
    },

    // 8. Antes de destruir la instancia.
    beforeDestroy() {
        console.log('Antes de destruir la instancia');
    },

    // Al destruir la instancia.
    destroyed() {
        console.log('Al destruir la instancia.');
    },

    el: '#app',
    data: {
        mensaje: 'Principios de Vue'
    },
    methods: {
        destruirInstancia() {
            this.$destroy();
        }
    },
});