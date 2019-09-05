<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-date-picker full-width 
                          v-model="fecha"
                          locale="es-MX"
                          min="1984"
                          :max="maximo"
                          @change="getDolar(fecha)"
                          color="blue"
          ></v-date-picker>
        </v-card>
        <v-card color="red text-xs-center" dark>
          <v-card-text class="display-1">{{valor}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <loading></loading>
  </v-container>
</template>

<script>
import axios from 'axios';
import {mapMutations} from 'vuex';
import Loading from "@/components/Loading.vue";

  export default {
    data() {
      return {
        fecha: new Date().toISOString().substr(0, 10),
        valor: null,
        maximo: new Date().toISOString().substr(0, 10)
      }
    },
    methods: {
      ...mapMutations(['mostrarLoading', 'ocultarLoading']),
      async getDolar(dia) {
        // Se convierte el parámetro día en un arreglo.
        let arrayDia = dia.split('-');
        // Se ordenan los elementos del arreglo.
        let diaCorregido = arrayDia[2] + '-' + arrayDia[1] + '-' + arrayDia[0];
        try {
          this.mostrarLoading({titulo: 'Accediendo a la información'});
          // Se envía la petición usando los datos corregidos.
            let datos = await axios.get(`https://mindicador.cl/api/dolar/${diaCorregido}`);
          if (datos.data.serie.length > 0) {
            // Se le asigna el valor obtenido desde la peticion a la variable.
            this.valor = datos.data.serie[0].valor;
          } else {
            this.valor = 'Sin resultados';
          }
        } catch (error) {
          console.log(error)
        } finally {
          this.ocultarLoading();
        }
      }
    },
    components: {
      Loading
    },
    created() {
      this.getDolar(this.fecha);
    },
  }
</script>
