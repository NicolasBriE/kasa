import React, { useState } from "react";
import "./dropdown.css";

function Dropdown(props) {
  let [active, setActiveItem] = useState(false);
  let [active2, setActiveItem2] = useState(false);

  function changeStatus() {
    setActiveItem(active === false ? true : false);
  }

  function changeStatus2() {
    setActiveItem2(active2 === false ? true : false);
  }

  return (
    <div className="dropdowns-container">
      <div className="dropdown-description" onClick={changeStatus}>
        <p>Description</p>
        {active === false && (
          <div className="arrow-bottom">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        )}
        {active === true && (
          <div className="arrow-top">
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        )}
      </div>
      {active === true && (
        <div className="dropdown-description-content">
          <span className="dropdown-description-content-text">
            {props.description}
          </span>
        </div>
      )}
      <div className="dropdown-equipments" onClick={changeStatus2}>
        <p>Equipements</p>
        {active2 === false && (
          <div className="arrow-bottom">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        )}
        {active2 === true && (
          <div className="arrow-top">
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        )}
        {active2 === true && (
          <div className="dropdown-description-content">
            <div className="dropdown-description-content-text">
              {props.equipments.map((equipment, index) => {
                return <span key={index}>{equipment}</span>;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
