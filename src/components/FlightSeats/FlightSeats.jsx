import React, {useEffect, useState, useContext} from "react";
import "./FlightSeats.scss";
import { useNavigate } from "react-router-dom";
import FlightArriveLanding from "./FlightArriveLanding/FlightArriveLanding";
import FlightReservation from "../Flights/FlightReservation/FlightReservation";
import FlightPrice from "../Flights/FlightPrice/FlightPrice";
import ButtonData from "../ButtonData/ButtonData";
import {contextFligths} from '../../Routes/AppRouter'
import "../ButtonData/ButtonData.scss";

// const mergeSessionData = () => {
//   // Obtener los valores actuales del sessionStorage
//   const value1 = sessionStorage.getItem("user");
//   const value2 = sessionStorage.getItem("vueloRegreso");
//   const value3 = sessionStorage.getItem("salidaVuelo");

const FlightSeats = () => {
  const [dataArrived, setDataArrived] = useState({});
  const [disableButton,setDissableButton]= useState(false)
  const {seatSelected} = useContext(contextFligths)
  const getSessionData = (key, defaultValue) => {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue
    }
    return JSON.parse(stored);
  
  }

  useEffect(() => {
    const storageData = getSessionData('user', true);
    setDataArrived({...storageData});
   }, []);
console.log(dataArrived)
   useEffect(()=>{
    if(dataArrived && dataArrived.passengers){
      const cantPassengers=Object.values(dataArrived.passengers).reduce((a, b) => a + b, 0);  
      if(dataArrived.travelRounded === 'true' && seatSelected.seatOrigen.length === cantPassengers && seatSelected.seatDestiny.length === cantPassengers){
        setDissableButton(true)
      }
      if(dataArrived.travelRounded === 'false' && seatSelected.seatOrigen.length === cantPassengers){
        setDissableButton(true)
      } 
    }

   },[seatSelected, dataArrived])

   const navigate = useNavigate();
   const goPage=()=>{ 
       navigate('/payment') 
   } 

   const FlightCost = parseInt(dataArrived.origenPrice) + parseInt(dataArrived.destinyPrice);
   const ivaTotal = parseInt(FlightCost) + 25;

  return (
    <div className="mainn">
      <section className="mainn__content">
        <FlightArriveLanding />
      </section>
      <section className="mainn__contentData">
        <div className="mainn__flightReservation">
        <FlightReservation title={"Tu Reserva"} passengers={dataArrived.passengers}/>
        </div>
        <div className="mainn__flightCost">
          <FlightPrice
            prices={[`$${FlightCost} USD`, "$20 USD"]}
            label={["Tarifa Base","IVA Tarifa"]}
            total={`$${ivaTotal} USD`}
            title={"Costo de Vuelo"}
          />
          <FlightPrice
            prices={["$10 USD", "$20 USD"]}
            label={["Selecciona tu asiento ", "IVA Tarifa"]}
            total={"$5000 USD"}
            title={"Servicios Opcionales"}
          />
          <FlightPrice
            prices={["$1000 USD", "$20 USD"]}
            label={["Tarifa Base","IVA Tarifa"]}
            total={"$5000 USD"}
            title={"TUA"}
          />
          <FlightPrice total={"$5000 USD"} />
          {disableButton && (
            <ButtonData label={"Pagar con Paypal"} goPage={goPage} isVisible={true}/>
          )}
          
        </div>
      </section>
    </div>
  );
};

export default FlightSeats;
