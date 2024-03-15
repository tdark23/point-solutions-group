import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "./../../styles/components/cards.css";
import arrows from "./../../assets/icons/arrows.svg";

const FirstCard = () => {
  return (
    <div className="first-card">
      <div className="upper-container">
        <div className="left-arrow-container">
          <img className="arrows" src={arrows} alt="arrows" />
        </div>
        <div className="design-text">
          <h2>DE</h2>
          <h2 className="stroked-out">SIGN</h2>
          <h2>ER</h2>
        </div>
      </div>
      <div className="bottom-container">
        <p className="bottom-text">DESIGN FUTUR HERE.</p>
      </div>
    </div>
  );
};

const SecondCard = () => {
  return (
    <div className="first-card flex-col">
      <div className="upper-container">
        <p className="second-card-title">HIGHEST SUCCESS PERCENTAGE.</p>
      </div>
      <p className="second-card-deg">100%</p>
    </div>
  );
};

const ThirdCard = () => {
  return (
    <div className="first-card flex-col">
      <div className="upper-container">
        <div className="third flex-row">
          <p>ALL ABOUT</p>
          <GoArrowUpRight className="GoArrowUpRight" />
        </div>
      </div>
      <p className="third-card-text">HARDWORK AND DEDICATION</p>
    </div>
  );
};

const FourthCard = () => {
  return (
    <div className="first-card flex-col">
      <div className="upper-container">
        <p className="second-card-title">
          OUR SOLUTIONS ARE INCREASINGLY INNOVATIVE.
        </p>
      </div>
      <div className="bottom-container">
        <p className="second-card-deg fourth">FUTURE</p>
        <MdOutlineDoubleArrow className="MdOutlineDoubleArrow" />
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="service-card-container">
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <FourthCard />
    </div>
  );
};

export default Cards;
