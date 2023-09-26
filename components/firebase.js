// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJ11eO7axmyE_LPhshPaCwCgp61w89tVs",
    authDomain: "fir-db-fc73d.firebaseapp.com",
    projectId: "fir-db-fc73d",
    storageBucket: "fir-db-fc73d.appspot.com",
    messagingSenderId: "661842434922",
    appId: "1:661842434922:web:7a077b2a50e9853af66313"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }