import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import { AppRouter } from "./Routes/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
