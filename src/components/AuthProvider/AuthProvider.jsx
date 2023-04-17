import React, { createContext } from "react";
import app from "../../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const user = {
    displayName: "emon",
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    user,
    createUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
