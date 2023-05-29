import React, {useState , createContext, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Flights from "../componets/Flights/Flights";
import { Layout } from "../componets/Layout/Layout";
import FeatureHomePage from "../componets/FeatureHomePage/Index";
import FlightSeats from "../componets/FlightSeats/FlightSeats";
import PaymentPage from "../componets/payment-page/Payment";
import NotFound from "../componets/NotFound/NotFound";


export const contextFligths= createContext();

export const AppRouter = () => {
  
  const [formValue, setFormValues] = useState({
    travelRounded: null,
    origen: null,
    destiny: null,
    codeOrigen:null,
    dateArrive: null,
    dateLeave: null,
    codeDestiny:null,
    passengers: { adult: 0, child: 0, baby: 0 },
    code: "",
    origenPrice:"",
    destinyPrice:""
  });

  const [seatSelected,setSeatSelected] = useState({seatOrigen:[],seatDestiny:[]});
  const [costValue, setCostValue]= useState({
      tarifaBase:null,
      tarifaBaseDescuento:null,
      ivaTarifa:null,
      total:null
  })
  const [fligthValue, setFligthValue]= useState({
      origen:null,
      destiny: null,
  })

  const [costOptionalServices, setCostOptionalServices] = useState({
    selectedSeat:null,
    ivaServices:null,
    tua: 1191,
    total:0
  })
  
  const cantPassengers = Object.values(formValue.passengers).reduce((a, b) => a + b, 0);

  return (
    <div>
        <BrowserRouter>
          <contextFligths.Provider value={{
              formValue, 
              setFormValues,
              seatSelected,
              setSeatSelected,
              costValue, 
              setCostValue,
              fligthValue,
              setFligthValue,
              costOptionalServices,
              setCostOptionalServices,
              

            }}
          >
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={ <FeatureHomePage/>} />
                <Route path="flights/*" element={<Flights />} />
                <Route path="flights/seats" element={<FlightSeats />} />
                <Route path="payment"  element={<PaymentPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </contextFligths.Provider>
        </BrowserRouter>
    </div>
  );
};

