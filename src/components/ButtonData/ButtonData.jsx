import React from "react";
import "./ButtonData.scss";
import Swal from "sweetalert2";

const ButtonData = ({ label, customStyle, goPage, isVisible }) => {
  if (!isVisible) {
    return null; // Si isVisible es falso, no se renderiza nada
  }
  const handleClick = () => {
    Swal.fire({
      title: "¿Estás seguro de hacer esta acción?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        goPage();
      }
    });
  };

  return (
    <button className={customStyle ? "btnData fill  " : "btnData" } onClick={handleClick} >
      {label}
    </button>
  );
};

export default ButtonData;