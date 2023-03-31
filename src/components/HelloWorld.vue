<script setup>
  import { ref } from 'vue'
  import materias1 from "./materias.json"
  const obj = JSON.parse(JSON.stringify(materias1))

  let dialog = ref(false)
  let number = 0
  let limit
</script>

<template>
  <v-sheet v-for="materia in obj.materias" class="pa-6 mx-auto my-6" max-width="900" elevation="2" rounded="xl">
    <h3>{{ materia.title }}</h3>
    <p class="text-primary">Profesor: {{ materia.professor }}</p>
    <v-row class="dialog_row">
      <v-spacer />
      <v-dialog v-model="dialog">
        <template v-slot:activator="scope">
          <v-btn
            color="#384FFE"
            variant="text"
            v-on="scope.on"
            @click="dialog =  true"
            >
            <p class="text-primary font-weight-bold capitalize text-h6">Ver detalles</p>
          </v-btn>
        </template>
        <v-sheet class="pa-8 mx-auto" width="100%" max-width="800" elevation="2" rounded="xl">
          <h3 class="dialog_title">{{ materia.title }}</h3>
          <div class="dialog_info">
            <p class="text-secondary">Profesor: {{ materia.professor }}</p>
            <p class="text-secondary">Salón: {{ materia.classroom }}</p>
            <p class="text-secondary">Días: <p v-for="dia in materia.dias" class="text-secondary"> {{ dia }}</p> {{ Object.keys(materia.days).length }}</p>
            <p class="text-secondary">Horario: {{ materia.schedule }}</p>
          </div>
          <v-row>
            <v-spacer />
            <v-btn
              color="#384FFE"
              variant="text"
              @click="dialog = false"
              >
              <p class="text-primary font-weight-bold text-h6">CERRAR</p>
            </v-btn>
          </v-row>
        </v-sheet>
      </v-dialog>
    </v-row>
  </v-sheet>
</template>
