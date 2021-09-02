import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBfBtNp7q6SJUZz8-WhD1dTyUGjS4_2AmU",
    authDomain: "letmeask-52538.firebaseapp.com",
    databaseURL: "https://letmeask-52538-default-rtdb.firebaseio.com",
    projectId: "letmeask-52538",
    storageBucket: "letmeask-52538.appspot.com",
    messagingSenderId: "784036657432",
    appId: "1:784036657432:web:ef2b3eef020185ffdf466d"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database();