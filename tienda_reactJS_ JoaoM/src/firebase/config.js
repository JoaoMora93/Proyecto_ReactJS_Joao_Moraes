// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUzw-yjck-MZ0LiFpM0ZhOlh1M0zjGAEo",
  authDomain: "amaris-f7c36.firebaseapp.com",
  projectId: "amaris-f7c36",
  storageBucket: "amaris-f7c36.appspot.com",
  messagingSenderId: "162155988144",
  appId: "1:162155988144:web:aa7766b7e2b026a0b2a775",
  measurementId: "G-Q490XVLE83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)