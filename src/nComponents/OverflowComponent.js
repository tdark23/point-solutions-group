import React from "react";
import "./../styles/nComponents/overflow.css";
import khpc from "./../assets/logos/KHPC.png";
import bidetox from "./../assets/logos/bidetox.png";
import chouna from "./../assets/logos/chouna.png";
import isart from "./../assets/logos/IstArtCofee.png";
import migraft from "./../assets/logos/MIGRAFT.png";
import ovillage from "./../assets/logos/Ovillage.png";

function OverflowComponent() {
  return (
    <section className="overflow-hidden overflow-section">
      <div className="container relative">
        <div className="center-text">
          <div className="heading-container overflow">
            <h2 className="white-text ref">
              Quelques références <br />
            </h2>
            <p>
              Pour l'organisation d'événements de marque, de soirées, en
              collaboration, pour des conseils, des reportages et d'autres idées
              créatives au Cameroun et dans la sous-région, ils nous ont fait
              confiance.
            </p>
          </div>
        </div>
        <div className="work-with-us-holder">
          <div className="work-with-us-container">
            <div className="work-with-us-image-container">
              <img
                src={khpc}
                alt="translate"
                className="work-with-us-prod-logo"
              />
            </div>
            <div className="work-with-us-image-container">
              <img
                src={bidetox}
                alt="translate"
                className="work-with-us-prod-logo"
              />
            </div>
            <div className="work-with-us-image-container">
              <img
                src={chouna}
                alt="translate"
                className="work-with-us-prod-logo"
              />
            </div>
            <div className="work-with-us-image-container">
              <img
                src={isart}
                alt="translate"
                className="work-with-us-prod-logo"
              />
            </div>
            <div className="work-with-us-image-container">
              <img
                src={migraft}
                alt="translate"
                className="work-with-us-prod-logo"
              />
            </div>
            <div className="work-with-us-image-container">
              <img
                src={ovillage}
                alt="translate"
                className="work-with-us-prod-logo"
              />
            </div>
          </div>
        </div>
        <div className="work-with-us-text">
          Vous avez un projet ? Nous pouvons collaborer !
        </div>
      </div>
    </section>
  );
}

export default OverflowComponent;
