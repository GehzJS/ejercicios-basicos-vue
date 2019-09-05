<template>
  <v-app>
    <toolbar></toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'

export default {
  name: "App",
  data() {
    return {
      //
    };
  },
  components: {
    Toolbar
  }
};
</script>
