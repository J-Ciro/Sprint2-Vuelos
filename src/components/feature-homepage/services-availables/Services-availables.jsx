import React from "react";
import Car from "../../../assets/icons/car.svg";
import VuelosHoteles from "../../../assets/icons/travel.svg";
import Grupos from "../../../assets/icons/group.svg";
import Hoteles from "../../../assets/icons/hotel.svg";
import Carga from "../../../assets/icons/inventory.svg";

const services= [
    {
        img: Car,
        title: 'Transporte',
        description: 'Renta un auto o reserva un shuttle'
    },
    {
        img: VuelosHoteles,
        title: 'Vuelos + Hoteles',
        description: 'Encuentra las mejores ofertas para tu viaje'
    },
    {
        img: Grupos,
        title: 'Grupos',
        description: 'Obtén una cotización para grupos de más de 9 personas'
    },
    {
        img: Hoteles,
        title: 'Hoteles',
        description: 'Reserva cuarquier habitación e cualquier parte del mundo'
    },
    {
        img: Carga,
        title: 'Carga',
        description: 'Contamos con servicio de carga y mensajería'
    },
]

const ServicesAvailables = () => {
    return(
        <>
          <h2 className="title-services">Servicios Disponibles</h2>
          <section className="services-availables">
                {
                    services.map(service=>(
                        <div className="card" key={service.title}>
                            <figure>
                                <img src={service.img} alt="sevices"/>
                            </figure>
                            <span>{service.title}</span>
                            <p>{service.description}</p>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default ServicesAvailables; 