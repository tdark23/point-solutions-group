import React, { useEffect } from "react";
import "./../styles/pages/pscreative.css";
import "./../styles/pages/projeta.css";
import projectImage from "./../assets/images/image-branding.jpg";

function Projecta({ projecta }) {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll jusqu'au début de la page lorsque le composant est monté
  }, []); 
  return (
    <>
      <section className="self-service-container">
        <div className="title-container">
          <div className="title-container-wrapper">
            <div className="serv-text-block">
              <h5>Projet</h5>
              <div className="self-flex">
                <h2 className="service-self-title">BRAND IDENTITY</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="project-details-grid">
          <div className="projects-details-block">
            <h5>CATEGORIE</h5>
            <p className="text-align-right">Branding</p>
          </div>
          <div className="projects-details-block">
            <h5>CLIENT</h5>
            <p className="text-align-right">Jessica Walters</p>
          </div>
          <div className="projects-details-block">
            <h5>Livré</h5>
            <p className="text-align-right">04 Janvier 2024</p>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={projectImage} className="image-parallax" alt="psbanner" />
        </div>
        <p></p>
        <div className="projects-details">
          <div class="projects-rich-text w-richtext">
            <h2>Details du projet:</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <p>‍</p>
            <h3>Objectifs:</h3>
            <ol>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </li>
            </ol>
            <p>‍</p>
            <h3>Portée du travail:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique:
            </p>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </li>
            </ul>
            <p>‍</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Consectetur
              adipiscing elit. Suspendisse varius enim in eros elementum
              tristique.{" "}
            </p>
            <p>‍</p>
          </div>
        </div>
        <div className="images-container">
          <div className="brand-image">
            <img
              src={projecta.project_images[0]}
              alt="brand"
            />
          </div>
            <p></p>
            <p></p>
          <div className="brand-images-wrapper-container">
          <div className="im-wrap">
            <img
                src={projecta.project_images[1]}
                alt="brand"
              />
          </div>
          <div className="im-wrap">
            <img
                src={projecta.project_images[2]}
                alt="brand"
              />
          </div>
          <div className="im-wrap">
            <img
                src={projecta.project_images[3]}
                alt="brand"
              />
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projecta;
