import React, {useEffect, useState} from "react";
import "./FlightReservation.scss";
import FlightDate from "../FlightDate/FlightDate";
import { DateTime } from "luxon";
// import { contextFligths } from "../../../Routes/AppRouter";
// const getSessionData = (key, defaultValue) => {
//   const stored = sessionStorage.getItem(key);
//   if (!stored) {
//     return defaultValue
//   }
//   return JSON.parse(stored);

// }

const getSessionData = (key, defaultValue) => {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue
  }
  return JSON.parse(stored);

}
const getDateData = (key, defaultValue) => {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue
  }
  return JSON.parse(stored);

}
const getDateData2 = (key, defaultValue) => {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue
  }
  return JSON.parse(stored);

}

const FlightReservation = ({ title, passengers = [] }) => {
  const [dataArrived, setDataArrived] = useState({});
  const [dateArrived, setDateArrived] = useState({});
  const [dateArrived2, setDateArrived2] = useState({});
  
  useEffect(() => {
    const storageData = getSessionData('user', true);
    setDataArrived({ ...storageData });
 
    const dateStorage = getDateData('salidaVuelo', true);
    setDateArrived((prevDateArrived) => {
      
      if (prevDateArrived.startHour === dateStorage.startHour && prevDateArrived.finalHour === dateStorage.finalHour) {
        // No changes, return the previous value
        return {...prevDateArrived};
      }
      
      return { ...dateStorage };
    });
    const dateStorage2 = getDateData2('vueloRegreso', true);
    setDateArrived2((prevDateArrived) => {
      // Compare the previous and new dateArrived values
      if (prevDateArrived.startHour === dateStorage2.startHour && prevDateArrived.finalHour === dateStorage2.finalHour) {
        // No changes, return the previous value
        return {...prevDateArrived};
    
      }
      
      return { ...dateStorage2 };
    });
 
  }, []);

  return (
    <div>
      <h4 className="title">{title}</h4>
      <div className="reservation">
        <div className="reservation__passengers">
          <span>Pasajeros</span>
          <ul>
            <li>
              <h5 className="reservation__quantity">
              Adultos: {
                passengers.adult
              }
              </h5>
            </li>
            <li>
            <h5 className="reservation__quantity">
              Bebes: {
                passengers.child
              }
            </h5>
            </li>
            <li>
              <h5 className="reservation__quantity">
              Niño: {
                passengers.baby
              }
              </h5>
            </li>
          </ul>

        </div>
        <section className="reservation__flightsite">
          <FlightDate
             flightType={"Vuelo de Salida"}
            countryArrive={dataArrived.codeOrigen}
            timeArrive={dateArrived.startHour}
            countryLading={dataArrived.codeDestiny}
            timeLading={dateArrived.finalHour}
            reservationDate={DateTime.fromISO(dataArrived.dateLeave).toLocaleString({
      
              weekday: "long",
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          />
           <FlightDate
            flightType={"Vuelo de Regreso"}
            countryArrive={dataArrived.codeDestiny}
            timeArrive={dateArrived2.startHour}
            countryLading={dataArrived.codeOrigen}
            timeLading={dateArrived2.finalHour}
            reservationDate={DateTime.fromISO(dataArrived.dateArrive).toLocaleString({
              weekday: "long",
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          />
          
        </section>
      </div>
    </div>
  );
};

export default FlightReservation;
