<template>
  <v-container align="center">
    <h1 class="text-primary text-h3 font-weight-bold">INFORMACIÓN DEL ALUMNO</h1>
      <v-img
        width="250"
        max-height="250"
        cover
        class="rounded-image"
        src="src\assets\juan-escutia2.jpeg">
      </v-img>
    </v-container>
    <v-container fill-height fluid>
          <v-row no-gutters class="justify-center">
            <v-col
              cols="12"
              lg="3"
              md="4"
              sm="5"
            >
              <v-sheet align="start" class="pa-2 ma-2" min-width="250">
                <p class="text-primary font-weight-bold text-h5">Nombre Completo</p>
                <p class="text-secondary font-weight-bold text-h5">Juan Escutia</p>
              </v-sheet>
              <v-sheet align="start" min-width="250" class="pa-2 ma-2">
                <p class="text-primary font-weight-bold text-h5">Correo Institucional</p>
                <p class="text-secondary font-weight-bold text-h5">A01361234@tec.mx</p>
              </v-sheet>
              <v-sheet align="start" class="pa-2 ma-2">
                <p class="text-primary font-weight-bold text-h5">Correo Personal</p>
                <p class="text-secondary font-weight-bold text-h5">murioporlapatria@gmail.com</p>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              lg="2"
              md="3"
              sm="4"
            >
            <v-sheet align="end" class="pa-2 ma-2" min-width="200">
              <p class="text-primary font-weight-bold text-h5 ">Matricula</p>
              <p class="text-secondary font-weight-bold text-h5">A01361234</p>
            </v-sheet>
            <v-sheet align="end" min-width="200" class="pa-2 ma-2">
              <p class="text-primary font-weight-bold text-h5">Carrera</p>
              <p class="text-secondary font-weight-bold text-h5">ISC</p>
            </v-sheet>
            </v-col>
          </v-row>
    </v-container>
  
</template>

<script >

</script>