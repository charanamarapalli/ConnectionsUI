import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
import ProposeYourLovedOne from '../pages/ProposeYourLovedOne';
import Publicscreenproposal from '../pages/Publicscreenproposal/Publicscreenproposal';


export default function MyRoutes() {

  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login"/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/propose-your-loved-one/proposal" element={<ProposeYourLovedOne />} />
            <Route path="/my-proposal" element={<Publicscreenproposal/>} />
          </Routes>
        </BrowserRouter>
    </>
    </>
  )
}
