<template>
    <div>
        <form action="">
            <b-row>
                <b-col sm="12" md="6" lg="3">
                    <b-form-input v-model="texto" :state="comprobar" type="text"></b-form-input>
                    <span>Mínimo 3 caracteres.</span>
                    <p>Texto: {{texto}}</p>
                </b-col>
                <b-col sm="12" md="6" lg="3">
                    <b-form-select v-model="select" :options="opcionesSelect"></b-form-select>
                    <p>Selección: {{select}}</p>
                </b-col>
                <b-col sm="12" md="6" lg="3">
                    <b-form-radio-group v-model="radio" :options="opcionesRadio"></b-form-radio-group>
                    <p>Selección: {{radio}}</p>
                </b-col>
                <b-col sm="12" md="6" lg="3">
                    <b-form-checkbox-group v-model="check" :options="opcionesRadio"></b-form-checkbox-group>
                    <p>Selección: {{check}}</p>
                </b-col>
            </b-row>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            texto: '',
            select: null,
            radio: null,
            check: [],
            opcionesSelect : [
                {value: null, text: 'Seleccione un animal'},
                {value: 'Perro', text: 'Opcion: Perro'},
                {value: 'Gato', text: 'Opcion: Gato'},
                {value: 'Ratón', text: 'Opcion: Ratón'}
            ],
            opcionesRadio : [
                {value: 'Perro', text: 'Opcion: Perro'},
                {value: 'Gato', text: 'Opcion: Gato'},
                {value: 'Ratón', text: 'Opcion: Ratón'}
            ]
        }
    },
    // [computed] Siempre devuelve valores boleanos.
    computed: {
        comprobar() {
            if(this.texto.lenght == 0 || this.texto == '') {
                return null;
            } else {
                return this.texto.length > 2 ? true : false;
            }
        }
    },
}
</script>