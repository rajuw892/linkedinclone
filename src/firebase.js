import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCXabSaeo-NJTqmVSvI6bvBlE2uc9R99N0",
    authDomain: "linkedinclone-2b02a.firebaseapp.com",
    projectId: "linkedinclone-2b02a",
    storageBucket: "linkedinclone-2b02a.appspot.com",
    messagingSenderId: "94512040639",
    appId: "1:94512040639:web:bbb6d47a77e64850aad40a",
    measurementId: "G-TVY9M6WE0B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};