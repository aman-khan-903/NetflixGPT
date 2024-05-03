// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-6fTPKh7YD4KNGmAY29sqNyuZqMZHH_I",
  authDomain: "netflix-gpt-903.firebaseapp.com",
  projectId: "netflix-gpt-903",
  storageBucket: "netflix-gpt-903.appspot.com",
  messagingSenderId: "791379396261",
  appId: "1:791379396261:web:7fcaed5da4b301017d6f4c",
  measurementId: "G-BPYBF3631Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth(); 