import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
import ProposeYourLovedOne from '../pages/ProposeYourLovedOne';


export default function MyRoutes() {
  return (
    <>
      <>
        <BrowserRouter>
        

          <Routes>
            <Route path="/" element={<Navigate to="/login"/>} />
        
            <Route path="/login" element={<LoginPage/>} />
    
            <Route path="/dashboard" element={<Dashboard/>} />
  
            <Route path="/propose-your-loved-one" element={<ProposeYourLovedOne/>} />
          </Routes>
          
         
        </BrowserRouter>
    </>
    </>
  )
}
