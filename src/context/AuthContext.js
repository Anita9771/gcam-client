import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const res = await axios.post("/api/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    setUser({ token: res.data.token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
