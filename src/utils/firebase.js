// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYr13P-w1OZBeMpZ5Hk41z-d6yjdnxHRk",
  authDomain: "netflixgpt-4f469.firebaseapp.com",
  projectId: "netflixgpt-4f469",
  storageBucket: "netflixgpt-4f469.appspot.com",
  messagingSenderId: "205975300643",
  appId: "1:205975300643:web:e8acbd94b45f98067d1f96",
  measurementId: "G-54F4CR461W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
