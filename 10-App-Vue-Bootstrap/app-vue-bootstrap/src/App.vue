<template>
  <div id="app">
    <navbar/>
    <b-container class="my-5">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>