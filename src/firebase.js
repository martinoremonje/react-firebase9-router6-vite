
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD_53c3O68Vj0it-58l_P4qMZeRd4HMOqY",
  authDomain: "react-udemy-firebase-8652e.firebaseapp.com",
  projectId: "react-udemy-firebase-8652e",
  storageBucket: "react-udemy-firebase-8652e.firebasestorage.app",
  messagingSenderId: "784569204381",
  appId: "1:784569204381:web:61341634ab94a376cf9e74"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}