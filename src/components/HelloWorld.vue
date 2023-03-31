<script setup>
  import { ref } from 'vue'
  import materias1 from "./materias.json"
  const obj = JSON.parse(JSON.stringify(materias1))

  let numberOfSubjects = obj.materias.length;
  let dialog = ref(false)
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    professor: {
      type: String,
      required: true
    },
    classroom: {
      type: String
    },
    days: {
      type: Array
    },
    schedule: {
      type: String
    }
})
</script>

<template>
  <v-sheet v-for="index in numberOfSubjects" v-bind="index" :value="index" :key="index" class="pa-6 mx-auto my-6" max-width="900" elevation="2" rounded="xl">
    <h3>{{ obj.materias[index-1].title }}</h3>
    <p class="text-primary">Profesor: {{ obj.materias[index-1].professor }}</p>
    <v-row class="dialog_row">
      <v-spacer />
      <v-btn
        color="#384FFE"
        variant="text"
        @click="editStudent(index-1)"
        >
        <p class="text-primary font-weight-bold capitalize text-h6">Ver detalles</p>
      </v-btn>
      <v-dialog v-model="dialog" activator="parent">
        <v-sheet class="pa-8 mx-auto" width="100%" max-width="800" elevation="2" rounded="xl">
          <h3 class="dialog_title">{{ obj.materias[index-1].title }}</h3>
          <div class="dialog_info">
            <p class="text-secondary">Profesor: {{ obj.materias[index-1].professor }}</p>
            <p class="text-secondary">Salón: {{ obj.materias[index-1].classroom }}</p>
            <p class="text-secondary">Días: {{ obj.materias[index-1].days }}</p>
            <p class="text-secondary">Horario: {{ obj.materias[index-1].schedule }}</p>
          </div>
          <v-row>
            <v-spacer />
            <v-btn
              color="#384FFE"
              block
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

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>