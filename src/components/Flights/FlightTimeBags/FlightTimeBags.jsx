import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./FlightTimeBags.scss";

const FlightTimeBags = () => {
  return (
    <div className="cardd">
      <section className="cardd__time">
        <h3>05:50 PM</h3>
        <div className="cardd__timescale">
          <span className="cardd__timemid">1h 57min</span>
          <div className="cardd__timeline">
            <span className="cardd__circle"></span>
            <span className="cardd__line"> </span>
            <span className="cardd__circle"> </span>
          </div>
          <span className="cardd__scales">Sin escala</span>
        </div>
        <h3>06:47 PM</h3>
      </section>
      <div className="cardd__separator"></div>
      <section className="cardd__bags">
        <div className="cardd__bag">
          <figure>
            <FontAwesomeIcon icon={faSuitcase} />
          </figure>
          <span>1 objeto personal</span>
          <span>$548 MXN</span>
        </div>
        <div className="cardd__bag">
          <figure>
            <FontAwesomeIcon icon={faSuitcase} />
          </figure>
          <span>Equipaje de Mano</span>
          <span>$1,084 MXN</span>
        </div>
        <div className="cardd__bag">
          <figure>
            <FontAwesomeIcon icon={faSuitcase} />
          </figure>
          <span>Equipaje 25kg</span>
          <span>$1,045 MXN</span>
        </div>
      </section>
    </div>
  );
};

export default FlightTimeBags;
