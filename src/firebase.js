// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBBxZWFaHLh1Wg_P-pQtDyrUx0gCZZ430Y',
  authDomain: 'chat-673e1.firebaseapp.com',
  projectId: 'chat-673e1',
  storageBucket: 'chat-673e1.appspot.com',
  messagingSenderId: '684482652669',
  appId: '1:684482652669:web:f80896aa9736c5e8069194'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()