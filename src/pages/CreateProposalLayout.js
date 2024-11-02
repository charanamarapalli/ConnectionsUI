import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Sidenavbar from '../components/Sidenavbar/Sidenavbar'

export default function CreateProposalLayout() {
  return (
    <>
        <Navbar/>
        <Sidenavbar/>
          <Outlet/>
        <Footer/>
    </>
  )
}
