import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTKFeDUwN0FN1y5fuDLeGVI9YIsDHjTHI",
  authDomain: "test-oldman.firebaseapp.com",
  projectId: "test-oldman",
  storageBucket: "test-oldman.appspot.com",
  messagingSenderId: "215475027970",
  appId: "1:215475027970:web:83ff84b2105b215ccca71b",
  measurementId: "G-PHXBWE9CM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
