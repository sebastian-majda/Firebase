import { Routes, Route } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GuestHomePage } from "../../guest/GuestHomePage";
import { RegisterForm } from "../../guest/RegisterForm";
import { auth } from "../../firebase";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GuestHomePage />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}
