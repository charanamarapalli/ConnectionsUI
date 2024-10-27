import React from 'react'
import './Editor.css'
import Texteditor from '../Texteditor/Texteditor'
import Linebreak from '../Linebreak/Linebreak'
import Navbar from '../Navbar/Navbar'

export default function Editor(props) {
  return (
    <>  
      <div className='editor'>
        <Navbar/>
        <p className="p-white p-center">{props.title}</p>
        <p>Random text addeed Random text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text ad
          deed her ehebhebhbehRandom text addeed her ehebhebhbehRandom text addeed her ehebhebhbehher ehebhebhbeh</p>
        <div>{props.children}</div>
        <div ><Texteditor/></div>
       </div> 
    </>
  )
}
