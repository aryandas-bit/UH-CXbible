// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaC-EThEEgZ6PVW1CSIE3nTEkRKoP1U2E",
  authDomain: "cx-bible-auth.firebaseapp.com",
  projectId: "cx-bible-auth",
  storageBucket: "cx-bible-auth.firebasestorage.app",
  messagingSenderId: "1082863611346",
  appId: "1:1082863611346:web:1a176478fbe1c0462bec0b",
  measurementId: "G-JV29Q37KC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider, signInWithPopup, signOut, onAuthStateChanged };
