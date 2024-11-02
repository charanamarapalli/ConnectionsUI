import React, { useState, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./Imageeditor.css";
const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";
  
export default function Imageeditor() {
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
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
      {image && (
        <div>
          <div style={{ width: "100%" }}>
            <input type="file" onChange={onChange} />
            {/* <button>Use default img</button> */}
            <br />
            <br />
            <Cropper
              ref={cropperRef}
              style={{ width: "80%" }}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={2}
              minCropBoxWidth={2}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // Fix for mobile image orientation
              guides={true}
            />
          </div>
          <div>
            <div
              className="box"
              style={{ width: "50%", float: "right", height: "300px" }}
            >
              <p>
                <span>Crop</span>
                <button style={{ float: "right" }} onClick={getCropData}>
                  Crop Image
                </button>
              </p>
              <img style={{ width: "100%" }} src={cropData} alt="cropped" />
            </div>
          </div>
          <br style={{ clear: "both" }} />
        </div>
      )}
    </>
  );
}
