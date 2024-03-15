import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import ReachOut from "./../../nComponents/ReachOut";

import psmusik from "./../../assets/images/musique.webp";
import "./../../styles/pages/pscreative.css";
import "./../../styles/pages/afrijeune.css";
import "./../../styles/nComponents/reach.css";
import "./../../styles/pages/psgzik.css";

function Psgzik() {
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll jusqu'au début de la page lorsque le composant est monté
  }, []); 

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <ServicePagePrototype serviceDatas={psgmusiquedetails}/>
    <>
      <section className="self-service-container">
        <div className="title-container">
          <div className="title-container-wrapper">
            <div className="serv-text-block">
              <h5>Service</h5>
              <div className="self-flex">
                <h2 className="service-self-title">PSG ZIK</h2>
              </div>
            </div>
            <p className="text-align-right">
              Découvrez nos services dédiés à l'industrie musicale.
            </p>
          </div>
        </div>
        <div className="image-wrapper">
          <img
            src={psmusik}
            className="image-parallax"
            alt="psbanner"
            style={{ transform: `translateY(-${scrollY * 0.2}px)` }}
          />
        </div>
        <div className="space-112px" />
        <div className="services-details">
          <div className="services-rich-text">
            <h2>Service d'accompagnement Musical</h2>
            <p></p>
            <p>
              Notre équipe propose une gamme complète de services pour soutenir
              les artistes et les professionnels de l'industrie musicale. De la
              production à la distribution, nous offrons un accompagnement
              personnalisé pour vous aider à réussir dans le monde de la
              musique.
            </p>
          </div>

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
              <img src="https://dcodedtv.com/wp-content/uploads/2019/01/stanley-enow-motherland-empire-daicko.jpg" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.culturebene.com/wp-content/uploads/sites/4/2023/11/401579980_895863305238366_7855080062484557826_n.jpg" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://s.rfi.fr/media/display/da331bba-1548-11ea-a478-005056bf7c53/w:980/p:16x9/charlotte-dipanda-ip.webp" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.auletch.com/wp-content/uploads/2021/09/phibill.jpg" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Indira_en_2022.jpg" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Locko_en_show_case.jpg" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://fr.journalducameroun.com/wp-content/uploads/2023/01/326136817_9454212147937988_2207764456352731651_n.jpg" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://actucameroun.com/wp-content/uploads/2024/01/500x500-1.jpg" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://source.boomplaymusic.com/group10/M00/03/21/4df5044a1d5b46f1ae80ec0a4bbf428a_320_320.jpg" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.billboard.com/wp-content/uploads/2023/06/Asake-cr-Ola-Alabi-billboard-1548.jpg" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://blueprintafric.com/wp-content/uploads/2022/10/Screenshot-2022-10-17-110152.jpg" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media.pitchfork.com/photos/5d124a04c612b8855d663bab/1:1/w_720,h_720,c_limit/remaheader1440.jpg" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.guim.co.uk/img/media/dbac34d3006580e07209c8883705cdf3869d6d3a/631_2_3096_1858/master/3096.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a8dfa7ac9e54a4463801bc581d438bd4" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1215,fit=cover,gravity=0.5123x0.2353/https://prod.cdn-medias.jeuneafrique.com/medias/2023/11/22/jad20231122-cm-musique-fallyipupa.jpg" alt="swiper "/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.afrique-sur7.ci/wp-content/uploads/2023/10/ks-bloom-5.jpg" alt="swiper "/>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="gzik-section">
        <div className="sub-text-container">
          <div className="textgzik-container">
            <h5 id="Production et management d'artistes">Production et management d'artistes</h5>
            <p>
              Nous offrons une gestion complète des artistes, de la recherche de
              talents à leur développement et leur représentation. Avec notre
              expertise dans l'industrie musicale, nous aidons les artistes à
              atteindre leur plein potentiel et à réussir dans une industrie
              compétitive.
            </p>
          </div>
          <div className="textgzik-container">
            <h5 id="Communication musicale">Communication musicale</h5>
            <p>
              Nous proposons des services de communication musicale pour
              promouvoir les artistes et leurs projets. De la création de
              stratégies de communication à la gestion des relations publiques,
              nous aidons les artistes à accroître leur visibilité et leur
              notoriété dans l'industrie.
            </p>
          </div>
          <div className="textgzik-container">
            <h5 id="Enregistrement & Mastering">Enregistrement & Mastering</h5>
            <p>
              Nous offrons des services d'enregistrement et de mastering de
              haute qualité pour garantir que les projets musicaux atteignent
              leur plein potentiel sonore. Avec notre équipement de pointe et
              notre expertise technique, nous assurons des résultats
              professionnels à chaque étape du processus.
            </p>
          </div>
        </div>
        <div className="sub-text-container sub-image-container">
          <img alt="sub" className="sub-image-gzik" src={psmusik} />
        </div>
        <div className="sub-text-container second-row">
          <div className="textgzik-container second-line">
            <h5 id="Distribution musicale">Distribution musicale</h5>
            <p>
              Nous proposons des services de distribution musicale pour aider
              les artistes à partager leur musique avec un public mondial. Grâce
              à nos partenariats avec les principales plateformes de streaming
              et de téléchargement, nous aidons les artistes à toucher un large
              auditoire et à maximiser leur potentiel de revenus.
            </p>
          </div>
          <div className="textgzik-container second-line">
            <h5 id="Facilitation">Facilitation</h5>
            <p>
              Nous facilitons toutes les étapes du processus créatif et de
              production musicale. De la planification des sessions
              d'enregistrement à la coordination des collaborations artistiques,
              nous offrons un soutien complet pour que les projets musicaux se
              concrétisent avec succès.
            </p>
          </div>
        </div>
      </section>
      <ReachOut />
    </>
  );
}

export default Psgzik;
