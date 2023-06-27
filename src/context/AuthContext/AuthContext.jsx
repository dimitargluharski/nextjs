"use client";

import { createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const user = localStorage.getItem("user");

  if (user !== null) {
    return user;
  } else {
    console.log("No user found");
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
