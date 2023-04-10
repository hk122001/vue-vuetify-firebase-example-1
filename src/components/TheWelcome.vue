<script setup>
  import { onMounted, ref } from 'vue'
  import { getAuth } from 'firebase/auth'
  import { getFirestore, getDoc, doc } from 'firebase/firestore'
  import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage'
  const userCred = ref({
    name: '',
    mat: '',
    schoolEmail: '',
    personalEmail: '',
    career: ''
  })
  const userImage = ref('')
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
  }
  onMounted(async () => {
    const auth =  getAuth()
    let user =  auth.currentUser
    while(!user){
      await sleep(10)
      user =  auth.currentUser
    }
    const db = getFirestore()
    const docRef = doc(db, 'users', user.uid)
    const docSnap = await getDoc(docRef)
    const storage = getStorage()
    userImage.value = await getDownloadURL(storageRef(storage, 'juan-escutia2.jpeg'))
    userCred.value = docSnap.data()
  })
</script>

<template>
  <v-container align="center">
    <h1 class="text-primary text-h3 font-weight-bold">INFORMACIÓN DEL ALUMNO</h1>
      <v-img
        width="250"
        max-height="250"
        cover
        class="rounded-image"
        src="https://firebasestorage.googleapis.com/v0/b/example-vue-firebase-322a1.appspot.com/o/juan-escutia2.jpeg?alt=media&token=0a188420-ebe4-4460-9a89-1d85efb9e8a8">
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
                <p class="text-secondary font-weight-bold text-h5">{{ userCred.name }}</p>
              </v-sheet>
              <v-sheet align="start" min-width="250" class="pa-2 ma-2">
                <p class="text-primary font-weight-bold text-h5">Correo Institucional</p>
                <p class="text-secondary font-weight-bold text-h5">{{ userCred.schoolEmail }}</p>
              </v-sheet>
              <v-sheet align="start" class="pa-2 ma-2">
                <p class="text-primary font-weight-bold text-h5">Correo Personal</p>
                <p class="text-secondary font-weight-bold text-h5">{{ userCred.personalEmail }}</p>
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
              <p class="text-secondary font-weight-bold text-h5">{{ userCred.mat }}</p>
            </v-sheet>
            <v-sheet align="end" min-width="200" class="pa-2 ma-2">
              <p class="text-primary font-weight-bold text-h5">Carrera</p>
              <p class="text-secondary font-weight-bold text-h5">{{ userCred.career }}</p>
            </v-sheet>
            </v-col>
          </v-row>
    </v-container>
  
</template>