import { Routes, Route } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GuestHomePage } from "../../guest/GuestHomePage";
import { RegisterForm } from "../../guest/RegisterForm";
import { auth } from "../../firebase";
// - Uruchom ćwiczenie za pomocą npm run exercise1
// - Stwórz nową funkcję obsługującą formularz logowania (prop: `onLogin` w komponencie `GuestHomePage`)
// - Przekaż dane logowania do `firebase` za pomocą funkcji: `signInWithEmailAndPassword(auth, email, password)`
// - Zaloguj w konsoli string "Logged" gdy Promise zwrócony przez funkcję rozwiąże się pomyślnie.

export default function App() {
  const handleLogin = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    console.log("Logged");
  };
  return (
    <Routes>
      <Route path="/" element={<GuestHomePage />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}
