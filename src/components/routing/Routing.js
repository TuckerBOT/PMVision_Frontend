import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard.js';
import { UserContext, UserContextProvider } from "../context/UserContext";
import ProtectedRoute from './ProtectedRoute';
import Unauthorized from '../pages/unauthorized/Unauthorized.js';
import Upload from '../pages/upload/Upload.js';


const Routing = () => {

  const user = useContext(UserContext);
  return (
    <Routes>
        {/* <Route exact path="/" element={<ProtectedRoute user={user}><Dashboard/></ProtectedRoute>} /> */}
        {/* <Route exact path="/" element={<Dashboard/>} /> */}
        <Route exact path="/" element={<Upload/>} />
        {/* <Route exact path="dashboard" element={<Dashboard/>} /> */}
        <Route path="*" element={<h1>404: Not Found</h1>} />
        {/* <Route path='unauthorized' element={<PartsOnly/>} /> */}
    </Routes>
  )
}

export default Routing