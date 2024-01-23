import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthMiddleware = (WrappedComponent, allowedRoles) => {
  const AuthenticatedComponent = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      // Check if the user is authenticated (you might have a more complex logic)
      const isAuthenticated = localStorage.getItem("accessToken");
      const userRole = localStorage.getItem("role");

      if (isAuthenticated && allowedRoles.includes(userRole)) {
        // User is authenticated and has the required role, allow access to the wrapped component
        return;
      } else {
        // User is not authenticated or doesn't have the required role, redirect to the login page
        navigate("/login");
      }
    }, [navigate, allowedRoles]);

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default AuthMiddleware;
