import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PrivateRoute({ allowedTypes = [] }) {
  const [auth, setAuth] = useState(null);
  const [unauthorized, setUnauthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/check", {
        withCredentials: true,
      })
      .then((res) => {
        const userType = res.data?.user?.userType;
        if (!allowedTypes.includes(userType)) {
          setUnauthorized(true);
        } else {
          setAuth(true);
        }
      })

      .catch(() => {
        setAuth(false);
      })
      .finally(() => setLoading(false));
  }, [allowedTypes]);

  if (loading) return <div>Carregando...</div>;
  if (unauthorized) return <Navigate to="/unauthorized" />;
  if (!auth) return <Navigate to="/login" />;
  return <Outlet />;
}
