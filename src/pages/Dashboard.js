import React from 'react'
import Card from '../components/Dashboardcard/Dashboardcard'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
export default function Dashboard() {
  return (
    <>
      <Navbar/>
      <div className="my-container flexdirection-column admin-container-bg-color">
      <Card title="Propose your loved one" description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur" redirectionUrl="/create-proposal/proposal"/>
      <Card title="Lock Your Memories with Partner" description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur" redirectionUrl="/edit-screen"/>
      <Card title="Your Love Diary" description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur" redirectionUrl="/login"/>
      
      </div>
      <Footer/>
    
    </>
  )
}