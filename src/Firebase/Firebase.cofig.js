// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb1Bh1duMwadVrQuQGA1FM0rX7ZyZd96E",
  authDomain: "auth-recap-context-api.firebaseapp.com",
  projectId: "auth-recap-context-api",
  storageBucket: "auth-recap-context-api.appspot.com",
  messagingSenderId: "259047239148",
  appId: "1:259047239148:web:f809a879905200f9b624c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth