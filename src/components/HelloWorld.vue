<script setup>
  import { ref } from 'vue'
  import materias1 from "./materias.json"
  import componentClasses from "./componentClasses.vue"

  let dialog = ref(false)
</script>

<template>
  <v-container align="center">
    <h1 class="text-primary text-h3 font-weight-bold">MATERIAS INSCRITAS</h1>
  </v-container>
  <componentClasses v-for="(materia, index) in materias1.materias" :key="index" v-bind="materia"></componentClasses>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
      }
    }
  }
</script>