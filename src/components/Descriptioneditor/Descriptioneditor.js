import React, { useState } from 'react'
import './Descriptioneditor.css'
import ReactQuill from 'react-quill';  
import 'react-quill/dist/quill.snow.css'; 
export default function Texteditor() {
  const [text, setText] = useState('');  // State to hold the text

const handleTextChange = (value) => {
  setText(value);
};
  return (
    <>
  <div>
    <p class="label text-white">Enter Description</p>
    <ReactQuill 
      value={text} 
      onChange={handleTextChange} 
      modules={{
        toolbar: [
          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
          [{size: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}],
          ['link', 'image', 'video'],
          ['clean']                                         
        ],
      }}
    />
    {/* <div style={{ marginTop: '20px' }}>
      <h3>Output:</h3>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div> */}
  </div>
    </>
  )
}
