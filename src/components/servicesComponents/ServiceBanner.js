import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./../../styles/components/servicebanner.css";
import serviceBannerImage from "./../../assets/images/service-banner.jpg";
import know from "./../../assets/images/know.jpg";
import dmark from "./../../assets/images/dmark.jpeg";
import innov from "./../../assets/images/innov.png";

const ServiceBanner = () => {
  return (
    <div className="service-banner-section">
      <div className="service-block">
        <img src={serviceBannerImage} alt="service-banner" />
      </div>
      <div className="service-block">
        <div className="service-block-title">
          <p>SERVICES</p>
        </div>
        <div className="service-center-text">
          <h1 className="firstrow">NOTRE SAVOIR FAIRE A VOTRE DISPOSITION.</h1>
          <div className="secondrow">
            <h1 className="with">INNOVATIONS</h1>
            <div className="bitmap-container">
              <div className="bitmap-card first-image">
                <img src={know} alt="know" />
              </div>
              <div className="bitmap-card second-image">
                <img src={dmark} alt="dmark" />
              </div>
              <div className="bitmap-card third-image">
                <img src={innov} alt="innov" />
              </div>
            </div>
          </div>
          <div className="psgroup">
            <p>POINT SOLUTIONS GROUP</p>
          </div>
          <div></div>
        </div>
        <div className="service-bottom-text">
          <p>
            Découvrez nos services, atteignez vos objectifs commerciaux et
            surpassez vos attentes.
          </p>
          <Link to="/services" className="bottom-arrow-conatiner">
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
