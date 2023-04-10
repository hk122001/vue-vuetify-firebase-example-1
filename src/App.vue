<script setup>
  import { ref, watchEffect } from 'vue' // used for conditional rendering
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const loggedIn = ref(true)
  // runs after firebase is initialized
  const auth = getAuth()
  onAuthStateChanged(auth, (user) =>  {
      if (user) {
        loggedIn.value = true // if we have a user
        router.push('/')
      } else {
        loggedIn.value = false // if we do not
        router.push('login')
      }
  })
  async function logout() {
    await signOut()
    router.push('/login')
  }
</script>

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
      <template v-if="loggedIn" v-slot:append>
        <v-tabs color="#384FFE">
          <RouterLink to="/"><v-tab><p>Inicio</p></v-tab></RouterLink>
          <RouterLink to="/materias"><v-tab><p>Lista de Materias</p></v-tab></RouterLink>
          <v-img
            src="src\assets\logout-variang.svg"
            width="50" 
            maxheight="50"
            @onclick="logout">
          </v-img>
        </v-tabs>
      </template>
      <template v-else v-slot:append>
        <v-tabs color="#384FFE">
          <RouterLink to="/login"><v-tab><p>Iniciar Sesión</p></v-tab></RouterLink>
          <RouterLink to="/register"><v-tab><p>Registrarse</p></v-tab></RouterLink>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>