import React from "react";
import { useNavigate } from "react-router-dom";
import FlightNavBar from "./FlightNavbar/FlightNavBar";
import "./Flights.scss";
import FlightReservation from "./FlightReservation/FlightReservation";
import FlightTimeBags from "./FlightTimeBags/FlightTimeBags";
import FlightPrice from "./FlightPrice/FlightPrice";
import ButtonData from "../ButtonData/ButtonData";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";
import "../ButtonData/ButtonData.scss";

<<<<<<< HEAD
const Flights = ({formValue}) => {
  const navigate = useNavigate();
  const goPage=()=>{
      navigate('seats')
  } 
=======
const Flights = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/flights/seats");
  };

>>>>>>> 7a3babe589ae8aafcd84bd5e236010a511f9d543
  return (
    <div className="mainn">
      <section className="mainn__content">
        <FlightNavBar
          flightDate={DateTime.fromISO(formValue.dateLeaved).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}
          flightLocation={`${formValue.origen} (${formValue.codeOrigen}) a ${formValue.destiny}  (${formValue.codeDestiny})`}
          flight={"Vuelo de Salida"}
        />
        <FlightTimeBags />
        <FlightNavBar
          flightDate={DateTime.fromISO(formValue.dateArrive).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}
          flightLocation={`${formValue.destiny} (${formValue.codeDestiny}) a ${formValue.origen} (${formValue.codeOrigen})`}
          flight={"Vuelo de Llegada"}
        />
        <FlightTimeBags />
      </section>
      <aside className="mainn__aside">
        <div>
          <FlightReservation title={"Tu Reserva"} passangers={["1 Adulto"]} />
        </div>
        <div>
          <FlightPrice
            prices={["$1000 MX", "$471 MXN", "$75"]}
            label={["Tarifa Base", "Tarifa base con descuento", "IVA Tarifa"]}
            total={"$5000"}
            title={"Costo de Vuelo"}
          />
        </div>
<<<<<<< HEAD
        <ButtonData label="Seleccionar Asiento" customStyle={true} goPage={goPage} />
        
=======
        <ButtonData
          label="Seleccionar Asiento"
          customStyle={true}
          onClick={handleClick}
        />
>>>>>>> 7a3babe589ae8aafcd84bd5e236010a511f9d543
      </aside>
    </div>
  );
};

export default Flights;
