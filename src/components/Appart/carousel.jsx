import React, { useState } from "react";
import "./carousel.css";

function Slider(props) {
  const [number, setNumber] = useState(0);

  function imageSuivante() {
    setNumber(number === props.images.length - 1 ? 0 : number + 1);
  }

  function imagePrecedente() {
    setNumber(number === 0 ? props.images.length - 1 : number - 1);
  }
  console.log(props.images.length);
  console.log(props);
  return (
    <div className="carousel-container">
      {props.images.length > 1 && (
        <div>
          <div className="fleche-precedente" onClick={imagePrecedente}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="fleche-suivante" onClick={imageSuivante}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      )}

      {props.images.map((image, index) => {
        return (
          <div
            className={
              index === number ? "carousel-image" : "carousel-image-cachee"
            }
            key={index}
          >
            {index === number && <img src={image} className="image"></img>}
            {index === number && props.images.length > 1 && (
              <span className="compteur">
                {number + 1}/{props.images.length}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
