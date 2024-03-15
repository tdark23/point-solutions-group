import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./../styles/components/start.css";

const Start = () => {
  return (
    <section className="start-section">
      <div className="cta-block">
        <div className="cta-text-block">
          <h5 className="title">Contactez-nous</h5>
          <h2 className="cta-text up no-wrap">Commençons</h2>
          <h2 className="cta-text down outlined">maintenant</h2>
        </div>
        <Link to="/contact" className="button-with-icon" href="/">
            <p className="call no-wrap">
                contactez-nous
            </p>
            <FaLongArrowAltRight />
        </Link>
      </div>
    </section>
  );
};

export default Start;
