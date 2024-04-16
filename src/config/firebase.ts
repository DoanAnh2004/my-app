// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB92TM5EDMgQIXgJ13b-ogSY9fg3X3BXjk",
  authDomain: "project-1-6f0ef.firebaseapp.com",
  projectId: "project-1-6f0ef",
  storageBucket: "project-1-6f0ef.appspot.com",
  messagingSenderId: "641272825838",
  appId: "1:641272825838:web:dce52c8c8b6e9842beb0ff",
  measurementId: "G-L032WY9GDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);