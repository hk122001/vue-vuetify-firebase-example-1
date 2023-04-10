<script setup>
  import { ref, defineProps } from 'vue'
  let dialog = ref(false)
  const props = defineProps({
    professor: String,
    classroom: String,
    title: String,
    days: Array,
    schedule: String,
  })
  function calculateDays(daysArray) {
    let returnString = ""
    for(let i = 0; i < daysArray.length; i++){
      if(i == daysArray.length - 2){
        returnString = returnString + `${daysArray[i]} `
      }
      else if(i != daysArray.length - 1){
        returnString = returnString + `${daysArray[i]}, `
      }else{
        if(daysArray.length == 1){
          returnString = returnString + `${daysArray[i]}`
        }else{
          returnString = returnString + `& ${daysArray[i]}`
        }
      }
    }
    return returnString
  }
  let calculatedDays = calculateDays(props.days)
</script>

<template>
  <v-sheet class="pa-6 mx-auto my-6 rounded-lg" max-width="900" elevation="2">
    <p class="text-primary titles">{{ title }}</p>
    <p class="text-secondary cards">Profesor: {{ professor }}</p>
    <v-row class="dialog_row">
      <v-spacer />
      <v-dialog v-model="dialog">
        <template v-slot:activator="{ props }">
          <v-btn
            color="#384FFE"
            variant="text"
            v-bind="props"
            >
            <p class="text-primary font-weight-bold capitalize text-h6">Ver detalles</p>
          </v-btn>
        </template>
        <v-sheet class="pa-8 mx-auto rounded-lg" width="100%" max-width="800" elevation="2">
          <h1 class="text-primary text-h4 font-weight-bold" align="center">{{ title }}</h1>
          <div class="dialog_info">
            <br>
            <p class="text-secondary cards">Profesor: {{ professor }}</p>
            <p class="text-secondary cards">Salón: {{ classroom }}</p>
            <p class="text-secondary cards">Días: {{ calculatedDays }}</p>
            <p class="text-secondary cards">Horario: {{ schedule }}</p>
            <br>
          </div>
          <v-row>
            <v-col></v-col>
            <v-col></v-col>
            <v-col>
              <v-btn
                color="#384FFE"
                block
                variant="text"
                @click="dialog = false"
                >
                <p class="text-primary font-weight-bold text-h6">CERRAR</p>
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-dialog>
    </v-row>
  </v-sheet>
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