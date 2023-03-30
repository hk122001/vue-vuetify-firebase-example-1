<template>
  <v-app id="inspire">
    <v-app-bar color="#384FFE">
      <v-img
        src="src\assets\logoTec.png"
        width="250" 
        maxheight="250">
      </v-img>
      <template v-slot:append>
        <v-tabs>
          <v-tab>Inicio</v-tab>
          <v-tab>Lista de Materias</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  
</script>