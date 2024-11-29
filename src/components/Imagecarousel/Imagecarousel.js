import React from "react";
import { useState } from "react";
import "./Imagecarousel.css";
import Textcard from "../Textcard/Textcard";

export default function Imagecarousel() {
  const images = [
    {
      src: "/assets/images/IMG_5844.JPG",
      description:
        "asdfgas asdfgas  df  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfga  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfga  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfga  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfga  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfga  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfga  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfga  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfga  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfgagasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfgasdfgas  dfgasdfgasdfg asdfgasdfg dfgasdfgasdfg asdfgasdfg",
    },
    { src: "/assets/images/0.JPG", description: "tesg" },
    { src: "/assets/images/1.JPG", description: "erdt" },
    { src: "/assets/images/2.JPEG", description: "efdgd" },
    { src: "/assets/images/3.JPG", description: "eedd" },
    { src: "/assets/images/4.JPEG", description: "tesg" },
    { src: "/assets/images/5.JPG", description: "tesg" },
    { src: "/assets/images/6.JPG", description: "tesg" },
    { src: "/assets/images/7.JPG", description: "tesg" },
    { src: "/assets/images/8.JPG", description: "tesg" },
    { src: "/assets/images/9.JPG", description: "" },
    { src: "/assets/images/10.JPG", description: "" },
    { src: "/assets/images/11.JPG", description: "" },
    { src: "/assets/images/12.JPG", description: "" },
    { src: "/assets/images/13.JPG", description: "" },
    { src: "/assets/images/14.JPG", description: "" },
    { src: "/assets/images/15.JPG", description: "" },
    { src: "/assets/images/16.JPG", description: "" },
    { src: "/assets/images/17.JPG", description: "" },
    { src: "/assets/images/18.JPG", description: "" },
    { src: "/assets/images/19.JPG", description: "" },
    { src: "/assets/images/20.JPG", description: "" },
    { src: "/assets/images/21.JPG", description: "" },
    { src: "/assets/images/22.JPG", description: "" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      console.log(images[currentIndex]);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log(images[currentIndex]);
    }
  };
  return (
    <>
      <div className="intro">
        {/* Previous button code */}
        <button
          className={`carousel-control-prev ${currentIndex===0?"hidden":""}`}
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Image carousel */}
        <div className="carousel">
          <div className="carousel-inner">
            <img
              src={images[currentIndex].src}
              className="d-block w-100 carousel-size"
              alt="broken image"
            />
          </div>
        </div>

        {/* Next button code */}
        <button
          className={`carousel-control-next ${currentIndex===images.length-1?"hidden":""}`}
          type="button"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* read-more code */}
      <>
        <button
          className="view-proposal-btn"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? (
            <>
              <Textcard
                description={
                  <>
                    Close{" "}
                    <span className="material-symbols-rounded pos-top-3">
                      keyboard_double_arrow_up
                    </span>
                  </>
                }
              />
            </>
          ) : (
            <>
              <Textcard
                description={
                  <>
                    Read More{" "}
                    <span className="material-symbols-rounded pos-top-3">
                      keyboard_double_arrow_down
                    </span>
                  </>
                }
              />
            </>
          )}
        </button>
        {showDescription && (
          <Textcard
            cardType="text-card"
            description={images[currentIndex].description}
          />
        )}
      </>
    </>
  );
}
