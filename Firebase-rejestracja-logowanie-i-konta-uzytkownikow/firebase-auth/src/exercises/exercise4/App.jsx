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
// - Stwórz nową funkcję obsługującą wylogowywanie (prop: `onLogOut` w komponencie `AuthenticatedHomePage`)
// - Wyloguj użytkownika za pomocą funkcji `signOut(auth)`
// - Jeśli operacja przebiegła poprawnie, powinieneś zostać przekierowany do strony logowania

export default function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
      setCurrentUser(user); //wazne !
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password);

  const handleRegister = ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password);

  const handleLogOut = () => signOut(auth);

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
