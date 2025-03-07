// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfJ9z3lVjn3a-Fnhl4w6SlY0FckIjHR_0",
  authDomain: "dashboard-244b9.firebaseapp.com",
  projectId: "dashboard-244b9",
  storageBucket: "dashboard-244b9.appspot.com", // Fixed line
  messagingSenderId: "221253050949",
  appId: "1:221253050949:web:cc58427cc998b764f2792c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
