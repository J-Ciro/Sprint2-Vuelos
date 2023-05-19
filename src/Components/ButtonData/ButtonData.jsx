import React from "react";
import "./ButtonData.scss";
const ButtonData = ({ label, customStyle }) => {
  return (
    <button className={customStyle ? "btnData fill" : "btnData"}>
      {label}
    </button>
  );
};

export default ButtonData;
