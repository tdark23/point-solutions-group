import React from "react";
import Cards from "./servicesComponents/Card";
import "./../styles/components/services.css"
import Branding from "./servicesComponents/Branding";
import ServiceBanner from "./servicesComponents/ServiceBanner";
import ServiceCard from "./servicesComponents/ServiceCard";
import psservices from "../utils/services";


const Services = () => {

    const homeServices = psservices.slice(0, 3);

    return (
        <section className="service-section">
            <Cards/>
            <Branding/>
            <ServiceBanner/>
            <div className="service-card-container">
                <ServiceCard services={homeServices}/>
            </div>
        </section>
    )
}

export default Services;