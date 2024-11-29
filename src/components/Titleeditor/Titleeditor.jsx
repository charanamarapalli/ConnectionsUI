import React, { useState } from 'react'
import './Titleeditor.css'
const Titleeditor = () => {

    const[title, setTitle] = useState("");
    const handleEmailChange=(event)=>{
        setTitle(event.target.value);
      }

  return (
    <>
      <div>
          <label className="label text-white" htmlFor="title">
            Enter Title:
          </label>
          <input
            onChange={handleEmailChange}
            className="input-field admin-container-bg-color text-white"
            id="title"
            type="text"
            value={title}
            placeholder="Enter Title"
          />
        </div>
    </>
  )
}

export default Titleeditor
