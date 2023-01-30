import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { AuthenticatedHomePage } from "../../authenticated/AuthenticatedHomePage";
import { GuestHomePage } from "../../guest/GuestHomePage";
import { RegisterForm } from "../../guest/RegisterForm";
import { auth } from "../../firebase";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setCurrentUser);

    return unsubscribe;
  }, []);

  const handleLogin = ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password).then(console.log);

  if (currentUser) {
    return <AuthenticatedHomePage currentUser={currentUser} />;
  }

  return (
    <Routes>
      <Route path="/" element={<GuestHomePage onLogin={handleLogin} />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}
