// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, increment } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz_DoDS4xwv2PvaA3iqQ1HN6UHVmiXLnM",
  authDomain: "nizreact-toast.firebaseapp.com",
  projectId: "nizreact-toast",
  storageBucket: "nizreact-toast.firebasestorage.app",
  messagingSenderId: "1002475384493",
  appId: "1:1002475384493:web:6bb39814a000fef11de024",
  measurementId: "G-NXVT2QV7NX"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Function to increment countValue
export const handleIncrement = async () => {
  try {
    const toastDocRef = doc(db, "toast-count", "toast-site-count"); // Path to your document
    await updateDoc(toastDocRef, {
      countValue: increment(1),
    });
    console.log("countValue incremented by 1!");
  } catch (error) {
    console.error("Error incrementing countValue:", error);
  }
};