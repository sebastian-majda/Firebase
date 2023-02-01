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
// - Stwórz nową funkcję obsługującą formularz rejestracji (prop: `onSubmit` w komponencie `RegisterForm`)
// - Przekaż dane logowania do `firebase` za pomocą funkcji: `createUserWithEmailAndPassword(auth, email, password)`
// - Spróbuj dodać nowego użytkownika. Następnie przejdź do panelu Firebase w przeglądarce i zweryfikuj, czy użytkownik został dodany poprawnie

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setCurrentUser);

    return unsubscribe;
  }, []);

  const handleLogin = ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password).then(console.log);
  const handleRegister = ({ email, password }) =>
    createUserWithEmailAndPassword(auth, email, password);

  if (currentUser) {
    return <AuthenticatedHomePage currentUser={currentUser} />;
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
