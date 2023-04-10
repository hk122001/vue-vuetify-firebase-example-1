import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { firebaseConfig } from './firebaseInfo'

const FirebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(FirebaseApp)
export const db = getFirestore(FirebaseApp)
export const storage = getStorage(FirebaseApp)