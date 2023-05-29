import React, {useContext} from "react";
import { DateTime } from "luxon";
import FlightNavBar from "../../Flights/FlightNavbar/FlightNavBar";
import SelectSeats from "../SelectSeats/SelectSeats";
import "./FlightArrive.scss";
import {contextFligths} from '../../../Routes/AppRouter'

const FlightArriveLanding = () => {
  const {formValue} = useContext(contextFligths)
  return (
    <>
      <div className="flight__container">
        <FlightNavBar
          flightDate={DateTime.fromISO(formValue.dateLeave).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}
          flightLocation={`${formValue.origen} (${formValue.codeOrigen}) a ${formValue.destiny}  (${formValue.codeDestiny})`}
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
          flightDate={DateTime.fromISO(formValue.dateArrive).toLocaleString({weekday:'long', month:'short', day: 'numeric', year:'numeric' })}
          flightLocation={`${formValue.destiny} (${formValue.codeDestiny}) a ${formValue.origen} (${formValue.codeOrigen})`}
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
