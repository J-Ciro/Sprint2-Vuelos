import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

import "./FlightTimeBags.scss";
const FlightTimeBags = ({ onSelect, vueloSalida, isSelected}) => {
  const [departureTime, setDepartureTime] = useState("");
  const [finalTime, setFinalTime] = useState("");
  const [timeBetween, setTimeBetween] = useState(0);
  const [dateArrived, setDateArrived] = useState({});

  

  useEffect(() => {
    const generateRandomTime = () => {
      return Math.floor(Math.random() * 19) + 2; // Generate a random number between 2 and 20
    };

    const generateRandomMinute = () => {
      return Math.floor(Math.random() * 60); // Generate a random number between 0 and 59
    };

    let randomTime = generateRandomTime();
    let randomFinalTime = generateRandomTime();

    // Ensure departure and final times are not the same
    if (randomTime === randomFinalTime) {
      if (randomTime === 2) {
        randomFinalTime += 1;
      } else {
        randomFinalTime -= 1;
      }
    }

    const formatTime = (time) => {
      const hour = time > 12 ? time - 12 : time;
      const amPm = time >= 12 ? "PM" : "AM";
      return `${hour.toString().padStart(2, "0")}:${generateRandomMinute().toString().padStart(2, "0")} ${amPm}`;
    };

    let smallerTime = Math.min(randomTime, randomFinalTime);
    let largerTime = Math.max(randomTime, randomFinalTime);

    setDepartureTime(formatTime(smallerTime));
    setFinalTime(formatTime(largerTime));
    setTimeBetween(largerTime - smallerTime);

    
  }, []);

  const getSessionData = (key, defaultValue) => {
    const stored = sessionStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  };

  useEffect(() => {
    const dateStorage = getSessionData("salidaVuelo", true);
    setDateArrived({ ...dateStorage });
  }, []);

  const handleTimeBagsClick = () => {
   
    if (vueloSalida) {
      // Acciones cuando vueloSalida es verdadero
      
      const dateStorage = getSessionData("salidaVuelo", true);
      setDateArrived({ ...dateStorage });
      onSelect(departureTime, finalTime);
      
      console.log(departureTime, finalTime);
      // Realiza las acciones específicas para el vuelo de salida...
    } else {
      // Acciones cuando vueloSalida es falso
      const dateStorage2 = getSessionData("vueloRegreso", true);
      setDateArrived({ ...dateStorage2 });
      // sessionStorage.setItem("RegresostartHour", departureTime);
      // sessionStorage.setItem("RegresofinalHour", finalTime);
      onSelect(departureTime, finalTime);
      console.log(departureTime, finalTime);
      
      // Realiza las acciones específicas para el vuelo de regreso...
    }
  
  
  };

 

  return (
    <div className={`cardd flight-time-bags ${isSelected ? "selected" : ""}`} onClick={handleTimeBagsClick}>
      <section className="cardd__time">
        <h3 >{departureTime}</h3>
        <div className="cardd__timescale">
          <span className="cardd__timemid">{timeBetween} h</span>
          <div className="cardd__timeline">
            <span className="cardd__circle"></span>
            <span className="cardd__line"> </span>
            <span className="cardd__circle"> </span>
          </div>
          <span className="cardd__scales">Sin escala</span>
        </div>
        <h3>{finalTime}</h3>
      </section>
      <div className="cardd__separator"></div>
      <section className="cardd__bags">
        <div className={`cardd__bag ${isSelected ? "selected-bag" : ""}`}>
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
