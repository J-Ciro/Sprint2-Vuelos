import React from "react";
import FlightNavBar from "./FlightNavbar/FlightNavBar";
import "./Flights.scss";
import FlightReservation from "./FlightReservation/FlightReservation";
import FlightTimeBags from "./FlightTimeBags/FlightTimeBags";
import FlightPrice from "./FlightPrice/FlightPrice";
import ButtonData from "../ButtonData/ButtonData";
import "../ButtonData/ButtonData.scss";

const Flights = () => {
  return (
    <div className="main">
      <section className="main__content">
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
      <aside className="main__aside">
        <div>
          {/* <h4>Tu reservacion</h4> */}
          <FlightReservation title={"Tu Reserva"} passangers={["1 Adulto"]} />
        </div>
        <div>
          {/* <h4>Costo de vuelo</h4> */}
          <FlightPrice
            prices={["$1000 MX", "$471 MXN", "$75"]}
            label={["Tarifa Base", "Tarifa base con descuento", "IVA Tarifa"]}
            total={"$5000"}
            title={"Costo de Vuelo"}
          />
        </div>
        <ButtonData label="Seleccionar Asiento" customStyle={true} />
      </aside>
    </div>
  );
};

export default Flights;
