import React from 'react'
import Editor from '../../components/Editor/Editor'

import DescriptionEditor from '../../components/Descriptioneditor/Descriptioneditor'
import Titleeditor from '../../components/Titleeditor/Titleeditor'
const Proposaleditor = () => {
  return (
    <Editor title="Start Proposing"> 
    <Titleeditor/>
    <DescriptionEditor/>
    </Editor>
  )
}

export default Proposaleditor
