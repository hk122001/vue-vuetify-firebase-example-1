<script setup>
  import componentClasses from "./componentClasses.vue"
  import { collection, getDocs, getFirestore } from 'firebase/firestore'
  import { ref, onMounted } from 'vue'
  const db = getFirestore()
  const materias = ref([])
  onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, 'materias'))
    const data = []
    querySnapshot.forEach((doc) => {
      data.push(doc.data())
    })
    materias.value = data
  })
</script>

<template>
  <v-container align="center">
    <h1 class="text-primary text-h3 font-weight-bold">MATERIAS INSCRITAS</h1>
  </v-container>
  <componentClasses v-for="(materia, index) in materias" :key="index" v-bind="materia"></componentClasses>
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