// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore"

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_fWYfa_gv882LK6_FFyJEdyXnLOqlKz4",
    authDomain: "cloud-iot-app.firebaseapp.com",
    projectId: "cloud-iot-app",
    storageBucket: "cloud-iot-app.appspot.com",
    messagingSenderId: "562960074488",
    appId: "1:562960074488:web:133d7e77c07f971d42dd0d",
    measurementId: "G-GZYDXQZH0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app);
export default app;