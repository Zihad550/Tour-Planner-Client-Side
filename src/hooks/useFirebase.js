import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
  return { logOut, user, isLoading };
};

export default useFirebase;
