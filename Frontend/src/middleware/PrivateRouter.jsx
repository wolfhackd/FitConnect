import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PrivateRoute() {
  const [auth, setAuth] = useState(null); // null = carregando, false = não autenticado
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/check", {
        withCredentials: true,
      })
      .then(() => {
        setAuth(true);
      })
      .catch(() => {
        setAuth(false);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Carregando...</div>;

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
