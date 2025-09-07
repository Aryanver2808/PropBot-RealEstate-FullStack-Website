import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx_wfQQDffXCwB15_1bf3NrByS1qKhE-k",
  authDomain: "real-estate-auth-e096c.firebaseapp.com",
  projectId: "real-estate-auth-e096c",
  storageBucket: "real-estate-auth-e096c.firebasestorage.app",
  messagingSenderId: "1000963319598",
  appId: "1:1000963319598:web:424273609d7c74d76e7cbf",
  measurementId: "G-CGD2M6WDK8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const appleProvider = new OAuthProvider("apple.com");