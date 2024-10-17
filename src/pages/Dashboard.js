import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Card from '../components/Card/Card'
export default function Dashboard() {
  return (
    <div>
      <div class="page">
      <Navbar/>
      <div class="container">
      <Card title="Propose your loved one" description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur"/>
      <Card title="Lock Your Memories with Partner" description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur"/>
      <Card title="Your Love Diary" description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur"/>

      <Footer/>
      </div>
    </div>
    </div>
  )
}
