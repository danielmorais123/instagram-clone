import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr5eXhdNtKU4KB34Jf0JxSWYF21KfMkAk",
  authDomain: "authpv.firebaseapp.com",
  projectId: "authpv",
  storageBucket: "authpv.appspot.com",
  messagingSenderId: "926680011417",
  appId: "1:926680011417:web:8da79e1a0aa307d4b15e08",
  measurementId: "G-JCB431MWG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };

export default app;
