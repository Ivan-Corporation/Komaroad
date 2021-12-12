import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBXxL_mKsXz14bwWVD4SzjUUU5RXNVbUOg",
  authDomain: "komaroad.firebaseapp.com",
  projectId: "komaroad",
  storageBucket: "komaroad.appspot.com",
  messagingSenderId: "392324622520",
  appId: "1:392324622520:web:c625af7ed8be9146cf2c4d",
  measurementId: "G-LEKTE7F8QP",
  databaseURL: 'https://komaroad-default-rtdb.firebaseio.com/',
  
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app);