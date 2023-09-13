import React, { useState } from "react";
import "./dropdown.css";

function Dropdown(props) {
  let [active, setActiveItem] = useState(false);

  function changeStatus() {
    setActiveItem(!active);
  }

  return (
    <div className="dropdowns-container">
      <div className="dropdown-appart" onClick={changeStatus}>
        <p>{props.title}</p>
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
        <div className="dropdown-appart-content">
          <span className={props.class}>{props.content}</span>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
