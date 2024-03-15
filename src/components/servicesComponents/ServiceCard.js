import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import "./../../styles/components/servicecard.css"

const ServiceCard = ( {services} ) => {
    return (
        <div className="service-card">
            {services.map((service) => (
                <Link className="service-link" to={service.link} key={service.id}>
                <div className="service-row-block">
                    <div className="flex flex-start gap-16px">
                        <h5>
                            {service.id}
                        </h5>
                        <h2 className="service-row-title">
                            {service.name}
                        </h2>
                    </div>
                    <div className="flex space-between grid-colomn-gap-12px ">
                        <p>
                           {service.short_description}
                        </p>
                        <GoArrowUpRight className="upArrow" />
                    </div>
                </div>
                <img
                    src={service.image}
                    alt="servuice"
                    className="services-row-image transformation"
                    loading="eager"
                />
            </Link>
            ))}
        </div>
    )
}

export default ServiceCard;