import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeatureHomePage from "./Components/feature-homepage/Index";
import Flights from "./Components/Flights/Flights";
import FlightSeats from "./Components/FlightSeats/FlightSeats";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Components/Layout/Layout";

const App = () => {
  const [formValue, setFormValues] = useState({
    travelRounded: null,
    origin: null,
    destiny: null,
    dateArrive: null,
    dateLeaved: null,
    passengers: { Adult: 0, child: 0, baby: 0 },
    code: "",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <FeatureHomePage
                formValue={formValue}
                setFormValues={setFormValues}
              />
            }
          />
          <Route path="flights/*" element={<Flights />} />
          <Route path="flights/seats" element={<FlightSeats />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
