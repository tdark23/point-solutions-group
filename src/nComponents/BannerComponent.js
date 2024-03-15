import React from "react";
import videoSource from "./../assets/videos/bannerv.mp4";
import "./../styles/nComponents/bannerComponent.css";
import { Link } from "react-router-dom";

function BannerComponent() {
  return (
    <div className="banner-section">
      <div className="shadow" />
      <video autoPlay loop muted playsInline className="banner-video">
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="textaria-banner">
        <div className="text-banner-wrapper">
          <div className="banner-text-container">
            <h1 class="banner-section-heading">
              AGENCE ÉVÉNEMENTIELLE & MARKETING
            </h1>
            <p>
              Nous sommes des experts en marketing digital, en organisation
              d'événements d'entreprise et de mariages. Notre expertise inclut
              également la création de contenus publicitaires et de reportages.
              Cliquez sur "Voir le Média" pour découvrir davantage.
            </p>
          </div>
          <div className="banner-buttons-container">
            <Link to="/projects">
              <button className="project-button">Voir nos projets →</button>
            </Link>
            <Link to="/services/afrijeunetv">
              <button className="rdv-button">Voir le Media</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
