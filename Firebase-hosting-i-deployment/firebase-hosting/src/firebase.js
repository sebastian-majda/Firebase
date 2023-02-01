import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGIIA_rWGRwDJ4Zxw0D8ApwkQu5knR3TU",
  authDomain: "sebastian-project-a24fd.firebaseapp.com",
  projectId: "sebastian-project-a24fd",
  storageBucket: "sebastian-project-a24fd.appspot.com",
  messagingSenderId: "375416779334",
  appId: "1:375416779334:web:5d618d283cd332819a1047",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
