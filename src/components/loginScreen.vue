<script setup>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  const valid = ref(false)

  const userCred = ref({
    email: '',
    password: ''
  })

  
  const alert = ref({
    dialog: false,
    title: 'Los datos no son válidos',
    message: 'Favor de introducir un correo institucional y contraseña válidos'
  })

  async function submit() {
    if (!valid.value){
      alert.value = {
        dialog: true,
        title: 'Los datos no son válidos',
        message: 'Favor de introducir un correo institucional y contraseña válidos'
      }
      return
    }
    try{
      const auth = getAuth()
      await signInWithEmailAndPassword(auth, formData.value.email, formData.value.password)
      alert.value.dialog = false
      router.push('/')
    }catch (error){
      let message
      if(error.code == 'auth/wrong-password'){
        message = 'La contraseña es incorrecta'
      }else{
        message = 'El correo no cuenta con una cuenta asociada'
      }
      alert.value = {
        dialog: true,
        title: 'Error',
        message
      }
    }
  }
</script>

<template>
  <v-container fill-height align="center">
    <v-row align="center" no-gutters>
      <v-col>
        <h1 class="text-primary text-h3 font-weight-bold">INICIO DE SESÍON</h1>
        <br>
        <br>
        <v-form v-model="valid" @submit.prevent="submit">
          <v-text-field
            class="blue"
            v-model="userCred.email"
            type="email"
            label="Correo Institucional"
            variant="outlined"
            :rules="[
              (value) => !!value || 'Campo requerido',
              (value) =>
                !value ||
                /.+@.+\..+/.test(value) ||
                'Introduzca un correo electronico'
            ]"
          ></v-text-field>
          <v-text-field
            class="blue"
            v-model="userCred.password"
            type="password"
            label="Contraseña"
            variant="outlined"
            :rules="[(value) => value.length >= 6 || 'Mínimo 6 caracteres']"
          ></v-text-field>
          <v-btn
            class="submit"
            color="#384FFE"
            variant="text"
            type="submit"
            >
            <p class="text-button font-weight-bold text-h6">Iniciar sesión</p>
          </v-btn>
          <v-dialog v-model="alert.dialog">
            <v-sheet class="pa-8 mx-auto" width="100%" max-width="800" elevation="2" rounded="xl">
              <h1 class="text-primary text-h4 font-weight-bold" align="center">{{ alert.title }}</h1>
              <br>
              <div class="dialog_info">
                <p class="text-secondary cards">{{ alert.message }}</p>
              </div>
              <br>
              <v-row>
                <v-spacer />
                <v-row>
                  <v-col></v-col>
                  <v-col></v-col>
                  <v-col>
                    <v-btn
                      color="#384FFE"
                      block
                      variant="text"
                      @click="alert.dialog = false"
                      >
                      <p class="text-primary font-weight-bold text-h6">CERRAR</p>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-row>
            </v-sheet>
          </v-dialog>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>