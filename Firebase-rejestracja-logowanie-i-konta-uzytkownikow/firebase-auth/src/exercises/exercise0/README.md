### Exercise 1
- Stwórz nowy plik `firebase.js` w głównym katalogu `src`
- Skopiuj zmienną `firebaseConfig` z konsoli Firebase, a następnie wklej ją do nowoutworzonego pliku
- Zainicjalizuj `firestore` i `auth` wklejając poniższy kod:
```
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
```
