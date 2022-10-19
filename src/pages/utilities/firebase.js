// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBc7zaw9-mJEvATcmMdOjdm7uqw86bWxxk",
    authDomain: "vueproject-67f37.firebaseapp.com",
    projectId: "vueproject-67f37",
    storageBucket: "vueproject-67f37.appspot.com",
    messagingSenderId: "802496970575",
    appId: "1:802496970575:web:dae1ed9be4220bfdd7cf3a",
    databaseURL: "https://vueproject-67f37-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;