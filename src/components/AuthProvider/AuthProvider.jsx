import React, { createContext } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const user = {
    displayName: "emon",
  };

  // register user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    user,
    createUser,
    loginUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
