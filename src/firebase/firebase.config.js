// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrPZCD63dkJeBLrHTVEGUUPneABgrvhX0",
  authDomain: "brand-shop-df99a.firebaseapp.com",
  projectId: "brand-shop-df99a",
  storageBucket: "brand-shop-df99a.appspot.com",
  messagingSenderId: "116655193970",
  appId: "1:116655193970:web:204c6bcaf4914e8369a7eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;