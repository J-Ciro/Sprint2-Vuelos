import React from "react";
import "./FlightReservation.scss";
import FlightDate from "../FlightDate/FlightDate";

const FlightReservation = ({ title, passangers = [] }) => {
  return (
    <div>
      <h4 className="title">{title}</h4>
      <div className="reservation">
        <div className="reservation__passengers">
          <span>Pasajeros</span>
          <ul>
            {passangers.map((passanger, index) => (
              <li key={index}>
                <h5>{passanger}</h5>
              </li>
            ))}
          </ul>
        </div>
        <section className="reservation__flightsite">
          <FlightDate
            countryArrive={"CO"}
            timeArrive={"11:00PM"}
            countryLading={"MEX"}
            timeLading={"1:00AM"}
            reservationDate={"Miercoles, 8 diciembre, 2021"}
          />
        </section>
      </div>
    </div>
  );
};

export default FlightReservation;
