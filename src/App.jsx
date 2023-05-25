import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import FeatureHomePage from "./components/feature-homepage/Index";
import Flights from "./components/Flights/Flights";
import FlightSeats from "./components/FlightSeats/FlightSeats";
import NotFound from "./components/NotFound/NotFound";

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
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <FeatureHomePage
                formValue={formValue}
                setFormValues={setFormValues}
              />
            }
          />
          <Route path="/flights" element={<Flights />} />
          <Route path="/flights/seats" element={<FlightSeats />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
