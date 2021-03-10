import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQXdoNDGQYjzRLC-2Zp2jK7wWzaNMzs6Y",
    authDomain: "movie-roulette-2020.firebaseapp.com",
    projectId: "movie-roulette-2020",
    storageBucket: "movie-roulette-2020.appspot.com",
    messagingSenderId: "106281364809",
    appId: "1:106281364809:web:b93150f8b727247176fe98",
    measurementId: "G-PSV88L2DM2"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
