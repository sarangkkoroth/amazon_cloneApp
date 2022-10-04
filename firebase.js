// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBdeJiEisfdfYx-v66-jBn6588oykNvDqY",
    authDomain: "clone-461ec.firebaseapp.com",
    databaseURL: "https://clone-461ec.firebaseio.com",
    projectId: "clone-461ec",
    storageBucket: "clone-461ec.appspot.com",
    messagingSenderId: "445053648774",
    appId: "1:445053648774:web:99463567d0177b8ae0f607",
    measurementId: "G-PXE6TB92CY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
  