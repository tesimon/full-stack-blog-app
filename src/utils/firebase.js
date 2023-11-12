// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "full-stack-blog-app.firebaseapp.com",
  projectId: "full-stack-blog-app",
  storageBucket: "full-stack-blog-app.appspot.com",
  messagingSenderId: "477692899899",
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
