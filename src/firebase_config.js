import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATbbQc0fQ1IayF5cy1dgj972Ra9kH842o",
  authDomain: "todo-list-294c4.firebaseapp.com",
  projectId: "todo-list-294c4",
  storageBucket: "todo-list-294c4.appspot.com",
  messagingSenderId: "683542207996",
  appId: "1:683542207996:web:e612381d2e46763c5aa679"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

//import firebase from "firebase";

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyATbbQc0fQ1IayF5cy1dgj972Ra9kH842o",
//   authDomain: "todo-list-294c4.firebaseapp.com",
//   projectId: "todo-list-294c4",
//   storageBucket: "todo-list-294c4.appspot.com",
//   messagingSenderId: "683542207996",
//   appId: "1:683542207996:web:e612381d2e46763c5aa679"
// };

// const app = initializeApp(firebaseConfig);

// const db = app.firestore();

// export default db;