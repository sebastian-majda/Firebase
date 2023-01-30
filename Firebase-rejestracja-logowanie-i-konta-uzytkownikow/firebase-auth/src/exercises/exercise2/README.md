- Dodaj state, w którym będziesz przechowywać dane o aktualnie zalogowanym użytkowniku
- Stwórz nowy efekt, który będzie odpalany tylko raz w momencie zamontowania komponentu. 
- W efekcie dodaj listener za pomocą funkcji: `onAuthStateChanged(auth, (user) => {})`
- Zapisuj obiekt user do stanu za każdym razem gdy funkcja zostanie wywołana
- W przypadku gdy w state ustawiony jest user, wyrenderuj tylko komponent: `AuthenticatedHomePage`, oraz przekaż obiekt użytkownika jako prop: `currentUser`
- Jeśli w state ustawiony jest `null`, wyrenderuj ścieżki do logowania / rejestracji

* Zaimplementuj proces `unsubscribe`. Jest to funkcja zwracana z wywołania `onAuthStateChanged`. Aby ją odsubskrybować, powinna zostać wywołana w cleanup function efektu.
