<template>
  <div id="app" class="container my-5">
    <cabecera></cabecera>
    <lista></lista>
  </div>
</template>

<script>
import Cabecera from "./components/Cabecera.vue"
import Lista from "./components/Lista.vue"

export default {
  name: "app",
  components: {
    Cabecera,
    Lista
  }
};
</script>
