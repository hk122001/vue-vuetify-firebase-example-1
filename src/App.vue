<template>
  <v-app id="inspire">
    <v-app-bar color="#384FFE">
      <template v-slot:prepend>
        <v-img
        src="src\assets\logoTec.png"
        width="250" 
        maxheight="250">
      </v-img>
      </template>
      <template v-slot:append>
        <v-tabs>
          <v-tab><p>Inicio</p></v-tab>
          <v-tab><p>Lista de Materias</p></v-tab>
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