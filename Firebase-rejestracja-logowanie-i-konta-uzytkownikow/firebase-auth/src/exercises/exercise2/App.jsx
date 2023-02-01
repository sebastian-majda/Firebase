import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthenticatedHomePage } from "../../authenticated/AuthenticatedHomePage";
import { GuestHomePage } from "../../guest/GuestHomePage";
import { RegisterForm } from "../../guest/RegisterForm";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
// - Dodaj state, w którym będziesz przechowywać dane o aktualnie zalogowanym użytkowniku
// - Stwórz nowy efekt, który będzie odpalany tylko raz w momencie zamontowania komponentu.
// - W efekcie dodaj listener za pomocą funkcji: `onAuthStateChanged(auth, (user) => {})`
// - Zapisuj obiekt user do stanu za każdym razem gdy funkcja zostanie wywołana
// - W przypadku gdy w state ustawiony jest user, wyrenderuj tylko komponent: `AuthenticatedHomePage`, oraz przekaż obiekt użytkownika jako prop: `currentUser`
// - Jeśli w state ustawiony jest `null`, wyrenderuj ścieżki do logowania / rejestracji

// * Zaimplementuj proces `unsubscribe`. Jest to funkcja zwracana z wywołania `onAuthStateChanged`. Aby ją odsubskrybować, powinna zostać wywołana w cleanup function efektu.

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); //user jako cały obiekt
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password).then((data) =>
      console.log(data.user)
    );

  if (currentUser) {
    //kiedy currentUSer nie jest null
    return <AuthenticatedHomePage currentUser={currentUser} />;
  }
  return (
    <Routes>
      <Route path="/" element={<GuestHomePage onLogin={handleLogin} />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}
