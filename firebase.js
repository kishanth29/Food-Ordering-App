import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCsg4LK0xsG5yXHTQM8P_dFTmXKPfzzU7w",
  authDomain: "food-2cf97.firebaseapp.com",
  projectId: "food-2cf97",
  storageBucket: "food-2cf97.firebasestorage.app",
  messagingSenderId: "223483236626",
  appId: "1:223483236626:web:268d80375d8ffd0d7e63cb",
  measurementId: "G-KEH4S5WLRY"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;