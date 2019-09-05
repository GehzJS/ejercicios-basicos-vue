<template>
    <div>
        <h1>{{titulo}}</h1>
        <b-form>
            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                type="text"
                v-model="nuevaTarea"
                required
                placeholder="Ingresa una tarea"
                :state="comprobar"
                ></b-form-input>
            </b-form-group>
            <b-button @click="guardar" variant="primary" class="btn-block my-3">Agregar tarea</b-button>
        </b-form>
        <div class="text-left">
            <b-alert v-for="(tarea, index) of tareas" :key="index" show :variant="tarea.estado ? 'success' : 'danger'" class="mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <div>{{tarea.nombre}}</div>
                <div>
                    <b-button @click="modificar(index)" variant="success ml-2">&#128078</b-button>
                    <b-button @click="borrar(index)" variant="danger ml-2">&#128077</b-button>
                </div>
                </div>
            </b-alert>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Lista',
    data() {
        return {
            titulo: 'Gym con Vue',
            tareas: [],
            nuevaTarea: ''     
        }
    },
    computed: {
        comprobar() {
            if(this.nuevaTarea.lenght == 0 || this.nuevaTarea == '') {
                return null;
            } else {
                return this.nuevaTarea.length > 2 ? true : false;
            }
        }
    },
    methods: {
        guardar() {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            // Se almacena un elemento en el LocalStorage
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
            this.nuevaTarea = '';
        },
        modificar(index) {
            this.tareas[index].estado = true;
            // Se almacena un elemento en el LocalStorage
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        borrar(index) {
            this.tareas.splice(index, 1);
            // Se almacena un elemento en el LocalStorage
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created() {
        // Se lee el LocalStorage
        let datos = JSON.parse(localStorage.getItem('gym-vue'));
        if(datos == null) {
            this.tareas = [];
        } else {
            this.tareas = datos;
        }
    },
}
</script>