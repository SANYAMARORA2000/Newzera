import firebase from "firebase";



let firebaseConfig = {

  apiKey: "AIzaSyBRpqOQSfWgttRe5vAWGjxQX7LjERNF5fk",
  authDomain: "newzera-84516.firebaseapp.com",
  projectId: "newzera-84516",
  storageBucket: "newzera-84516.appspot.com",
  messagingSenderId: "693961349726",
  appId: "1:693961349726:web:a31bdaa998518f6880b2cf"
   
  };

  let firebaseApp=firebase.initializeApp(firebaseConfig);
export let firebaseAuth=firebaseApp.auth();
export let firebaseStorage = firebaseApp.storage();
export let firebaseDB = firebaseApp.firestore();
export let timeStamp=firebase.firestore.FieldValue.serverTimestamp;

