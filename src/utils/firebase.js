// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwN8PLztjyp2gC1j-3Rb2aBiqnx7kDqvw",
  authDomain: "netflixgpt-yashgulia.firebaseapp.com",
  projectId: "netflixgpt-yashgulia",
  storageBucket: "netflixgpt-yashgulia.appspot.com",
  messagingSenderId: "665398525545",
  appId: "1:665398525545:web:c1a94dcfd3c14bf8d6ecf8",
  measurementId: "G-C11ZC9Y2FH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
