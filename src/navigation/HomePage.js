import React, { useEffect } from "react";
import "./../App.css";

import BannerComponent from "../nComponents/BannerComponent";
import Trust from "../nComponents/Trust";
import CollectionComponent from "../nComponents/CollectionComponent";
import CreativeComponent from "../nComponents/CreativeComponent";
import HeroComponent from "../nComponents/HeroComponent";
import OverflowComponent from "../nComponents/OverflowComponent";
import ReachOut from "../nComponents/ReachOut";

function HomePage({ loading }) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll jusqu'au début de la page lorsque le composant est monté
  }, []); 
  return (
    <>
    {/* <Banner/> */}
      {/* {!loading && (
        <div className="transition-image final">
          <motion.img
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
            src={process.env.PUBLIC_URL + `/images/image-7.jpg`}
            layoutId="main-image-1"
          />
        </div>
      )} */}
      <BannerComponent/>
      <Trust/>
      <CollectionComponent/>
      <CreativeComponent/>
      <HeroComponent/>
      <OverflowComponent/>
      <ReachOut/>
    </>
  );
}

export default HomePage;
