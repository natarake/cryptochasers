// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGv0Ea2V1d29-kIRqzeHXsvvmPE8e2w3Q",
  authDomain: "cryptochasers-89689.firebaseapp.com",
  projectId: "cryptochasers-89689",
  storageBucket: "cryptochasers-89689.appspot.com",
  messagingSenderId: "183723662991",
  appId: "1:183723662991:web:181c0de292f6afcb1f5afa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
