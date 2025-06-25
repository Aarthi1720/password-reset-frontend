import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);
  return (
    <div>
      <AuthContext.Provider value={{ token, login, logout }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
