import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';


export default function MyRoutes() {
  return (
    <>
      <>
        <BrowserRouter>
        
        
          <Routes>
            <Route path="/" element={<Navigate to="/login"/>} />
          </Routes>
          <Routes>
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
          
         
        </BrowserRouter>
    </>
    </>
  )
}
