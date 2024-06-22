// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDae6Gf5IxTwuEbGiOfDq_LiOFSQ1IKAU0",
    authDomain: "movies-feac2.firebaseapp.com",
    projectId: "movies-feac2",
    storageBucket: "movies-feac2.appspot.com",
    messagingSenderId: "436558478735",
    appId: "1:436558478735:web:54303c44e01070dcd69ffa",
    measurementId: "G-RKT97M9C4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const projectAuth = getAuth(app);