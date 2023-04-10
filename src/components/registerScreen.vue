<script setup>
  import { ref } from 'vue'
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import { getFirestore, setDoc, doc } from 'firebase/firestore'
  import { useRouter } from 'vue-router'
  const valid = ref(false)

  const router = useRouter()

  const userCred = ref({
    name: '',
    mat: '',
    schoolEmail: '',
    personalEmail: '',
    password: '',
    password2: '',
    career: ''
  })
  const terms = ref(false)
  const alert = ref({
    dialog: false,
    title: 'Los datos no son válidos',
    message: 'Favor de verificar que los datos introducidos sean correctos'
  })
  async function submit() {
    if (!valid.value) {
      alert.value = {
        dialog: true,
        title: 'Los datos no son válidos',
        message: 'Favor de verificar que los datos introducidos sean correctos'
      }
      return
    }
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userCred.value.schoolEmail,
        userCred.value.password
      )
      const db = getFirestore()
      const { password, password2, ...data } = userCred.value
      await setDoc(doc(db, 'users', userCredential.user.uid), data)
      alert.value.dialog = false
      router.push('home')
    } catch {
      alert.value = {
        dialog: true,
        title: 'Error',
        message: 'No se pudo crear la cuenta.'
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
            v-model="userCred.name"
            type="name"
            label="Nombre Completo"
            variant="outlined"
            :rules="[
              (value) => !!value || 'Campo requerido',
            ]"
          ></v-text-field>
          <v-text-field
            class="blue"
            v-model="userCred.mat"
            type="id"
            label="Matrícula"
            variant="outlined"
            :rules="[
              (value) => !!value || 'Campo requerido'
            ]"
          ></v-text-field>
          <v-text-field
            class="blue"
            v-model="userCred.schoolEmail"
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
            v-model="userCred.personalEmail"
            type="email"
            label="Correo Personal"
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
            :rules="[
              (value) => !!value || 'Campo requerido',
              (value) => value.length >= 6 || 'Mínimo 6 caracteres'
            ]"
          ></v-text-field>
          <v-text-field
            class="blue"
            v-model="userCred.password2"
            type="password"
            label="Verificar Contraseña"
            variant="outlined"
            :rules="[
              (value) => !!value || 'Campo requerido',
              (value) => value.length >= 6 || 'Mínimo 6 caracteres',
              (value) => value === userCred.password || 'Las contraseñas deben de coincidir'
            ]"
          ></v-text-field>
          <v-checkbox
            label="Acepto términos y condiciones"
            v-model="terms"
            color="blue"
            :rules="[(value) => !!value || 'Es obligatorio aceptar terminos y condiciones']"
          ></v-checkbox>
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