import React from "react";
import "./FlightSeats.scss";

import FlightArriveLanding from "./FlightArriveLanding/FlightArriveLanding";
import FlightReservation from "../Flights/FlightReservation/FlightReservation";
import FlightPrice from "../Flights/FlightPrice/FlightPrice";
import ButtonData from "../ButtonData/ButtonData";
import "../ButtonData/ButtonData.scss";

const FlightSeats = () => {
  return (
    <div className="mainn">
      <section className="mainn__content">
        <FlightArriveLanding />
      </section>
      <section>
        <div className="mainn__flightReservation">
          <FlightReservation
            title={"Tu Reservacion"}
            passangers={["1 Adulto"]}
          />
        </div>
        <div className="mainn__flightCost">
          <FlightPrice
            prices={["$1000 MX", "$471 MXN", "$75"]}
            label={["Tarifa Base", "Tarifa base con descuento", "IVA Tarifa"]}
            total={"$5000"}
            title={"Costo de Vuelo"}
          />
          <FlightPrice
            prices={["$1000 MX", "$471 MXN", "$75"]}
            label={["Tarifa Base", "Tarifa base con descuento", "IVA Tarifa"]}
            total={"$5000"}
            title={"Servicios Opcionales"}
          />
          <FlightPrice
            prices={["$1000 MX", "$471 MXN", "$75"]}
            label={["Tarifa Base", "Tarifa base con descuento", "IVA Tarifa"]}
            total={"$5000"}
            title={"TUA"}
          />
          <FlightPrice total={"$5000"} />
          <ButtonData label={"Pagar con Paypal"} customStyle={true} />
        </div>
      </section>
    </div>
  );
};

export default FlightSeats;
