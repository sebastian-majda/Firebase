import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { AuthenticatedHomePage } from "../../authenticated/AuthenticatedHomePage";
import { GuestHomePage } from "../../guest/GuestHomePage";
import { RegisterForm } from "../../guest/RegisterForm";
import { auth } from "../../firebase";

export default function App() {
  const handleLogin = ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password).then(console.log);

  return (
    <Routes>
      <Route path="/" element={<GuestHomePage onLogin={handleLogin} />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}
