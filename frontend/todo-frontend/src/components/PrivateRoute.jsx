import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getMe } from "../api";

export default function PrivateRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getMe();
        setIsAuth(true);
      } catch {
        setIsAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuth === null) return <p>Loading...</p>;
  return isAuth ? children : <Navigate to="/login" />;
}
