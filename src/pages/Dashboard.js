import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Card from '../components/Card/Card'
export default function Dashboard() {
  return (
    <div>
      
      <Navbar/>
      <div className="container">
      <Card title="Propose your loved one" description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur" redirectionUrl="/propose-your-loved-one"/>
      <Card title="Lock Your Memories with Partner" description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur" image="../assets/images/logo3.png" redirectionUrl="/login"/>
      <Card title="Your Love Diary" description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur" redirectionUrl="/login"/>
      <Footer/>
      </div>
    
    </div>
  )
}
