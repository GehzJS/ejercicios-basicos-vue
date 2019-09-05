<template>
  <v-container grid-list-md>
      <v-layout>
      <v-flex xs12 sm6>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique reprehenderit laboriosam mollitia sunt? Totam vero, hic, expedita fugiat ea, nam ullam deleniti numquam ut neque nihil tenetur ratione consequatur.</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat  block color="orange" v-model="dialog" @click="dialog = true">Open dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique reprehenderit laboriosam mollitia sunt? Totam vero, hic, expedita fugiat ea, nam ullam deleniti numquam ut neque nihil tenetur ratione consequatur.</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat  block color="orange" v-model="dialog" @click="dialog = true">Open dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Dialog from '@/components/Dialog.vue'

export default {
    name: 'Cards',
    components: {
      Dialog
    },
    data() {
      return {
        dialog: false
      }
    },
}
</script>