import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB2yVoyXySofkrGGyvqBl-SDTgYhli7Mi4",
    authDomain: "linkedin-clone-c73e7.firebaseapp.com",
    projectId: "linkedin-clone-c73e7",
    storageBucket: "linkedin-clone-c73e7.appspot.com",
    messagingSenderId: "314714334953",
    appId: "1:314714334953:web:22e16705999bcc8107f278",
    measurementId: "G-PMZPSZYSP0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};