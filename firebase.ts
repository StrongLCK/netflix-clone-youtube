/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKBHUCScTom40dT3lSwWjyuu6yAFWwtn4",
  authDomain: "netflix-clone-afe78.firebaseapp.com",
  projectId: "netflix-clone-afe78",
  storageBucket: "netflix-clone-afe78.appspot.com",
  messagingSenderId: "730306153674",
  appId: "1:730306153674:web:b75b627a395b9fb4d2f833",
  measurementId: "G-V9B7DDDDFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKBHUCScTom40dT3lSwWjyuu6yAFWwtn4",
    authDomain: "netflix-clone-afe78.firebaseapp.com",
    projectId: "netflix-clone-afe78",
    storageBucket: "netflix-clone-afe78.appspot.com",
    messagingSenderId: "730306153674",
    appId: "1:730306153674:web:b75b627a395b9fb4d2f833",
    measurementId: "G-V9B7DDDDFF"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
