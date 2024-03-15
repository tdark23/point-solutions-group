import React from "react";
import { Link } from "react-router-dom";
import "./../styles/nComponents/collection.css";
import project from "./../assets/images/dmark.jpeg";

function CollectionComponent() {

  //  utiliser le handle scroll plustard
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <section className="collection-section">
      <div className="collection-image"></div>
      <div className="container collection">
        <div>
          <div className="center-text">
            <div>
              <div className="heading-container collection">
                <h2>
                  COLLABOREZ AVEC LA MEILLEURE AGENCE EVENEMENTIELLE AU
                  CAMEROUN.
                  {/* Fusion parfaite entre créativité visuelle et stratégies de marketing digital */}
                </h2>
              </div>
              <div>
                <p className="fixed-text">
                  Nous sommes entièrement à votre disposition pour répondre à
                  toutes vos questions et vous fournir des informations
                  supplémentaires. Si notre service vous séduit, n'hésitez pas à
                  débuter votre projet en planifiant un rendez-vous sur notre
                  site Internet.
                  {/* Notre équipe est bien sûr à votre entière disposition et nous serions ravis de vous répondre si vous désirez des informations additionnelles. Séduits par notre service? Démarrez votre projet dès à présent en prenant rendez-vous sur notre site internet.
                 Nous propulsons votre entreprise vers de nouveaux sommets avec nos services de production et notre maitrise des outils numériques. */}
                </p>
              </div>
            </div>
          </div>
          <div className="collection-list-wrapper">
            <div role="list" className="collection-list">
              <div role="listitem" className="project-item">
                  <div className="project-item-container">
                    <div className="project-item-thumbnail-container">
                      <img
                        src="https://assets-global.website-files.com/65326a5c53e01bf83b1f727d/65366505d221bc10dc8cc54c_Project%20Details%20Photo1.png"
                        alt="item"
                        className="project-item-thumbnail"
                      />
                      <div className="project-client-thumbnail-container">
                        <div className="project-client-thumbnail-holder">
                          <img
                            alt="dash"
                            src={project}
                            className="client-thumbnail"
                          />
                        </div>
                        {/* <div class="project-info-container">
                          <h5 class="project-title">CyberGuard </h5>
                          <p class="project-summary">
                            Securing Your Digital Frontier.
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>
              </div>
              <div role="listitem" className="project-item">
                  <div className="project-item-container">
                    <div
                      className="project-item-thumbnail-container"
                      // style={{ transform: `translateY(${scrollY * 0.2}px)` }}
                    >
                      <img
                        src="https://assets-global.website-files.com/65326a5c53e01bf83b1f727d/6536671f9ea7b7c5f9eedc7f_Project%2002%20Thumbnail.jpg"
                        alt="item"
                        className="project-item-thumbnail"
                      />
                      <div className="project-client-thumbnail-container">
                        <div className="project-client-thumbnail-holder">
                          <img
                            alt="dash"
                            src={project}
                            className="client-thumbnail"
                          />
                        </div>
                        {/* <div class="project-info-container">
                          <h5 class="project-title">QuantumForge </h5>
                          <p class="project-summary">
                            Unleashing the power of Quantum Computing.
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="collection-button-holder">
            <Link to="/services">
              <button>Voir nos services</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionComponent;
