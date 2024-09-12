import { Auth, User } from "firebase/auth";
import { useState, useEffect } from "react";

export const useCurrentUser = (auth: Auth) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, [auth]);

  return currentUser;
};
