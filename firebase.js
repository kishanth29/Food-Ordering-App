import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBTHRG_R8cy0cRQpfTO1dAomwRSopAOQ38",
    authDomain: "uber-eats-clone-1428c.firebaseapp.com",
    projectId: "uber-eats-clone-1428c",
    storageBucket: "uber-eats-clone-1428c.appspot.com",
    messagingSenderId: "1056296867501",
    appId: "1:1056296867501:web:b7123d8cd6c6cf3efd9824",
    measurementId: "G-DZBCE330EV"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;