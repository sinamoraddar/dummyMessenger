// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/firestore";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
import { contacts } from "../Utils/contacts";
import uuidv1 from "uuid/v1";
import moment from "moment";
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

//initialize chats collection
/* database
  .collection("users")
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const tempUUID = uuidv1();
      database
        .collection("chats")
        .doc(doc.id)
        .collection("messages")
        .doc(tempUUID)
        .set([
          {
            messageId: tempUUID,
            author: doc.id,
            content: `
            
    hey there i'm fusing this app for the first time `,
            submissionTime: moment().valueOf()
          }
        ])
        .then(doc => {
          console.log(doc);
        })
        .catch(error => console.log(error));
      // console.log(doc);
      // if (doc.exists) {
      //   console.log("Document data:", doc.data());
      // } else {
      //   // doc.data() will be undefined in this case
      //   console.log("No such document!");
      // }
    });
  })
  .catch(function(error) {
    console.log("Error getting document:", error);
  }); */

export { database, firebase as default };
