// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// const AdminProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("adminToken");
//   const location = useLocation();

//   // If token is present, render the protected component
//   if (token) {
//     return children;
//   }

//   // If not authenticated, redirect to login and preserve route info
//   return <Navigate to="/admin/login" state={{ from: location }} replace />;
// };

// export default AdminProtectedRoute;


import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";

const AdminProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading
  const location = useLocation();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const res = await axios.get("/api/admin/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminProtectedRoute;

