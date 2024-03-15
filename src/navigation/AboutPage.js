import React, { useEffect } from "react";
import { CgScrollV } from "react-icons/cg";

// css imports

import "./../styles/nComponents/hero.css";
import "./../styles/pages/aboutus.css";
import "./../styles/nComponents/reach.css";

// swipper imports
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import illustration from "./../assets/aboutImages/hero.jpg";
import Metrics from "./../components/Metrics";
import ReachOut from "../nComponents/ReachOut";

//  team images imports*

import fabrice from "./../assets/site/fab.jpg";
import iness from "./../assets/site/Iness.jpg";
import leader from "./../assets/site/LeaderAcceuil.jpg";
import serge from "./../assets/site/Serge.jpg";
import ted from "./../assets/site/Ted.jpg";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll jusqu'au début de la page lorsque le composant est monté
  }, []);
  return (
    <div>
      <section className="hero-section-secondary overflow-hidden">
        <div className="overlay">
          <div className="text">
            <h1 className="only-on-laptop">
              Découvrez comment nous innovons pour vous offrir de nouvelles
              façons d'explorer vos intérêts.
            </h1>
            <h1 className="only-on-mobile">
              Découvrez notre approche pour explorer vos intérêts.
            </h1>
          </div>
          <div className="scroll-container">
            <CgScrollV />
          </div>
        </div>
      </section>

      <section className="section merged-second-section">
        <div className="container no-padding-top">
          <div class="center-text who-we-are">
            <div>
              <div class="content-wider">
                <div class="animate-on-load-1st">
                  <h1 class="hero-text-secondary margin-top">
                    Qui sommes nous ?
                  </h1>
                </div>
                <div>
                  <div class="description-holder about">
                    <p class="fixed-text about">
                      Point Solutions Group est bien plus qu'une simple agence
                      événementielle et marketing. Spécialisée dans
                      l'organisation d'événements de mariage et d'entreprise,
                      notre équipe basée à Yaoundé, mais opérant dans tout le
                      Cameroun, se distingue par son approche sur-mesure et son
                      engagement à réaliser vos désirs et exigences.
                    </p>
                    <p class="fixed-text about">
                      Que ce soit pour un lancement de produit, une
                      inauguration, une soirée de gala ou une conférence, nous
                      analysons attentivement vos besoins pour concevoir un
                      événement innovant, créatif et en parfaite adéquation avec
                      votre identité.
                    </p>
                    <p class="fixed-text about">
                      En plus de notre expertise interne, nous agissons
                      également en tant que passerelle vers une multitude de
                      prestataires de qualité, vous offrant ainsi un accès à des
                      idées originales et des services haut de gamme. Faites
                      confiance à notre savoir-faire pour communiquer votre
                      message avec impact, remodeler votre image de marque et
                      éblouir vos invités à chaque occasion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-box">
            <div className="hero-image-container about">
              <div>
                <div className="about-hero-image-holder">
                  <img
                    className="about-hero-image"
                    src={illustration}
                    alt="test"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="grey-line"></div> */}
      </section>
      <section className="section team">
        <div className="container team">
          <div class="center-text team">
            <div>
              <div class="content-wider">
                <div class="animate-on-load-1st">
                  <h1 class="hero-text-secondary">Notre équipe</h1>
                </div>
                <div>
                  <div class="description-holder">
                    <p class="fixed-text">
                      Faites connaissance avec quelques-uns des membres qui
                      rendent tout cela possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boss">
            <div className="team-item">
              <div className="team-image-wrap">
                <img className="team-image" alt="team" src={leader} />
                <div className="team-overlay"></div>
              </div>
              <div className="team-info">
                <h4 className="team-title">Leader Washi</h4>
                <div className="team-job-title">CEO Point Solutions Group</div>
              </div>
            </div>
          </div>
          <div className="grid-team">
            <div className="team-item">
              <div className="team-image-wrap">
                <img className="team-image" alt="team" src={iness} />
                <div className="team-overlay"></div>
              </div>
              <div className="team-info">
                <h4 className="team-title">Iness Nono</h4>
                <div className="team-job-title">Project Coordinator</div>
              </div>
            </div>
            <div className="team-item">
              <div className="team-image-wrap">
                <img className="team-image" alt="team" src={ted} />
                <div className="team-overlay"></div>
              </div>
              <div className="team-info">
                <h4 className="team-title">Ted E. Mbang</h4>
                <div className="team-job-title">
                  Manager IT and Team Leadership
                </div>
              </div>
            </div>
            <div className="team-item">
              <div className="team-image-wrap">
                <img className="team-image" alt="team" src={serge} />
                <div className="team-overlay"></div>
              </div>
              <div className="team-info">
                <h4 className="team-title">Serge Sodong Sodong</h4>
                <div className="team-job-title">
                  Photography Service Manager
                </div>
              </div>
            </div>
            <div className="team-item">
              <div className="team-image-wrap">
                <img className="team-image" alt="team" src={fabrice} />
                <div className="team-overlay"></div>
              </div>
              <div className="team-info">
                <h4 className="team-title">Fabrice Ondoa</h4>
                <div className="team-job-title">Video Editor</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section history">
        <div className="container history">
          <div class="center-text team">
            <div>
              <div class="content-wider">
                <div class="animate-on-load-1st">
                  <h1 class="hero-text-secondary">Notre histoire</h1>
                </div>
                <div>
                  <div class="description-holder">
                    <p class="fixed-text history">
                      Fondée le 1er août 2022 par la vision d'un jeune
                      Camerounais désireux d'apporter une nouvelle perspective à
                      l'événementiel à travers le design, la photographie et le
                      digital, avec des projets tels que PS Studio Créative, PS
                      Digital, PSG Zik, Afrijeune +, et bien d'autres, touchant
                      toutes les populations du pays. Notre objectif est
                      également d'introduire la technologie et le marketing en
                      ligne, communément appelé marketing digital. POINT
                      SOLUTIONS GROUP représente l'aboutissement de nombreuses
                      années de travail, combinant des compétences techniques
                      qualifiées et une expertise professionnelle acquise au
                      sein d'autres structures similaires. Depuis 2023, Point
                      Solutions Group est officiellement enregistré en tant que
                      société à responsabilité limitée (SARL).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Metrics />

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={false}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://dcodedtv.com/wp-content/uploads/2019/01/stanley-enow-motherland-empire-daicko.jpg" alt="swiper"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.culturebene.com/wp-content/uploads/sites/4/2023/11/401579980_895863305238366_7855080062484557826_n.jpg" alt="swiper"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://s.rfi.fr/media/display/da331bba-1548-11ea-a478-005056bf7c53/w:980/p:16x9/charlotte-dipanda-ip.webp" alt="swiper" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.auletch.com/wp-content/uploads/2021/09/phibill.jpg" alt="swiper" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Indira_en_2022.jpg" alt="swiper"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Locko_en_show_case.jpg" alt="swiper"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://fr.journalducameroun.com/wp-content/uploads/2023/01/326136817_9454212147937988_2207764456352731651_n.jpg" alt="swiper"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://actucameroun.com/wp-content/uploads/2024/01/500x500-1.jpg" alt="swiper"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.boomplaymusic.com/group10/M00/03/21/4df5044a1d5b46f1ae80ec0a4bbf428a_320_320.jpg" alt="swiper"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.billboard.com/wp-content/uploads/2023/06/Asake-cr-Ola-Alabi-billboard-1548.jpg" alt="swiper" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://blueprintafric.com/wp-content/uploads/2022/10/Screenshot-2022-10-17-110152.jpg" alt="swiper" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media.pitchfork.com/photos/5d124a04c612b8855d663bab/1:1/w_720,h_720,c_limit/remaheader1440.jpg" alt="swiper"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.guim.co.uk/img/media/dbac34d3006580e07209c8883705cdf3869d6d3a/631_2_3096_1858/master/3096.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a8dfa7ac9e54a4463801bc581d438bd4" alt="swiper"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1215,fit=cover,gravity=0.5123x0.2353/https://prod.cdn-medias.jeuneafrique.com/medias/2023/11/22/jad20231122-cm-musique-fallyipupa.jpg" alt="swiper"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.afrique-sur7.ci/wp-content/uploads/2023/10/ks-bloom-5.jpg" alt="swiper" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section>
        <div className="container hero">
          <div class="center-text team">
            <div>
              <div class="content-wider">
                <div class="animate-on-load-1st">
                  <h1 class="hero-text-secondary">Comment nous travaillons</h1>
                </div>
                <div>
                  <div class="description-holder">
                    <p class="fixed-text">
                      Nous croyons en une approche collaborative et
                      personnalisée pour chaque projet, mettant l'accent sur la
                      transparence, l'innovation et la qualité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="how-we-work-grid-holder">
            <div className="how-we-work-grid">
              <div className="how-we-work-image-container">
                <img
                  className="_100width"
                  src="https://assets-global.website-files.com/65326a5b53e01bf83b1f719d/653a192bf6a2ed1863cd07fe_How%20We%20Work%20Image%2001-min.webp"
                  alt="lenght"
                />
              </div>
              <div className="how-we-work-content">
                <div className="how-we-work-text-holder">
                  <div>
                    <h3>Approche holistique et collaborative</h3>
                  </div>
                  <div>
                    <p>
                      Nous adoptons une approche intégrée pour chaque projet, en
                      commençant par une compréhension approfondie de vos
                      besoins, objectifs et public cible. Cette analyse
                      approfondie guide notre conception stratégique, où nous
                      utilisons les dernières tendances et technologies pour
                      créer une stratégie personnalisée répondant à vos besoins
                      en matière de créativité et de marketing numérique. Tout
                      au long du processus, nous favorisons une collaboration
                      active, assurant une communication ouverte et régulière,
                      et vous impliquant dans les décisions clés à chaque étape.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="grey-block-our-philosophy _02">
                    <div className="how-we-work-text">
                      <ul className="how-we-work-list">
                        <li>
                          <p>Compréhension approfondie de vos besoins </p>
                        </li>
                        <li>
                          <p>Conception stratégique</p>
                        </li>
                        <li>
                          <p>Collaboration active</p>
                        </li>
                      </ul>
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
                    <h3>Cycle complet de réussite</h3>
                  </div>
                  <div>
                    <p>
                      Nous débutons chaque projet par une compréhension
                      approfondie de vos besoins, puis mettons en œuvre la
                      stratégie conçue avec minutie, garantissant une qualité
                      exceptionnelle à chaque étape du processus. Nous restons
                      flexibles et réceptifs aux retours d'information pour
                      assurer une itération et une amélioration continue, nous
                      ajustant rapidement pour que votre projet dépasse vos
                      attentes. Une fois le projet terminé, nous célébrons avec
                      vous sa réussite et restons disponibles pour tout support
                      supplémentaire dont vous pourriez avoir besoin.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="grey-block-our-philosophy _02">
                    <div className="how-we-work-text">
                      <ul className="how-we-work-list">
                        <li>
                          <p>Exécution minutieuse </p>
                        </li>
                        <li>
                          <p>Itération et amélioration continue</p>
                        </li>
                        <li>
                          <p>Livraison réussie</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="how-we-work-image-container">
                <img
                  className="_100width"
                  src="https://i.pinimg.com/736x/5d/b3/14/5db31444c1ebcd70c0ac9f42b50d3cd5.jpg"
                  alt="lenght"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grey-line"></div>
      </section>
      <ReachOut />
    </div>
  );
}

export default AboutPage;
