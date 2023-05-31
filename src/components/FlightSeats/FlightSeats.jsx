import React, {useEffect, useState} from "react";
import "./FlightSeats.scss";
import { useNavigate } from "react-router-dom";
import FlightArriveLanding from "./FlightArriveLanding/FlightArriveLanding";
import FlightReservation from "../Flights/FlightReservation/FlightReservation";
import FlightPrice from "../Flights/FlightPrice/FlightPrice";
import ButtonData from "../ButtonData/ButtonData";
import "../ButtonData/ButtonData.scss";

const FlightSeats = () => {
  const [dataArrived, setDataArrived] = useState({});
  const [userSeats, setUserSeats] = useState([]);

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
    const userSeatsData = getSessionData("userSeats", []);
    setUserSeats((prevUserSeats) => {
      // Ensure that the state is only updated once
      if (prevUserSeats.length === 0 && userSeatsData.length > 0) {
        return userSeatsData;
      }
      return prevUserSeats;
    });
  }, [userSeats]);

   const navigate = useNavigate();
   const goPage=()=>{
       navigate('/payment')
   } 

   const FlightCost = parseInt(dataArrived.origenPrice) + parseInt(dataArrived.destinyPrice);
   const ivaTotal = parseInt(FlightCost) + 25;
   const seatPrice = parseInt(userSeats.length) * 10;

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
            prices={[`$ ${seatPrice}`, "$20 USD"]}
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
          <ButtonData label={"Pagar con Paypal"} goPage={goPage} isVisible={true}/>
        </div>
      </section>
    </div>
  );
};

export default FlightSeats;
