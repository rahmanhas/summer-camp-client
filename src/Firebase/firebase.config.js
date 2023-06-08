// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmOFAbRGKorc2LU2xFfYt7QMWhljRjLSI",
  authDomain: "dance-flow-academy.firebaseapp.com",
  projectId: "dance-flow-academy",
  storageBucket: "dance-flow-academy.appspot.com",
  messagingSenderId: "1072992925866",
  appId: "1:1072992925866:web:5ff448bba0be20e6f9b8d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);