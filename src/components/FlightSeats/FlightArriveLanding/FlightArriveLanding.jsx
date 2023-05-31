import React, {useContext, useState, useEffect} from "react";
import { DateTime } from "luxon";
import FlightNavBar from "../../Flights/FlightNavbar/FlightNavBar";
import SelectSeats from "../SelectSeats/SelectSeats";
import "./FlightArrive.scss";
import {contextFligths} from '../../../Routes/AppRouter'
import axios from "axios";

const getSessionData = (key, defaultValue) => {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue
  }
  return JSON.parse(stored);

}

const getSeatsData = (key, defaultValue) => {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue
  }
  return JSON.parse(stored);

}


const FlightArriveLanding = () => {
  const {formValue} = useContext(contextFligths)

  const [seats, setSeats] = useState([]);
  const [dataArrived, setDataArrived] = useState({});
  
  useEffect(() => {
   const storageData = getSessionData('user', true);
   setDataArrived({...storageData});
  //  console.log(dataArrived);

    axios
      .get("https://vuelos-backend-production.up.railway.app/seats")
      .then(function (response) {
        setSeats(response.data);
        const seatsData = response.data;
        sessionStorage.setItem("seats", JSON.stringify(seatsData));
        
      })
      .catch(function (error) {
        console.log(error);
      });
       const flightSeatsData = sessionStorage.getItem("seats");
       if (flightSeatsData) {
         const seatsData = JSON.parse(flightSeatsData);
         getSeatsData(seatsData);
        //  console.log(seats.fastExit.row)
       }
      


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
          <div className="salidaVuelos">
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
          <div className="regresoVuelo">
            <SelectSeats />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightArriveLanding;
