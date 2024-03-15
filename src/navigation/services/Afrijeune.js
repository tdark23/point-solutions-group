import React, { useEffect } from "react";
import afrijeunebanner from "./../../assets/images/afrijeune-banner.jpg";
import ads from "./../../assets/images/movie-project.jpg";
import "./../../styles/pages/pscreative.css";
import "./../../styles/pages/afrijeune.css";
import "./../../styles/nComponents/reach.css";

function Afrijeune() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll jusqu'au début de la page lorsque le composant est monté
  }, []); 

  const handleAnchorClick = (event, shortId) => {
    event.preventDefault();
    const targetElement = document.getElementById(shortId);
    if (targetElement) {
      const yOffset = -250;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <section className="self-service-container">
      <div className="title-container">
        <div className="title-container-wrapper">
          <div className="serv-text-block">
            <h5>Service</h5>
            <div className="self-flex">
              <h2 className="service-self-title">Afrijeune TV</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="space-112px" />
      <div className="im-wrapper-afri">
        <img
          src={afrijeunebanner}
          className="image-parallax"
          alt="psbanner"
        />
      </div>
      <div className="space-112px" />
      <div className="services-details">
        <div className="services-rich-text">
          <h2>Service de diffusion télévisée</h2>
          <p></p>
          <p>
            Afrijeune TV propose une programmation variée axée sur les intérêts
            et les préoccupations de la jeunesse africaine. De l'actualité aux
            divertissements, nous offrons une plateforme dynamique pour mettre
            en lumière les talents et les histoires de la jeunesse africaine.
          </p>

          <p></p>
          <div className="video-hero-container">
            <iframe
              id=""
              src="https://www.youtube.com/embed/bkJFiy0ncQM"
              title="AfriJeune+ en 3 mots"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div className="afrijeune-section">
            <div className="anchor-section">
              <a
                className="anchor-item"
                href="#Publicités"
                onClick={(event) => handleAnchorClick(event, "Publicités")}
              >
                Publicités
              </a>

              <a
                className="anchor-item"
                href="#Communication télévisée"
                onClick={(event) =>
                  handleAnchorClick(event, "Communication télévisée")
                }
              >
                Communication télévisée
              </a>

              <a
                className="anchor-item"
                href="#Nos émissions"
                onClick={(event) => handleAnchorClick(event, "Nos émissions")}
              >
                Nos émissions
              </a>

              <a
                className="anchor-item"
                href="#Reportages"
                onClick={(event) => handleAnchorClick(event, "Reportages")}
              >
                Nos Reportages
              </a>

              <a
                className="anchor-item"
                href="#Interviews"
                onClick={(event) => handleAnchorClick(event, "Interviews")}
              >
                Interviews
              </a>
            </div>

            <div className="videos-wrapper">
              <div className="videos-wrapper-title">
                <h2 id="Nos émissions"> Nos émissions </h2>
              </div>
              <div className="videos-wrapper-cards-container">
                {/* répéter * 4 */}
                <div className="grid-item">
                  <iframe
                    id=""
                    src="https://www.youtube.com/embed/bkJFiy0ncQM"
                    title="AfriJeune+ en 3 mots"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                  <p> "AfriJeune+ en 3 mots" </p>
                </div>
                {/* répéter * 4 */}
              </div>
            </div>

            <div className="subservice-element">
              <div
                id="Communication télévisée"
                className="subservice-element-text"
              >
                <h3>Communication télévisée</h3>
                <p>
                  Nous offrons des services de communication télévisée pour
                  aider les entreprises, les organisations et les individus à
                  transmettre leurs messages à un large public à travers nos
                  plateformes de diffusion. De la production de contenu à la
                  diffusion, nous assurons une visibilité maximale pour vos
                  initiatives.
                </p>
              </div>
              <div className="subservice-element-image">
                <img src={ads} alt="subimage" />
              </div>
              <p></p>
            </div>

            <div className="subservice-element">
              <div id="Publicités" className="subservice-element-text">
                <h3>Publicités</h3>
                <p>
                  Nous proposons des services de publicité pour promouvoir les
                  produits et les services auprès de notre audience jeune et
                  dynamique. Que ce soit pour une publicité télévisée
                  traditionnelle ou des partenariats de contenu, nous offrons
                  des solutions de marketing efficaces pour atteindre votre
                  public cible.
                </p>
              </div>
              <div className="subservice-element-image">
                <img src={ads} alt="subimage" />
              </div>
              <p></p>
            </div>

            <div className="subservice-element">
              <div id="Reportages" className="subservice-element-text">
                <h3>Reportages</h3>
                <p>
                  Notre équipe de journalistes propose des reportages complets
                  sur les événements et les problématiques qui touchent la
                  jeunesse africaine. Des sujets d'actualité aux reportages
                  spéciaux, nous nous efforçons de fournir une couverture
                  équilibrée et approfondie pour informer notre public.
                </p>
              </div>
              <div className="subservice-element-image">
                <img src={ads} alt="subimage" />
              </div>
              <p></p>
            </div>

            <div className="subservice-element">
              <div id="Interviews" className="subservice-element-text">
                <h3>Interviews</h3>
                <p>
                  Nous proposons des interviews exclusives avec des
                  personnalités influentes de la culture, du divertissement, de
                  la politique et plus encore. À travers nos interviews, nous
                  donnons la parole à ceux qui façonnent l'avenir de l'Afrique
                  et inspirons notre public avec leurs histoires et leurs idées.
                </p>
              </div>
              <div className="subservice-element-image">
                <img src={ads} alt="subimage" />
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container cta">
          <div className="center-text">
            <div className="grid-8-col">
              <div className="content paddings">
                <div>
                  <h2>
                    La reussite de votre évênement
                    <br />
                    commence dès maintenant
                  </h2>
                </div>
                <div>
                  <p>
                    Ne tardez pas davantage et prenez contact avec nous dès
                    maintenant pour entamer une collaboration fructueuse et
                    donner vie à vos projets les plus ambitieux.
                  </p>
                </div>
                <div className="top-margin-1">
                  <a className="button cta-button" href="/">
                    Contactez-nous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Afrijeune;
