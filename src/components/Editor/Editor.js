import React from 'react'
import './Editor.css'
import { useLocation } from 'react-router-dom'

export default function Editor(props) {
  const location = useLocation();
  return (
    <>  
      <div className='main-content admin-container-bg-color'>
        <h1 className="p-center text-white">{props.title}</h1>
        {props.children}
        <button className="btn-submit btn-width-100 mg-2">Save Your Changes</button>
        <p className="text-white mg-2">You can view the generated page using this url:  </p>
       </div> 
    </>
  )
}
