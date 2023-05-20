import React from "react";
import { useNavigate } from "react-router-dom";
import FlightNavBar from "./FlightNavbar/FlightNavBar";
import "./Flights.scss";
import FlightReservation from "./FlightReservation/FlightReservation";
import FlightTimeBags from "./FlightTimeBags/FlightTimeBags";
import FlightPrice from "./FlightPrice/FlightPrice";
import ButtonData from "../ButtonData/ButtonData";
import "../ButtonData/ButtonData.scss";

const Flights = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/flights/seats");
  };

  return (
    <div className="mainn">
      <section className="mainn__content">
        <FlightNavBar
          flightDate={"Martes 30 nov 2021"}
          flightLocation={"Cd. Mex (AICM) a Culiacan"}
          flight={"Vuelo de Salida"}
        />
        <FlightTimeBags />
        <FlightNavBar
          flightDate={"Martes 30 diciembre 2021"}
          flightLocation={"Culiacan a Cd. Mex (AICM)"}
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
        <ButtonData
          label="Seleccionar Asiento"
          customStyle={true}
          onClick={handleClick}
        />
      </aside>
    </div>
  );
};

export default Flights;
