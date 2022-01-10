// Import the functions you need from the SDKs you need
import firebase from "firebase";
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATbbQc0fQ1IayF5cy1dgj972Ra9kH842o",
  authDomain: "todo-list-294c4.firebaseapp.com",
  projectId: "todo-list-294c4",
  storageBucket: "todo-list-294c4.appspot.com",
  messagingSenderId: "683542207996",
  appId: "1:683542207996:web:e612381d2e46763c5aa679"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };