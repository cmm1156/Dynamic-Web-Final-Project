import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "final-project-2-55bab.firebaseapp.com",
  databaseURL: "https://final-project-2-55bab-default-rtdb.firebaseio.com",
  projectId: "final-project-2-55bab",
  storageBucket: "final-project-2-55bab.appspot.com",
  messagingSenderId: "396105694122",
  appId: "1:396105694122:web:d32bbc171f1816841c89d3",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
