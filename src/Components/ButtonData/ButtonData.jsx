import React from "react";
import "./ButtonData.scss";
const ButtonData = ({ label, customStyle, goPage }) => {
  return (
    <button className={customStyle ? "btnData fill" : "btnData"} onClick={()=>{goPage()}}>
      {label}
    </button>
  );
};

export default ButtonData;
