<script setup>
import imageUrl from '@/assets/juan-escutia2.jpeg'
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="fill-height">
      <div class="d-flex flex-column fill-height justify-lg-space-evenly align-content-center align-center">
        <h1 class="text-h3 font-weight-bold text-primary">INFORMACIÓN DEL ALUMNO</h1>
        <v-img
          width="250"
          max-height="250"
          cover
          class="rounded-image"
          src="src\assets\juan-escutia2.jpeg">
        </v-img>
          <v-container class="w-50" >


                <div class="d-flex flex-row w-100 justify-space-between align-content-center">
                  <v-sheet class="pa-2 ma-2 " min-width="250">
                    <p class=".text-primary font-weight-bold text-h5">Nombre Completo</p>
                    <p class="text-secondary font-weight-bold text-h5">Juan Escutia</p>
                  </v-sheet>
                  <v-sheet class="pa-2 ma-2  " min-width="200">
                    <p class=".text-primary font-weight-bold text-h5 ">Matricula</p>
                    <p class="text-secondary font-weight-bold text-h5">A01361234</p>
                  </v-sheet>
                </div>

              <div class="d-flex flex-row w-100 justify-space-between align-content-center">

                  <v-sheet align="start" min-width="250" class="pa-2 ma-2">
                    <p class=".text-primary font-weight-bold text-h5">Correo Institucional</p>
                    <p class="text-secondary font-weight-bold text-h5">A01361234@tec.mx</p>
                  </v-sheet>


                  <v-sheet align="start" min-width="200" class="pa-2 ma-2">
                    <p class=".text-primary font-weight-bold text-h5">Carrera</p>
                    <p class="text-secondary font-weight-bold text-h5">ISC</p>
                  </v-sheet>

              </div>

                <div class="w-100">
                  <v-sheet align="start" class="pa-2 ma-2">
                    <p class=".text-primary font-weight-bold text-h5">Correo Personal</p>
                    <p class="text-secondary font-weight-bold text-h5">murioporlapatria@gmail.com</p>
                  </v-sheet>
                </div>

          </v-container>
      </div>
    </v-responsive>
  </v-container>
</template>

<script >

</script>