// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR3zXvQPrNe408bMxDdHLaNbVNmLZNjpw",
  authDomain: "react-project-3ae6f.firebaseapp.com",
  projectId: "react-project-3ae6f",
  storageBucket: "react-project-3ae6f.appspot.com",
  messagingSenderId: "962402582717",
  appId: "1:962402582717:web:717cd6ec8da87a2478b7d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export  default auth;