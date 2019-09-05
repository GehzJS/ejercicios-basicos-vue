<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <lista></lista>
  </div>
</template>

<script>
// @ is an alias to /src
import Lista from "@/components/Lista.vue";

export default {
  name: "Inicio",
  components: {
    Lista
  }
};
</script>
