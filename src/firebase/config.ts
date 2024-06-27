import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

export const projectAuth = getAuth(app);
export default app;
