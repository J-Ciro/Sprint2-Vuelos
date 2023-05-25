import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Flights from "../components/Flights/Flights";
import Layout from "../components/Layout/Layout";
import FlightSeats from "../components/FlightSeats/FlightSeats";
import NotFound from "../components/NotFound/NotFound";
import FeatureHomePage from "../components/feature-homepage/Index";
import PaymentPage from "../components/payment-page/Payment";


export const AppRouter = () => {
  const [formValue, setFormValues] = useState({
    travelRounded: null,
    origin: null,
    destiny: null,
    codeOrigen:null,
    dateArrive: null,
    dateLeaved: null,
    codeDestiny:null,
    passengers: { Adult: 0, child: 0, baby: 0 },
    code: "",
  });

  const [seatSelected,setSeatSelected] =useState({seatOrigen:[],seatDestiny:[]});
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

  const cantPassengers=Object.values(formValue.passengers).reduce((a, b) => a + b, 0);



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={ <FeatureHomePage
              formValue={formValue}
              setFormValues={setFormValues}
            />} />
            <Route path="flights/*" element={<Flights  formValue={formValue}
            />} />
            <Route path="flights/seats" element={<FlightSeats formValue={formValue}/>} />
            <Route path="payment"  element={<PaymentPage fligthValue={fligthValue}  total={costOptionalServices.total+costValue.total} formValue={formValue} seatSelected={seatSelected}  cantPassengers={cantPassengers}/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
