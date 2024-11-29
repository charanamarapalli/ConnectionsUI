import React, { useState, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./Imageeditor.css";



export default function Imageeditor() {
  const [image, setImage] = useState(null);
  const [cropData, setCropData] = useState(null);
  const cropperRef = createRef();

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <>
      <div>
      <h1>Image Cropper</h1>
      <input type="file" onChange={onChange} />
      {image && (
        <Cropper
          ref={cropperRef} // Associate the ref with Cropper
          src={image} // Pass the uploaded image
          style={{ height: "50%", width: "50%" }} // Set dimensions
          initialAspectRatio={1} // Maintain aspect ratio (square cropping by default)
          guides={true} // Show guides inside the cropper
          zoomable={false}
        />
      )}
    </div>
    </>
  );
}
