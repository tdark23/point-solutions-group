import React from "react";
import "./../styles/nComponents/creative.css";

function CreativeComponent() {
  return (
    <section className="creative-section">
      <div className="container creative">
        <div className="center-text">
          <div>
            <div class="heading-container creative">
              <h2>
                IMPACTEZ ET IMMORTALISEZ <br /> CHAQUE INSTANT
              </h2>
            </div>
            <div>
              <p className="fixed-text">
                Faites confiance à notre équipe pour capturer chaque moment
                spécial de votre évênement
              </p>
            </div>
          </div>
        </div>
        <div className="quote-container">
          <div className="quote-holder">
            <div className="quote-text-holder">
              <div className="content">
                <div>
                  <h4 className="quote-title">
                    Des idées originales pour une prestation de qualité
                  </h4>
                </div>
                <div>
                  <p className="quote-text">
                    Nous accélérons le développement avec une équipe dédiée qui
                    étend les capacités de toute idée et la vision de tout
                    produit.
                  </p>
                </div>
              </div>
            </div>
            <div className="quote-image-container">
              <img
                className="qoute-image"
                alt="light"
                src="https://images.pexels.com/photos/4559589/pexels-photo-4559589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreativeComponent;
