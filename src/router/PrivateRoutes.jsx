import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loader from "../component/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (user && user.email) {
    return children;
  }
  // return <Navigate to="/login" state={location.pathname}></Navigate>;
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
