import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const logIn = () => {
    setIsAuth(true);
  };

  const logOut = () => {
    setIsAuth(false);
  };

  const value = {
    isAuth,
    logIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
