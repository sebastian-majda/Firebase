import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV7_VgXrWWY2d9WXOqFaeqIP7N8MYPN6Y",
  authDomain: "infoshare-project-8d4ae.firebaseapp.com",
  projectId: "infoshare-project-8d4ae",
  storageBucket: "infoshare-project-8d4ae.appspot.com",
  messagingSenderId: "388575515964",
  appId: "1:388575515964:web:e8ccce35649780c540fa39",
  measurementId: "G-V2LHDWFYZS",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
