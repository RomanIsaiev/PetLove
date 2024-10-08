import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("userData")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("userData"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
