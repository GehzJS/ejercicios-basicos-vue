Vue.component('contador', {
    template: `
        <div>
            <button @click="contador++" class="btn btn-primary mb-2"> + </button>
            <h4>{{contador}}</h4>
        </div>
    `,
    data() {
        return {
            contador: 0
        };
    }
});