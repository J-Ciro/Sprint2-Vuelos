import React, {useContext, useState, useEffect} from "react";
import { DateTime } from "luxon";
import FlightNavBar from "../../Flights/FlightNavbar/FlightNavBar";
import SelectSeats from "../SelectSeats/SelectSeats";
import "./FlightArrive.scss";
import {contextFligths} from '../../../Routes/AppRouter'

const getSessionData = (key, defaultValue) => {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue
  }
  return JSON.parse(stored);

}


const FlightArriveLanding = () => {
  const {formValue} = useContext(contextFligths)


  const [dataArrived, setDataArrived] = useState({});
  
  useEffect(() => {
   const storageData = getSessionData('user', true);
   setDataArrived({...storageData});
   console.log(dataArrived);
  }, []);
  return (
    <>
      <div className="flight__container">
        <FlightNavBar
          flightDate={DateTime.fromISO(dataArrived.dateLeave).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}
          flightLocation={`${dataArrived.origen} (${dataArrived.codeOrigen}) a ${dataArrived.destiny}  (${dataArrived.codeDestiny})`}
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
          flightDate={DateTime.fromISO(dataArrived.dateArrive).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}
          flightLocation={`${dataArrived.destiny} (${dataArrived.codeDestiny}) a ${dataArrived.origen} (${dataArrived.codeOrigen})`}
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
