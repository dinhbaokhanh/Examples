import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAE-fNEQibX-Jb4VARvG9SKaBIUa48aLx0",
    authDomain: "todolist-f0179.firebaseapp.com",
    projectId: "todolist-f0179",
    storageBucket: "todolist-f0179.appspot.com",
    messagingSenderId: "85488928012",
    appId: "1:85488928012:web:37bb2937ae487dc1bf3529",
    measurementId: "G-1X7SFF2ZC0"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
