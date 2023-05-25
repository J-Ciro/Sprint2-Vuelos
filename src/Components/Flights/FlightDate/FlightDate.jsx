import React from "react";

const FlightDate = ({
  countryArrive,
  countryLading,
  timeArrive,
  timeLading,
  reservationDate,
}) => {
  return (
    <div className="reservation__leave">
      <span>Vuelo de salida</span>
      <div className="reservation__content">
        <div className="reservation__countryTime">
          <h2>{countryArrive}</h2>
          <span className="reservation__time">{timeArrive}</span>
        </div>
        <span className="reservation__underline"></span>
        <div className="reservation__countryTime">
          <h2>{countryLading}</h2>
          <span className="reservation__time">{timeLading}</span>
        </div>
      </div>
      <span className="reservation__date">{reservationDate}</span>
    </div>
  );
};

export default FlightDate;
