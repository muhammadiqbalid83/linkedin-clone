import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDOji2Mdxh-KmdljEKQBXH4i1R8_aGDvU",
  authDomain: "linkedin-clone-f345d.firebaseapp.com",
  projectId: "linkedin-clone-f345d",
  storageBucket: "linkedin-clone-f345d.appspot.com",
  messagingSenderId: "668268392630",
  appId: "1:668268392630:web:9d3fb805e274da205ff617",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
