import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeatureHomePage from "./Components/feature-homepage/Index";

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
        <Route
          path="/"
          element={
            <FeatureHomePage
              formValue={formValue}
              setFormValues={setFormValues}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
