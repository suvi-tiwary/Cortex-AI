
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyC2Owq3JCQOjNXiR8gBlUsjl-Yy4vz96uE",
  authDomain: "contextai-f0ea7.firebaseapp.com",
  projectId: "contextai-f0ea7",
  storageBucket: "contextai-f0ea7.firebasestorage.app",
  messagingSenderId: "497148780465",
  appId: "1:497148780465:web:f488ec79994103bcd5e790"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()