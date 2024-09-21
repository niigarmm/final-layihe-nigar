import React, { useState } from "react";
import "../Carousel/Carousel.css";
const Carousel = ({ images }) => {
  const [current,setCurrent] = useState(0)
  const slideRight =()=>{
    setCurrent(current === images.length-1 ? 0 : current+1)
  }
  const slideLeft =()=>{
    setCurrent(current === images.length-1 ? 0 : current-1)
  }
  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index == current
                  ? "carousel-cart carousel-cart-active"
                  : "carousel-cart"
              }
            >
              <img src={item.image} alt="" className="carousel-image" />
            </div>
          );
        })}
        <div className="carousel-arrow-left" onClick={slideLeft}>&lsaquo;</div>
        <div className="carousel-arrow-right" onClick={slideRight}>&rsaquo;</div>
      </div>
    </div>
  );
};

export default Carousel;
