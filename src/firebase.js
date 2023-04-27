// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfH4VWTdquArlCONYxgs-km6Lt-jugcac",
  authDomain: "kaas-cd852.firebaseapp.com",
  projectId: "kaas-cd852",
  storageBucket: "kaas-cd852.appspot.com",
  messagingSenderId: "210819719788",
  appId: "1:210819719788:web:895cdcf1a6a638566fee49",
  measurementId: "G-3H5CKFP98K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app , auth};