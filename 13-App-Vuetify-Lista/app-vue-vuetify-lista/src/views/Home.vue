<template>
    <v-container grid-list-md>
       <v-snackbar
      v-model="snackbar"
      :right="true"
      :top="true"
      :color="colorSnak"
    >
      {{ texto }}
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        <v-icon dark>close</v-icon>
      </v-btn>
    </v-snackbar>
      <v-layout>
        <v-flex xs6>
          <v-card class="pa-2">
            <v-form @submit.prevent="{agregar, modificar}">
              <v-flex xs12>
                <v-text-field
                  v-model="tarea"
                  counter="15"
                  :error="tareaError"
                  label="Nombre de la tarea"
                  outline
                  color="blue"
                  @keyup="tareaError = false"
                ></v-text-field>
              </v-flex>
              <v-textarea
                v-model="descripcion"
                rows="3"
                counter="50"
                :error="tareaError"
                label="Descripción de la tarea"
                outline
                color="blue"
                @keyup="tareaError = false"
              ></v-textarea>
              <v-btn block flat type="submit" color="blue" v-if="!cambiar" @click="agregar"><v-icon dark left>add_box</v-icon>Agregar</v-btn>
              <v-btn block flat type="submit" color="green" v-if="cambiar" @click="modificar"><v-icon dark left>edit</v-icon>Editar</v-btn>
            </v-form>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card v-for="(tarea, index) of listaTareas" :key="index" class="my-2">
            <v-card-text>
              <v-chip label dark color="blue-grey" class="ml-0">
                <v-icon left>assignment</v-icon>{{tarea.tarea}}
              </v-chip>
              <p>{{tarea.descripcion}}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn block flat color="green" @click="cambiarForm(index)" :disabled="cambiar"><v-icon dark left>edit</v-icon>Editar</v-btn>
                <v-btn block flat color="red" @click="borrar(index)"><v-icon dark left>delete</v-icon>Eliminar</v-btn>
              </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    data() {
      return {
        listaTareas: [],
        tarea: '',
        descripcion: '',
        tareaError: false,
        snackbar: false,
        colorSnak: '',
        texto: '',
        cambiar: false,
        indice: 0
      }
    },
    methods: {
      agregar() {
        if(this.tarea === '' || this.descripcion === '') {
          this.tareaError = true;
          this.colorSnak = 'red';
          this.snackbar = true;
          this.texto = 'Los campos estan vacíos';
        } else {
          this.listaTareas.push({
            tarea: this.tarea,
            descripcion: this.descripcion
          });
          this.colorSnak = 'green';
          this.snackbar = true;
          this.texto = 'Se ha agregado la tarea';
        }
        this.tarea = '';
        this.descripcion = '';
      },
      modificar() {
        if(this.tarea === '' || this.descripcion === '') {
          this.tareaError = true;
          this.colorSnak = 'red';
          this.snackbar = true;
          this.texto = 'Los campos estan vacíos'
        } else {
          this.listaTareas[this.indice].tarea = this.tarea;
          this.listaTareas[this.indice].descripcion = this.descripcion;
          this.tareaError = false;
          this.colorSnak = 'green';
          this.snackbar = true;
          this.texto = 'Se ha modificado la tarea';
          this.tarea = '';
          this.descripcion = '';
          this.cambiar = false;
        }
        this.indice = 0;
      },
      borrar(index) {
        this.listaTareas.splice(index, 1);
        this.colorSnak = 'green';
        this.snackbar = true;
        this.texto = 'Se ha borrado la tarea';
      },
      cambiarForm(index) {
        this.tarea = this.listaTareas[index].tarea;
        this.descripcion = this.listaTareas[index].descripcion;
        this.cambiar = true;
        this.indice = index;
      }
    },
  }
</script>
