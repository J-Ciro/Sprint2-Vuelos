import React from "react";
import Amex from "../../../assets/icons/Amex.svg";
import Paypal from "../../../assets/icons/paypal.svg";
import Invex from "../../../assets/banco.jpg";
import Master from "../../../assets/icons/Mastercard.svg";
import Visa from "../../../assets/icons/Visa.svg";
import Oxxo from "../../../assets/icons/oxxo.svg";
import SevenEleven from "../../../assets/icons/7-eleven.svg";
import Walmart from "../../../assets/icons/walmart.svg";
import Farmacias from "../../../assets/icons/farmacias.svg";

const Payment= () => {
    return(
        <>
          <h2 className="title-payment">Pago seguro</h2>
          <section className="payment">
            <div>
                <p>Tarjeta de crédito, tarjeta de débito y pago electrónico</p>
                <figure>
                    <img src={Amex} alt="icon" />
                    <img src={Paypal} alt="icon" />
                    <img src={Invex} alt="icon" />
                    <img src={Master} alt="icon" />
                    <img src={Visa} alt="icon" />
                </figure>
            </div>
            <div>
                <p>Efectivo en cualquiera de las sucursales participantes</p>
                <figure>
                    <img src={Oxxo} alt="icon" />
                    <img src={SevenEleven} alt="icon" />
                    <img src={Walmart} alt="icon" />
                    <img src={Farmacias} alt="icon" />
                </figure>
            </div>
          </section>
        </>
    )
}

export default Payment;