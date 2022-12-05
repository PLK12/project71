import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCx3s7PC8Q01XIAVRPRC2exxO8H8MovzX0",
    authDomain: "project-71-4c23b.firebaseapp.com",
    projectId: "project-71-4c23b",
    storageBucket: "project-71-4c23b.appspot.com",
    messagingSenderId: "657307075714",
    appId: "1:657307075714:web:8760b20b21dca53fc6a09b"
  };
  
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
