import React from "react";
import SearchTickets from "./search-tickets/Search-tickets";
import Payment from "./payment/Payment";
import ServicesAvailables from "./services-availables/Services-availables";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";

const FeatureHomePage = ({ formValue, setFormValues }) => {
  return (
    <div className="principal">
      <SearchTickets formValue={formValue} setFormValues={setFormValues} />
      <Payment />
      <ServicesAvailables />
    </div>
  );
};
export default FeatureHomePage;
