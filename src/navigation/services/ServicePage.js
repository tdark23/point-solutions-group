import React, { useEffect } from "react";
import "./../../styles/pages/servicepage.css"
import { ServiceCard } from "../../components";
import psservices from "../../utils/services";
import ReachOut from "../../nComponents/ReachOut";

function ServicePage () {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll jusqu'au début de la page lorsque le composant est monté
      }, []); 
    return (
        <>
            <section className="container-section">
            <div className="service-text-container">
                <h5>
                    Nos
                </h5>
                <h2 className="service-cta-text">
                    services
                </h2>
                <p>Notre agence propose des solutions innovantes qui captivent les clients, stimulent l'engagement et donnent des résultats.</p>
                <div className="thin-line"/>
                <div className="space-30px"/>
                <div className="space-30px"/>
            </div>  
            <ServiceCard services={psservices}/>
        </section>
        <ReachOut/>
        </>
    )
}

export default ServicePage;