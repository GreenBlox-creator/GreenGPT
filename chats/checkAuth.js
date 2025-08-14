// src/auth/checkAuth.js
import { getAuth, onAuthStateChanged } from "firebase/auth";

/**
 * Sprawdza, czy użytkownik jest zalogowany.
 * Jeśli nie — przekierowuje na /login.
 * Jeśli tak — zwraca obiekt użytkownika.
 * @returns {Promise<firebase.User|null>}
 */
export async function verifyUserOrRedirect() {
  const auth = getAuth();

  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ Zalogowany jako:", user.uid);
        resolve(user);
      } else {
        console.warn("🚫 Niezalogowany — przekierowanie...");
        window.location.href = "https://GreenBlox-creator.github.io/login/";
        resolve(null);
      }
    });
  });
}
