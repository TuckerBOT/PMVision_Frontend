import React from 'react'
import { Navigate } from 'react-router';


const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/unauthorized" replace />;
    }
  
    return children;
    //return <Navigate to="/unauthorized" replace />
  };



  
  export default ProtectedRoute