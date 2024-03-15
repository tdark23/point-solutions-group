import React, { useEffect } from "react";
import "./../App.css";

import BannerComponent from "../nComponents/BannerComponent";
import Trust from "../nComponents/Trust";
import CollectionComponent from "../nComponents/CollectionComponent";
import CreativeComponent from "../nComponents/CreativeComponent";
import HeroComponent from "../nComponents/HeroComponent";
import OverflowComponent from "../nComponents/OverflowComponent";
import ReachOut from "../nComponents/ReachOut";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll jusqu'au début de la page lorsque le composant est monté
  }, []); 
  return (
    <>
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
