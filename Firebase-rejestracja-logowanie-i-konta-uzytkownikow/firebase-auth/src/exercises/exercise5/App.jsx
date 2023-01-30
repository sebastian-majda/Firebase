import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { GuestHomePage } from "../../guest/GuestHomePage";
import { RegisterForm } from "../../guest/RegisterForm";
import { AuthenticatedHomePage } from "../../authenticated/AuthenticatedHomePage";

export default function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password);

  const handleLogOut = () => signOut(auth);

  const handleRegister = ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password);

  if (currentUser) {
    return (
      <AuthenticatedHomePage
        currentUser={currentUser}
        onLogOut={handleLogOut}
      />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<GuestHomePage onLogin={handleLogin} />} />
      <Route
        path="/register"
        element={<RegisterForm onSubmit={handleRegister} />}
      />
    </Routes>
  );
}
