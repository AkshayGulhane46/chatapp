// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import { Firestore, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHnpyYLU_0mduiw85Ma8Jx4U0wn36fEJU",
  authDomain: "chatapp-d3619.firebaseapp.com",
  projectId: "chatapp-d3619",
  storageBucket: "chatapp-d3619.appspot.com",
  messagingSenderId: "1014667552443",
  appId: "1:1014667552443:web:d79a390a1641aa4fe16b9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
