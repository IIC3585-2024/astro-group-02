// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";

// Your Firebase config here
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
const cong = initializeApp(firebaseConfig);

export default cong;
// Now you can use Firebase services in your React app!