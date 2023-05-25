import React from "react";
import "./FlightSeats.scss";
import { useNavigate } from "react-router-dom";
import FlightArriveLanding from "./FlightArriveLanding/FlightArriveLanding";
import FlightReservation from "../Flights/FlightReservation/FlightReservation";
import FlightPrice from "../Flights/FlightPrice/FlightPrice";
import ButtonData from "../ButtonData/ButtonData";
import "../ButtonData/ButtonData.scss";

const FlightSeats = ({formValue}) => {
  const navigate = useNavigate();
  const goPage=()=>{
      navigate('/payment')
  } 
  return (
    <div className="main">
      <section className="main__content">
        <FlightArriveLanding formValue={formValue}/>
      </section>
      <section>
        <div className="main__flightReservation">
          <FlightReservation
            title={"Tu Reservacion"}
            passangers={["1 Adulto"]}
          />
        </div>
        <div className="main__flightCost">
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
          <ButtonData label={"Pagar con Paypal"} customStyle={true}  goPage={goPage}/>
        </div>
      </section>
    </div>
  );
};

export default FlightSeats;
