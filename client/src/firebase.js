// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fst-m-a.firebaseapp.com",
  projectId: "fst-m-a",
  storageBucket: "fst-m-a.appspot.com",
  messagingSenderId: "251092328410",
  appId: "1:251092328410:web:707dceb10edfd3f1462ae3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);