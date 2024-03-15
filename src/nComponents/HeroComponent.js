import React from "react";
import "./../styles/nComponents/hero.css";
import leaderHero from './../assets/site/ldr.jpg'

function HeroComponent() {
  return (
    <section>
      <div className="container hero">
        <div className="content">
          <div className="text-animation-container">
            <div className="text-animation-holder">
              <div className="text-background-color"></div>
              <div class="text-animation">
              Événements clé en main,
              </div>
            </div>
            <div className="text-animation-holder">
              <div className="text-background-color"></div>
              <div class="text-animation">
              grâce à notre agence événementielle !
              </div>
            </div>
          </div>
        </div>
        <div className="how-we-work-grid-holder">
          <div className="how-we-work-grid">
            <div className="how-we-work-image-container">
              <img
                className="_100width"
                src="https://img.freepik.com/premium-photo/team-young-african-people-office-table-with-laptop_219728-4569.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701561600&semt=ais"
                alt="lenght"
              />
            </div>
            <div className="how-we-work-content">
              <div className="how-we-work-text-holder">
                <div>
                  <h3>Experts Couverture Mariages</h3>
                </div>
                <div>
                  <p>
                    Plus de 50 Mariages réalisés cette année. En outre, que ce
                    soit pour des soirées, des conférences, des séminaires ou
                    des team building, notre équipe se distingue par sa capacité
                    à transformer chaque occasion en une expérience
                    exceptionnelle pour vos participants.
                  </p>
                </div>
              </div>
              <div>
                <div className="grey-block-our-philosophy _02">
                  <div className="how-we-work-text">
                    Chez Point Solutions Group, la satisfaction de nos clients
                    est notre priorité absolue. Nous nous engageons à fournir
                    des solutions sur mesure et à dépasser les attentes de nos
                    clients à chaque étape de leur parcours avec nous. Votre
                    succès est notre succès !
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="how-we-work-grid-holder">
          <div className="how-we-work-grid">
            <div className="how-we-work-content">
              <div className="how-we-work-text-holder">
                <div>
                  <h3>Une expertise qui nous distingue</h3>
                </div>
                <div>
                  <p>
                    Notre savoir-faire unique repose sur une combinaison de
                    compétences exceptionnelles, d'expériences approfondies et
                    d'une approche novatrice, nous permettant de relever les
                    défis avec succès et de surpasser les attentes de nos
                    clients.
                  </p>
                </div>
              </div>
              <div>
                <div className="grey-block-our-philosophy _02">
                  <div className="how-we-work-text">
                    <ul className="how-we-work-list">
                      <li>
                        <p>Expertise et professionnalisme</p>
                      </li>
                      <li>
                        <p>Adaptabilité et flexibilité</p>
                      </li>
                      <li>
                        <p>Intégrité et éthique professionnelle</p>
                      </li>
                      <li>
                        <p>Créativité et innovation</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="how-we-work-image-container">
              <img
                className="_100width ldr"
                src={leaderHero}
                alt="lenght"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="blog-image-backgournd">
        <img
          alt=""
          className="blog-image"
          src="https://assets-global.website-files.com/65326a5b53e01bf83b1f719d/6536814d8de361c55e27d990_Blog%20Line.png"
        />
      </div>
    </section>
  );
}

export default HeroComponent;
