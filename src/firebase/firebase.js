// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/firestore";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB6xS5yf1JofwEnHY6ApmUwALoi49MeIdw",
  authDomain: "dummymessenger-5fe99.firebaseapp.com",
  databaseURL: "https://dummymessenger-5fe99.firebaseio.com",
  projectId: "dummymessenger-5fe99",
  storageBucket: "dummymessenger-5fe99.appspot.com",
  messagingSenderId: "915877512487",
  appId: "1:915877512487:web:2460762b4b1ca8ebb79502",
  measurementId: "G-1J2D8H4CJ6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
firebase.analytics();

//just testing the firestore
// database
//   .collection("users")
//   .add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   })
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//     console.error("Error adding document: ", error);
//   });
// database
//   .collection("users")
//   .add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   })
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//     console.error("Error adding document: ", error);
//   });

export { database, firebase as default };
