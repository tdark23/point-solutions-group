import React, { useEffect, useState } from "react";
import "./../../styles/pages/pscreative.css";
import "./../../styles/pages/afrijeune.css";
import subimage from "./../../assets/images/musique.webp";

function ServicePagePrototype({
  serviceDatas,
  is_description_photo = false,
  is_dmark = false,
  is_afrijeune = false,
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (event, shortId) => {
    event.preventDefault(); // Empêcher le comportement de lien par défaut
    const targetElement = document.getElementById(shortId);
    if (targetElement) {
      const yOffset = -250; // Décalage de 250 pixels
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll jusqu'au début de la page lorsque le composant est monté
  }, []); 



  const Service = ({ subService }) => (
    <>
      {subService.map((service) => (
        <div key={service.id} className="subservice-element">
          <div
            id={service.short}
            className={`subservice-element-text ${
              !is_description_photo && "width-100"
            }`}
          >
            <h3 id={service.name}>{service.name}</h3>
            <p>{service.description}</p>
          </div>
          {is_description_photo && (
            <div className="subservice-element-image">
              <img src={service.service_image} alt="subimage" />
            </div>
          )}
          <p></p>
        </div>
      ))}
    </>
  );
  const BottomSection = ({ subService }) => {
    return <Service subService={subService} />;
  };

  const DigitalCard = ({ digital_services }) => {
    if (is_dmark)
      return (
        <div className="d-mark-card-wrapper">
          {digital_services.map((serv) => (
            <a
              key={serv.short}
              className="d-mark-card"
              href={`#${serv.short}`}
              onClick={(event) => handleAnchorClick(event, serv.short)}
            >
              <div>{serv.icon}</div>
              <p> {serv.name} </p>
            </a>
          ))}
        </div>
      );

    return null;
  };

  return (
    <>
      {serviceDatas.map((element) => (
        <section className="self-service-container">
          <div className="title-container">
            <div className="title-container-wrapper">
              <div className="serv-text-block">
                <h5>Service</h5>
                <div className="self-flex">
                  <h2 id={element.service_name} className="service-self-title">{element.service_name}</h2>
                </div>
              </div>
              <p className="text-align-right">
                {element.service_short_description}
              </p>
            </div>
          </div>
          <div className="space-112px" />
          <div
            className="image-wrapper"
          >
            <img
              src={element.service_banner_image}
              className="image-parallax"
              alt="psbanner"
              style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
            />
          </div>
          <div className="space-112px" />
          <div className="services-details">
            <div className="services-rich-text">
              <h2>{element.main_service_name}</h2>
              <p></p>
              <DigitalCard digital_services={element.subServices} />
              <p></p>
              <p>{element.main_short_description}</p>

              <p></p>
              <BottomSection subService={element.subServices} />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default ServicePagePrototype;
