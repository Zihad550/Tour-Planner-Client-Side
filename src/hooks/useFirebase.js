import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

const googleProvider = new GoogleAuthProvider();

initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(setUser({}))
      .finally(() => setIsLoading(false));
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);
  return { googleLogin, logOut, user, isLoading };
};

export default useFirebase;
