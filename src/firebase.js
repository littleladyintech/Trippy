// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIGSNe3RQ5I-V2O23K3lwNV8-tcsbRv9k",
  authDomain: "authentication-acae3.firebaseapp.com",
  projectId: "authentication-acae3",
  storageBucket: "authentication-acae3.appspot.com",
  messagingSenderId: "624274663682",
  appId: "1:624274663682:web:e5e2213828ff98856fba1b",
  measurementId: "G-41CE6W8YEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
export {auth}