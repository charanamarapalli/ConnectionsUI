import React from "react";
import DescriptionEditor from "../../components/Descriptioneditor/Descriptioneditor";
import Editor from "../../components/Editor/Editor";
import Titleeditor from "../../components/Titleeditor/Titleeditor";
import Sectionenabled from "../../components/Sectionenabled/Sectionenabled";

const Firstmeeteditor = () => {
  return (
    <>
      <Editor title="Describe about your first meet">
        <Titleeditor/>
        <DescriptionEditor />
        <Sectionenabled/>
      </Editor>
    </>
  );
};

export default Firstmeeteditor;
