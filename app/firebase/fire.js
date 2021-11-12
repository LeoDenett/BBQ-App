import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCHxeVlUJcTRvPbHc-4ThnlfS-Pz9c_ob4",
    authDomain: "bbqrecepis.firebaseapp.com",
    projectId: "bbqrecepis",
    storageBucket: "bbqrecepis.appspot.com",
    messagingSenderId: "29298474171",
    appId: "1:29298474171:web:595b6682e3b594563cbd9e",
    measurementId: "G-HG0M025Z61"
  };
  // Initialize Firebase
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;