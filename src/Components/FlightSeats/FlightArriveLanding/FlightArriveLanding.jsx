import React from "react";
import FlightNavBar from "../../Flights/FlightNavbar/FlightNavBar";
import SelectSeats from "../SelectSeats/SelectSeats";
import "./FlightArrive.scss";
const FlightArriveLanding = () => {
  return (
    <>
      <div className="flight__container">
        <FlightNavBar
          flightDate={"Martes 30 nov 2021"}
          flightLocation={"Cd. Mex (AICM) a Culiacan"}
          flight={"Vuelo de Salida"}
        />
        <h5 className="main__title">Selecciona tus asientos</h5>
        <div>
          <div className="arriveSeats">
            <SelectSeats />
          </div>
        </div>
      </div>
      <div className="flight__container">
        <FlightNavBar
          flightDate={"Martes 30 nov 2021"}
          flightLocation={"Cd. Mex (AICM) a Culiacan"}
          flight={"Vuelo de Regreso"}
        />
        <h5 className="main__title">Selecciona tus asientos</h5>
        <div>
          <div className="arriveSeats">
            <SelectSeats />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightArriveLanding;
