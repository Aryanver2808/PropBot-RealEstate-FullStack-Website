import { createContext, useContext, useEffect, useState } from "react";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider
} from "firebase/auth";
import { auth } from "../services/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Providers
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const appleProvider = new OAuthProvider("apple.com");

  // Register (Email/Password)
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login (Email/Password)
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Facebook Login
  const loginWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  // Apple Login
  const loginWithApple = () => {
    return signInWithPopup(auth, appleProvider);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  // Track user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        register, 
        login, 
        logout, 
        loginWithGoogle, 
        loginWithFacebook, 
        loginWithApple 
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Custom hook for using auth
export function useAuth() {
  return useContext(AuthContext);
}
